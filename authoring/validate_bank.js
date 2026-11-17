// Validate an exam folder before building.
// Usage: node validate_bank.js exam/clcei
// Checks: question shape, answer/distractor uniqueness, VER length per chapter, every source id exists,
// status is "v" or "c", no "all/none of the above", explanation present, chapter numbers unique.
const fs = require("fs"), path = require("path");
const dir = process.argv[2];
if (!dir) { console.error("Usage: node validate_bank.js <exam_dir>"); process.exit(2); }
const code = fs.readFileSync(path.join(dir, "questions.js"), "utf8") + "\n" +
             fs.readFileSync(path.join(dir, "sources.js"), "utf8") + "\nreturn {BANK,SRC,VER,CHANGES};";
const { BANK, SRC, VER, CHANGES } = new Function(code)();
const errs = [], warn = []; let q = 0, v = 0; const seenCh = new Set(); const usedSrc = new Set();
for (const ch of BANK) {
  if (seenCh.has(ch.n)) errs.push(`Duplicate chapter number ${ch.n}`); seenCh.add(ch.n);
  if (!ch.part || !ch.title) errs.push(`Ch ${ch.n}: missing part/title`);
  if (!Array.isArray(ch.qs) || ch.qs.length < 5) errs.push(`Ch ${ch.n}: needs at least 5 questions (has ${ch.qs && ch.qs.length})`);
  const ver = VER[ch.n];
  if (!ver) errs.push(`Ch ${ch.n}: no VER entry`);
  else if (ver.length !== ch.qs.length) errs.push(`Ch ${ch.n}: VER has ${ver.length} entries but chapter has ${ch.qs.length} questions`);
  ch.qs.forEach((x, i) => {
    q++;
    const tag = `Ch ${ch.n} Q${i + 1}`;
    if (!Array.isArray(x) || x.length !== 6) { errs.push(`${tag}: must be [question, correct, wrong1, wrong2, wrong3, explanation]`); return; }
    if (x.some(s => typeof s !== "string" || !s.trim())) errs.push(`${tag}: empty field`);
    const opts = x.slice(1, 5).map(s => s.trim().toLowerCase());
    if (new Set(opts).size !== 4) errs.push(`${tag}: duplicate answer options`);
    if (opts.some(o => /all of the above|none of the above|both a and b/.test(o))) errs.push(`${tag}: no "all/none of the above" options (options are shuffled)`);
    if (/<script|<\/?iframe/i.test(x.join(" "))) errs.push(`${tag}: HTML not allowed`);
    const e = ver && ver[i];
    if (e) {
      if (!Array.isArray(e[0]) || !e[0].length) errs.push(`${tag}: VER needs at least one source id`);
      else e[0].forEach(id => { usedSrc.add(id); if (!SRC[id]) errs.push(`${tag}: unknown source id "${id}"`); });
      if (e[1] !== "v" && e[1] !== "c") errs.push(`${tag}: status must be "v" or "c"`);
      if (e[1] === "v") v++;
    }
  });
}
for (const [id, s] of Object.entries(SRC)) {
  if (!Array.isArray(s) || s.length !== 4) errs.push(`SRC.${id}: must be [title, site, type, url]`);
  else {
    if (!["cisco", "prep", "ref"].includes(s[2])) errs.push(`SRC.${id}: type must be cisco|prep|ref`);
    if (!/^https?:\/\//.test(s[3])) errs.push(`SRC.${id}: url must start with http(s)://`);
    if (/examtopics|braindump|dumps?\b|pupuweb|itexams|exam4future|prepbolt|spoto/i.test(s[3])) errs.push(`SRC.${id}: braindump/dump sites are not allowed as sources`);
  }
  if (!usedSrc.has(id)) warn.push(`SRC.${id} is defined but never used`);
}
if (!Array.isArray(CHANGES)) errs.push("CHANGES must be an array (can be empty)");
const pct = q ? Math.round(v / q * 100) : 0;
console.log(`Chapters: ${BANK.length}  Questions: ${q}  Verified: ${v} (${pct}%)  Concept: ${q - v}  Sources: ${Object.keys(SRC).length}`);
if (pct < 75) warn.push(`Only ${pct}% verified - target is 75%+ (CLCOR reached 81%)`);
warn.forEach(w => console.log("WARN  " + w));
if (errs.length) { errs.forEach(e => console.log("ERROR " + e)); process.exit(1); }
console.log("OK");
