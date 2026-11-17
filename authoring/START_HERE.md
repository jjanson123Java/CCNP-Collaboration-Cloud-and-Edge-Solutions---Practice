# CLCEI practice test — Codex kit

This kit lets Codex build the CLCEI 300-820 practice test with the same app, format and source-verification method as the live CLCOR test.

## Steps
1. Unzip this kit into a folder, for example `Documents\clcei-kit`.
2. Optional: if you've read chapters yourself and want questions to follow your emphasis, create `exam/clcei/OWNER_NOTES.md` and write your own notes in it, chapter by chapter, in your own words. Codex uses them as topic guidance.
3. Open Codex Desktop with that folder as the workspace.
4. Open `CODEX_PROMPT.md`, copy everything below the line, and paste it into Codex.
5. Let Codex sign in to **GitHub** when it asks; it needs push access to `jjanson123Java/CCNP-CLCOR-Practice`. It doesn't need O'Reilly. The prompt tells it not to sign in there.
6. When it finishes, check its report: the URLs, the % verified, and its list of questions it's unsure about.

## What you get
| | |
|---|---|
| CLCEI online | https://jjanson123java.github.io/CCNP-CLCOR-Practice/clcei/ |
| CLCEI offline ZIP | https://github.com/jjanson123Java/CCNP-CLCOR-Practice/raw/main/download/CLCEI-Practice-Offline.zip |
| CLCOR online (unchanged, plus a link to CLCEI) | https://jjanson123java.github.io/CCNP-CLCOR-Practice/ |

## What's already proven
- `template/exam_template.html` + `build_exam.py` rebuild the live CLCOR page **byte-for-byte**. The only change is the new "CLCEI 300-820 test" link.
- A dry run with a stub question bank passed: the page builds, grading and Pass/Fail work, the cross-links work, it works offline, and the ZIP opens from disk.

## Files
| File | Purpose |
|---|---|
| `CODEX_PROMPT.md` | The full instructions for Codex |
| `build_exam.py` | Builds an exam page from the template and the question/source files |
| `validate_bank.js` | Validation gate: question format, sources, % verified, blocks dump sites |
| `make_offline_zips.py` | Rebuilds both offline ZIP downloads |
| `template/exam_template.html` | The shared app (don't edit) |
| `shared/sw.js` | Offline cache covering both exams |
| `exam/clcor-reference/` | The live CLCOR exam, used as the format and quality reference |
| `exam/clcei/outline.json` | The 21 book chapters + 6 CLHCT v2.0 sections, with topics |
| `exam/clcei/config.json` | CLCEI page title, O'Reilly link, URLs |
