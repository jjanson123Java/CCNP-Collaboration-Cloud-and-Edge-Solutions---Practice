# Codex task: build the CLCEI 300-820 practice test

Paste everything below the line into Codex. Run it from the folder where you unzipped this kit (the folder containing `CODEX_PROMPT.md`).

---

You are adding a second practice exam to an existing GitHub Pages site. The first exam (CLCOR 350-801) is live and was built by another engineer using the exact tooling in this kit. Your job is to produce a **CLCEI 300-820** exam that matches it in format, quality and verification standard. Work through the steps below in order and do not skip the validation gates.

## 0. Context

- **Repo:** https://github.com/jjanson123Java/CCNP-CLCOR-Practice (public, branch `main`, GitHub Pages serves the repo root)
- **Live CLCOR exam:** https://jjanson123java.github.io/CCNP-CLCOR-Practice/ (built from `exam/clcor-reference/`)
- **New CLCEI exam will live at:** https://jjanson123java.github.io/CCNP-CLCOR-Practice/clcei/
- **Study guide the chapters follow:** *CCNP Collaboration Cloud and Edge Solutions CLCEI 300-820 Official Cert Guide* (Ball & Arneson, Cisco Press, 2021, ISBN 9780136733867). The chapter list and section headings are already in `exam/clcei/outline.json`, taken from O'Reilly's public table of contents.
- **Exam versions:** the book was written for CLCEI v1.0. On 2026-02-03 Cisco replaced the exam with **CLHCT 300-820 v2.0** (Implementing Cisco Collaboration Hybrid and Cloud Technologies). Chapters 1–21 follow the book. Chapters 22–27 are extra sections for v2.0 topics the book doesn't cover.

## 1. Hard rules (read before writing anything)

1. **Do not sign in to O'Reilly and do not read, copy or download the book's text,** even if credentials are available. O'Reilly licenses its content for personal use and this site is public. Use only the chapter outline in `exam/clcei/outline.json`, public Cisco documentation, and the study sites listed below. If the owner has supplied their own notes in `exam/clcei/OWNER_NOTES.md`, you may use them as topic guidance.
2. **Every question must be original.** Do not copy questions from the book, from Pearson Test Prep, or from any website. Never use braindump sites (ExamTopics, ITExams, PrepBolt, Exam4Future, SPOTO, PupuWeb or any "dumps" site): not as sources, and not for inspiration. `validate_bank.js` rejects dump-site URLs.
3. **Current product behavior wins.** If Cisco's current docs differ from what the book taught (for example, Expressway licensing is now Smart Licensing rather than option/release keys), write the question to current behavior and mention the difference in the explanation.
4. **Never mark a question "v" (Verified) unless you opened the cited page and it states the correct answer.** If you can't find a page that states it directly, use status "c" (Concept) and cite the closest authoritative page. Don't invent URLs: only cite pages you actually loaded.
5. Questions are plain text: no HTML, and no "all of the above", "none of the above" or "both A and B" (options are shuffled into A–D at runtime).

## 2. Files in this kit

```
CODEX_PROMPT.md               this file
build_exam.py                 builds <folder>/index.html (+ manifest) from template + exam data
validate_bank.js              validation gate: run before every build
make_offline_zips.py          rebuilds download/*.zip offline packages
template/exam_template.html   the shared app (UI, grading, Pass/Fail, chapters to study, offline/PWA). Do not edit it
shared/sw.js                  service worker that caches both exams; copy it to the repo root
exam/clcor-reference/         the live CLCOR exam: your FORMAT and QUALITY reference
    questions.js              211 questions; study the style
    sources.js                SRC catalog, VER mapping, CHANGES list
    config.json
exam/clcei/
    outline.json              21 book chapters + 6 v2.0 sections, with section topics
    config.json               page settings (fill in prep_sites_html)
reference/README_current.md   the repo's current README (you will extend it)
```

## 3. Data formats (match `exam/clcor-reference/` exactly)

