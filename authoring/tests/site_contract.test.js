const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const childProcess = require('child_process');

const repo = path.resolve(__dirname, '..', '..');
const examDir = path.join(repo, 'authoring', 'exam', 'clcei');

function loadConst(file, name) {
  const source = fs.readFileSync(file, 'utf8') + `\nthis.__value = ${name};`;
  const context = {};
  vm.createContext(context);
  vm.runInContext(source, context, { filename: file });
  return context.__value;
}

const bank = loadConst(path.join(examDir, 'questions.js'), 'BANK');
const ver = loadConst(path.join(examDir, 'sources.js'), 'VER');
const src = loadConst(path.join(examDir, 'sources.js'), 'SRC');
const coverage = JSON.parse(fs.readFileSync(path.join(examDir, 'coverage.json'), 'utf8'));

assert.strictEqual(bank.length, 28, 'expected 21 book chapters plus 7 CLHCT v2.0 domains');
assert.strictEqual(bank.map(ch => ch.n).join(','), Array.from({length: 28}, (_, i) => i + 1).join(','));

let total = 0;
let verified = 0;
for (const chapter of bank) {
  const expected = chapter.n <= 21 ? 6 : 5;
  assert.strictEqual(chapter.qs.length, expected, `chapter ${chapter.n} question count`);
  assert.strictEqual(ver[chapter.n].length, expected, `chapter ${chapter.n} verification count`);
  total += expected;
  for (const entry of ver[chapter.n]) {
    assert.ok(Array.isArray(entry[0]) && entry[0].length, `chapter ${chapter.n} source keys`);
    for (const key of entry[0]) assert.ok(src[key], `unknown source key ${key}`);
    if (entry[1] === 'v') verified++;
  }
}
assert.strictEqual(total, 161, 'expected 161 questions');
assert.ok(verified / total >= 0.75, `verified coverage ${(verified / total * 100).toFixed(1)}% is below 75%`);

for (const chapter of coverage.chapters) {
  assert.ok(chapter.sections.length > 0, `chapter ${chapter.n} has no sections`);
  for (const section of chapter.sections) {
    assert.ok(section.question_ids.length > 0, `uncovered section: chapter ${chapter.n} ${section.name}`);
  }
}

for (const relative of ['index.html', 'manifest.webmanifest', 'sw.js', 'download/CLCEI-Practice-Offline.zip']) {
  assert.ok(fs.existsSync(path.join(repo, relative)), `missing generated deliverable ${relative}`);
}

const html = fs.readFileSync(path.join(repo, 'index.html'), 'utf8');
assert.match(html, /CLCEI 300-820/);
assert.match(html, /Chapters to study/);
assert.match(html, /Show answer/);

const validation = childProcess.execFileSync(
  process.execPath,
  [path.join(repo, 'authoring', 'validate_bank.js'), examDir],
  {encoding: 'utf8'}
);
assert.doesNotMatch(validation, /WARN|ERROR/, 'bank validation must be warning-free');

console.log(`OK: ${bank.length} chapters, ${total} questions, ${(verified / total * 100).toFixed(1)}% verified`);
