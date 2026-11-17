# CLCEI / CLHCT Practice Test Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish an original, chapter-diagnostic CLCEI 300-820 practice exam with separate current CLHCT v2.0 coverage, reliable answer citations, and online/offline delivery matching the existing CLCOR exam.

**Architecture:** Use the supplied data-driven generator and existing CLCOR page as the compatibility baseline. Author CLCEI questions and verification metadata as separate JavaScript data files, validate them before generation, then produce the `/clcei/` page, shared service worker, offline ZIPs, and two-exam README.

**Tech Stack:** Static HTML/CSS/JavaScript, Python 3 build scripts, Node.js validation, GitHub Pages, browser acceptance testing.

**Spec:** `docs/superpowers/specs/2026-11-17-clcei-practice-test-design.md`

## Global Constraints

- Questions must be original and mapped to book chapters 1–21 or clearly separated current CLHCT v2.0 sections.
- Never copy book/Pearson questions or use braindump sites.
- Current Cisco/Webex behavior overrides outdated book behavior and differences must be disclosed.
- `Verified` requires a directly supporting page that was opened; otherwise use `Concept`.
- Target 160–180 questions and at least 75% directly verified.
- Preserve the existing CLCOR functionality, branding, and offline behavior.

## Review Focus

- A source URL redirects or disappears: validation/build must preserve traceability and the final link check must report failures.
- A chapter has questions but misses one foundation topic: coverage audit must fail or report the exact uncovered heading.
- Source metadata and BANK ordering diverge: validator must reject the chapter with exact expected/actual counts.
- A student drills weak chapters after a mixed test: the generated selection must contain only the reported weak chapters.
- A stale service worker serves the previous site: cache version and asset list must change and offline reload must use the new CLCEI assets.

---

### Task 1: Establish the authoring workspace and baseline

**Files:**
- Import for authoring: supplied `CLCEI-Codex-Kit/codex-kit/*`
- Test: existing `index.html`, `sw.js`, and `download/CLCOR-Practice-Offline.zip`

**Interfaces:**
- Consumes: published repository at commit `3230b27` and supplied Codex kit.
- Produces: reproducible authoring tree and a recorded baseline validation/build comparison.

- [ ] Copy the kit's authoring files into a non-published `authoring/` directory while preserving their relative paths.
- [ ] Add a fixture test that rebuilds CLCOR and compares the generated page's functional data and toolbar changes against the current page.
- [ ] Run the fixture test and record the expected initial difference (only the planned cross-exam link).
- [ ] Commit the authoring baseline and test.

### Task 2: Confirm the book and current-exam coverage map

**Files:**
- Modify: `authoring/exam/clcei/outline.json`
- Create: `authoring/exam/clcei/coverage.json`
- Test: `authoring/tests/validate_coverage.js`

**Interfaces:**
- Consumes: O'Reilly chapter/foundation-topic contents and official current 300-820 exam-topic PDF.
- Produces: ordered chapter/section records and `coverage.json` mapping each required heading to planned question IDs.

- [ ] Write coverage tests requiring all 21 book chapters, every foundation-topic heading, and every retained current-exam topic.
- [ ] Run the test and verify it fails for missing question mappings.
- [ ] Reconcile provisional chapters 22–27 with the current official outline; rename, merge, or remove sections as evidence requires.
- [ ] Populate the coverage skeleton and verify structural tests pass while question-count checks remain pending.
- [ ] Commit the evidence-backed outline.

### Task 3: Strengthen bank and source validation

**Files:**
- Modify: `authoring/validate_bank.js`
- Test: `authoring/tests/validate_bank.test.js`

**Interfaces:**
- Consumes: `questions.js`, `sources.js`, `outline.json`, and `coverage.json`.
- Produces: nonzero exit on malformed questions, mismatched verification rows, prohibited domains, uncovered headings, or verification below 75%.

- [ ] Add failing fixtures for mismatched counts, missing source keys, HTML question text, prohibited dump URLs, uncovered headings, and sub-75% verification.
- [ ] Run tests and confirm each fixture fails for its intended reason.
- [ ] Implement the minimum validator changes to make all validator tests pass.
- [ ] Run the complete validator test suite.
- [ ] Commit validation safeguards.

### Task 4: Author and verify Part I — Key Concepts

**Files:**
- Create/modify: `authoring/exam/clcei/questions.js`
- Create/modify: `authoring/exam/clcei/sources.js`
- Modify: `authoring/exam/clcei/coverage.json`

**Interfaces:**
- Consumes: Chapters 1–5 headings plus current Cisco Expressway documentation.
- Produces: 30–35 original questions with explanation, verification status, source keys, and complete topic coverage.

