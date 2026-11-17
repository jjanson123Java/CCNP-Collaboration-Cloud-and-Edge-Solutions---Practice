# CCNP CLCOR 350-801 Practice Tests

Free chapter-by-chapter "How much do I know?" practice tests for the **CCNP & CCIE Collaboration Core (CLCOR 350-801)** exam. They're organized to follow the chapters of the official study guide.

| | |
|---|---|
| **Practice online** | **https://jjanson123java.github.io/CCNP-CLCOR-Practice/** |
| **Download for offline use (ZIP)** | **https://github.com/jjanson123Java/CCNP-CLCOR-Practice/raw/main/download/CLCOR-Practice-Offline.zip** |
| **Study guide** | [CCNP and CCIE Collaboration Core CLCOR 350-801 Official Cert Guide, 2nd Edition — read on O'Reilly Learning](https://learning.oreilly.com/library/view/ccnp-and-ccie/9780138200893/) (requires an O'Reilly login) |

---

## What's inside

- **211 multiple-choice questions** across all **34 content chapters** of the guide, grouped by book part:
  AV Fundamentals · Endpoints · Network Requirements · Call Control · Edge Services · Webex Calling · Collaboration Applications · Troubleshooting
- **Test modes:** a single chapter, **All chapters — full exam** (211 questions), or **All chapters — random 50**
- **Answers A–D**, shuffled every time you load a test
- **Show / Hide answer** on each question, plus **Show all answers** for study mode
- **Every answer is source-checked.** Click *Show answer* to see the Cisco document or 350-801 study site it was checked against, labeled **Verified** (a source states it directly) or **Concept** (matches the topic, but no single source states it word for word)
- **Results screen**
  - **PASS / FAIL** against a pass mark you choose (70–90%, default 80%)
  - Final score, plus the percentage correct, incorrect and unanswered
  - Correct answers in **green**, wrong picks in **red**
  - For tests that cover more than one chapter: a **score for each chapter** and a **Chapters to study** list (every chapter below your pass mark, weakest first), with a one-click **Practice these chapters now** drill
- **Works offline** and can be **installed as an app** on Android, iPhone/iPad, Windows and Mac

> The questions are original practice items written to each chapter's topics. They aren't copied from the book. This project isn't affiliated with or endorsed by Cisco Systems or Cisco Press.

---

## How to use the practice tests

1. Open the site and pick a test from **Chapter test**.
2. Optionally tick **Shuffle question order** and set a **Pass mark** (80% by default).
3. Click **Load test** and answer each question by choosing A, B, C or D.
4. Use **Show answer** on any question for the correct answer, an explanation, and its source. Use **Show all answers** to review a whole chapter.
5. Click **Submit test**. If any questions are blank you'll be asked to confirm.
6. Read your results: **PASS/FAIL**, your score and percentage, and (for multi-chapter tests) the **chapters to study**.
7. Click **Retake** for a freshly shuffled version, or **Practice these chapters now** to drill only your weak chapters.

### About the pass mark
Cisco doesn't publish a fixed passing score for 350-801, and it can change between exam versions. 80% is a sensible readiness target for practice. Use 85–90% if you want a safety margin.

---

## Install it on your device (works without internet)

The site is a **Progressive Web App**. Once it's installed it opens like a normal app and runs fully offline.

| Device | How to install |
|---|---|
| **Android** (Chrome) | Open the site, then tap **Install app** on the page, or **⋮ → Install app / Add to Home screen** |
| **iPhone / iPad** (Safari) | Open the site, then tap **Share → Add to Home Screen** |
| **Windows** (Chrome or Edge) | Open the site, then click **Install app** on the page or the install icon in the address bar. It appears in the Start menu |
| **Mac** (Chrome or Edge) | Same as Windows. It appears in Launchpad / Applications |
| **Mac** (Safari 17 or later) | **File → Add to Dock** |

### Offline ZIP (no install needed)
1. Download **[CLCOR-Practice-Offline.zip](https://github.com/jjanson123Java/CCNP-CLCOR-Practice/raw/main/download/CLCOR-Practice-Offline.zip)**.
2. Unzip it anywhere: a laptop, a USB stick, or a phone's Files app.
3. Open **`index.html`** in any browser. Everything is in that one file, so no internet is needed.

---

## Repository layout

```
index.html                 The whole app: page, styles, questions, sources and logic in one file
manifest.webmanifest       App name, icons and colors used when installing
sw.js                      Service worker that caches the app for offline use
icons/                     App icons (Android, iOS, desktop, favicon)
download/
  CLCOR-Practice-Offline.zip   Offline package (index.html + README)
.nojekyll                  Tells GitHub Pages to serve the files as they are
```

### Hosting your own copy
1. Fork this repo.
2. Go to **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, then branch **main** and folder **/ (root)**.
3. Your copy will be live at `https://<your-username>.github.io/CCNP-CLCOR-Practice/`.

### Updating questions
The question bank (`BANK`) and the source map (`SRC` / `VER`) sit near the top of the `<script>` in `index.html`. Each question is `[question, correct answer, wrong 1, wrong 2, wrong 3, explanation]`. The correct answer is always listed first in the file, and the app shuffles the options. After you edit, bump `VERSION` in `sw.js` so installed apps pick up the change.

---

## Sources used to verify answers
Answers were checked against Cisco documentation (design guides, configuration guides, tech notes, data sheets, Webex Help) and independent 350-801 study material: **OpenExamPrep**, **Cisco Press** chapter excerpts, **CBT Nuggets**, **learncisco.net** and **Global Knowledge**. The full source list is inside the app under **Answer verification**. Braindump sites aren't used.