`exam/clcei/questions.js`:
```js
const BANK = [
{n:1,part:"Part I: Key Concepts",title:"Introduction to the Cisco Expressway Solution",qs:[
["Question text?","Correct answer","Wrong 1","Wrong 2","Wrong 3","One- or two-sentence explanation of why the answer is right."],
...
]},
...
];
```
- `n`, `part`, `title` come from `outline.json`. Keep chapter numbers 1–27 in order.
- **Write the correct answer first in the file.** The app shuffles the options into A–D.
- Make the distractors plausible (same category, similar length). Avoid giving the answer away with a "longest option" pattern.
- **Counts:** 6–7 questions per book chapter (1–21), 5–6 per v2.0 section (22–27), roughly 160–180 in total. Spread each chapter's questions across its listed sections.
- **Mix of question types:** facts and defaults (ports, menu paths, order of operations), "what happens if…", troubleshooting symptom → cause, and "which setting/record/certificate SAN is required". A few regex questions in Ch 4 should ask which pattern matches or what a transform produces.

`exam/clcei/sources.js`:
```js
const SRC = {
  exp_admin_x15:["Cisco Expressway Administrator Guide (X15.x) – <section>","Cisco","cisco","https://www.cisco.com/..."],
  ...
};
const VER = {
  1:[ [["exp_admin_x15"],"v"], [["oep_clcei_1"],"c"], ... ],   // one entry per question, same order as BANK
  ...
};
const CHANGES = [
  "Ch. 1: licensing questions use current Smart Licensing; the book describes option/release keys.",
  ...
];
```
- `SRC` entry: `[title, site name, type, url]`. **Type** is `cisco` (cisco.com, help.webex.com, Cisco Live, Cisco Press), `prep` (independent exam-prep or training sites) or `ref` (community or general reference).
- `VER[n]` must have exactly one entry per question in chapter `n`.
- `CHANGES` holds the bullet list shown in the app's "Corrections made during verification" panel. Record book-vs-current differences and anything you rewrote during verification.

## 4. Where to verify answers (in order of preference)

1. **Cisco Expressway docs** (current X15.x where possible): Administrator Guide, Basic Configuration (Expressway-E/C), Mobile and Remote Access Through Cisco Expressway Deployment Guide, Certificate Creation and Use Deployment Guide, Cluster Creation and Maintenance Deployment Guide, IP Port Usage for Firewall Traversal, Expressway Smart Licensing docs. Index: https://www.cisco.com/c/en/us/support/unified-communications/expressway-series/products-maintenance-guides-list.html
2. **Webex Help Center** (help.webex.com): Directory Connector, Hybrid Calendar (Exchange, Office 365, Google), Hybrid Message Service, Video Mesh deployment guide, Webex Edge Audio, Edge for Devices, Local Gateway, Survivability Gateway, SSO, SCIM, Control Hub roles.
3. **Cisco tech notes and Cisco Live PDFs** (cisco.com/c/en/us/support/docs/…, ciscolive.com BRKCOL decks).
4. **Exam outlines:** CLCEI v1.2 https://learningcontent.cisco.com/documents/marketing/exam-topics/300-820-CLCEI-v1.2.pdf and CLHCT v2.0 https://learningcontent.cisco.com/documents/marketing/exam-topics/300-820-CLHCT-v2.0.pdf. **Before writing Ch 22–27, open the v2.0 PDF, then rename, merge or drop sections in outline.json so they match its numbered topics,** and update the BANK titles to match.
5. **Independent study sites** (type `prep`): OpenExamPrep (open-exam-prep.com, CLCEI/CLHCT study guide pages if present), Cisco Press article excerpts (ciscopress.com/articles), CBT Nuggets blog, learncisco.net, Global Knowledge.

**Target:** at least **75% of questions "v"** (the CLCOR exam reached 81%). `validate_bank.js` warns below 75%.

## 5. Build steps