- [ ] Draft questions across licensing, deployment/settings, protocol configuration, regular expressions, and security.
- [ ] Open and record authoritative sources for every correct answer; downgrade unsupported items to Concept.
- [ ] Run validation and link checks for Part I.
- [ ] Review distractor plausibility and remove answer-length/pattern clues.
- [ ] Commit Part I.

### Task 5: Author and verify Part II — Expressway Configurations

**Files:** same data and coverage files as Task 4.

**Interfaces:**
- Consumes: Chapters 6–12 headings plus current Expressway configuration, clustering, traversal, and troubleshooting documentation.
- Produces: 42–49 original questions and complete Part II coverage.

- [ ] Draft registration, call-processing, bandwidth, multisite/B2B, clustering, and troubleshooting questions.
- [ ] Verify each answer against opened authoritative sources and record material book/current differences.
- [ ] Run validation and link checks for Part II.
- [ ] Perform distractor and ambiguity review.
- [ ] Commit Part II.

### Task 6: Author and verify Part III — Mobile and Remote Access

**Files:** same data and coverage files as Task 4.

**Interfaces:**
- Consumes: Chapters 13–15 and current MRA deployment/troubleshooting documentation.
- Produces: 18–21 original MRA questions and complete Part III coverage.

- [ ] Draft architecture, configuration, certificate/DNS, and troubleshooting scenarios.
- [ ] Verify answers and explicitly record version-sensitive changes.
- [ ] Run validation, source-link checks, and ambiguity review.
- [ ] Commit Part III.

### Task 7: Author and verify Part IV — Webex Technologies

**Files:** same data and coverage files as Task 4.

**Interfaces:**
- Consumes: Chapters 16–21 plus current Webex Help/Cisco lifecycle documentation.
- Produces: 36–42 original questions, including transparent treatment of retired or changed hybrid services.

- [ ] Draft cloud collaboration, Directory, Calendar, Message, Edge, Video Mesh, and Jabber deployment questions.
- [ ] Verify current behavior; rewrite obsolete material as historical/version-awareness questions only when educationally useful.
- [ ] Run validation, source-link checks, and ambiguity review.
- [ ] Commit Part IV.

### Task 8: Author and verify current CLHCT v2.0 additions

**Files:** same data and coverage files as Task 4.

**Interfaces:**
- Consumes: reconciled current exam outline from Task 2 and current Cisco/Webex documentation.
- Produces: 30–36 questions clearly separated from book Chapters 1–21.

- [ ] Draft 5–6 questions for each retained current-exam-only section.
- [ ] Verify every answer and update the corrections/current-version notes.
- [ ] Run full bank validation and confirm 160–180 total questions and at least 75% Verified.
- [ ] Commit current-exam additions.

### Task 9: Generate the two-exam site and offline packages

**Files:**
- Modify: `index.html`, `sw.js`, `README.md`
- Create: `clcei/index.html`, `clcei/manifest.webmanifest`, `download/CLCEI-Practice-Offline.zip`
- Rebuild: `download/CLCOR-Practice-Offline.zip`

**Interfaces:**
- Consumes: validated banks, config, shared template, and build scripts.
- Produces: deployable GitHub Pages tree with cross-links and offline artifacts.

- [ ] Add generator assertions for correct page titles, chapter grouping, cross-links, manifest identity, and ZIP contents.
- [ ] Run assertions against pre-build state and confirm expected failures.
- [ ] Build both pages, update service worker/cache version, and generate both ZIPs.
- [ ] Extend README with both online tests, both offline downloads, both study guides, and exam-version disclosure.
- [ ] Run generator assertions and validate ZIP integrity.
- [ ] Commit generated deliverables.

### Task 10: End-to-end acceptance and publication

**Files:**
- Create: `authoring/reports/clcei-verification-report.md`
- Modify only if defects are found: generated/source files owned by prior tasks.

**Interfaces:**
- Consumes: complete site tree.
- Produces: acceptance evidence, verification statistics, uncertainty list, and published URLs.

- [ ] Serve the site locally and test chapter selection, random 50, submission, PASS/FAIL, per-chapter results, weak-chapter drill, and Show answer links.
- [ ] Test CLCOR↔CLCEI cross-links, browser-console errors, service-worker offline reload, and file-opened offline ZIP behavior.
- [ ] Run a bounded HTTP status/link check for all cited sources and report redirects/failures without silently replacing evidence.
- [ ] Write the final verification report with chapter/question totals, Verified percentage, outline changes, changed-current-behavior notes, and uncertain items.
- [ ] Run all validators and acceptance tests from a clean checkout.
- [ ] Request code review, fix actionable findings, and rerun verification.
- [ ] Commit final evidence, push the branch, merge/publish only after user approval, then verify all three production URLs.