```bash
# clone the site repo next to this kit
git clone https://github.com/jjanson123Java/CCNP-CLCOR-Practice.git repo

# 1) write exam/clcei/questions.js and exam/clcei/sources.js; fill prep_sites_html in exam/clcei/config.json
#    (copy the <li> style from exam/clcor-reference/config.json; list only sites you actually cited;
#     keep the last <li> stating braindump sites were not used)

# 2) validation gate: must print OK with no ERROR lines
node validate_bank.js exam/clcei

# 3) build both exams (CLCOR is rebuilt only to add the "CLCEI 300-820 test" link to its toolbar)
python3 build_exam.py exam/clcor-reference repo
python3 build_exam.py exam/clcei repo

# 4) shared service worker (caches both exams for offline use)
cp shared/sw.js repo/sw.js

# 5) offline ZIPs (writes repo/download/CLCOR-Practice-Offline.zip and CLCEI-Practice-Offline.zip)
python3 make_offline_zips.py repo
```

Expected result in `repo/`:
```
index.html                       CLCOR (unchanged except the new CLCEI link)
clcei/index.html                 new CLCEI exam
clcei/manifest.webmanifest       lets CLCEI install as its own app
sw.js                            updated (VERSION collab-v1.1.0, caches clcei/)
download/CLCEI-Practice-Offline.zip   new
download/CLCOR-Practice-Offline.zip   rebuilt
```

## 6. README update

Extend `repo/README.md` (start from `reference/README_current.md`):
- Retitle it **"CCNP Collaboration Practice Tests"**, with a table of both exams, each row giving its online URL, offline ZIP URL and O'Reilly study-guide link (human-readable link text, never a bare URL):
  - CLCOR 350-801: https://jjanson123java.github.io/CCNP-CLCOR-Practice/ · download/CLCOR-Practice-Offline.zip · https://learning.oreilly.com/library/view/ccnp-and-ccie/9780138200893/
  - CLCEI 300-820: https://jjanson123java.github.io/CCNP-CLCOR-Practice/clcei/ · download/CLCEI-Practice-Offline.zip · https://learning.oreilly.com/library/view/ccnp-collaboration-cloud/9780136733867/
- Add a short **"Exam versions"** note: both books predate the v2.0 exams (CLCOR v2.0 and CLHCT v2.0, effective 2026-02-03). The CLCEI test's Part V (Ch 22–27) covers v2.0-only topics.
- Keep the existing usage, install (Android / iPhone / Windows / Mac) and offline sections, applied to both exams. Update the repository layout block.

## 7. Test before pushing (required)

Serve the repo locally (`python3 -m http.server 8000` inside `repo/`), then in a browser:
1. Open `/clcei/`. The title, the O'Reilly link under the title, and the chapter list (Ch 1–27 grouped by Part) appear.
2. Load **All chapters — random 50**, answer, and submit. Check PASS/FAIL, the percentages, the per-chapter table, **Chapters to study**, and the **Practice these chapters now** drill.
3. Click **Show answer**: the "Verified against:" or "Topic reference:" link opens a real page.
4. Open the **Answer verification** panel. Counts, corrections and the source list render.
5. The **CLCOR 350-801 test** link goes to `/`, and the CLCOR page's **CLCEI 300-820 test** link goes to `/clcei/`.
6. With the browser offline (DevTools → Network → Offline), reload `/clcei/`. It still works.
7. Unzip `download/CLCEI-Practice-Offline.zip` and open `index.html` from disk. It works with no server, and the toolbar shows "offline copy".
8. The browser console shows no errors on either page.

## 8. Commit and push

```bash
cd repo
git add -A
git commit -m "Add CLCEI 300-820 practice test (book chapters + CLHCT v2.0 sections), offline ZIP, README"
git push origin main
```
GitHub Pages is already enabled (branch `main`, root). After the "pages build and deployment" action turns green, confirm:
- https://jjanson123java.github.io/CCNP-CLCOR-Practice/clcei/ loads the CLCEI test
- https://jjanson123java.github.io/CCNP-CLCOR-Practice/ still loads CLCOR, with the new CLCEI link
- https://github.com/jjanson123Java/CCNP-CLCOR-Practice/raw/main/download/CLCEI-Practice-Offline.zip downloads

## 9. Report back

Finish with:
- the three URLs above
- `validate_bank.js` output (chapters, questions, % verified)
- any outline changes you made for v2.0 (Ch 22–27)
- a list of any questions you're unsure about, so the owner (a Cisco TAC collaboration engineer) can review them
