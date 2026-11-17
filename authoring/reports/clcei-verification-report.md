# CLCEI / CLHCT Practice Test Verification Report

Date: 2026-11-17

## Coverage

- Book chapters: 21
- Current CLHCT v2.0 domains: 7
- Total sections presented as chapters: 28
- Total original questions: 161
- Directly verified: 133 (82.6%, displayed as 83%)
- Concept references: 28
- Source records: 19
- Uncovered outline headings: 0

The first 21 chapters follow the O'Reilly/Cisco Press table of contents. The final seven sections were corrected from the provisional six-section handoff and now match the seven domains in Cisco's official CLHCT 300-820 v2.0 outline:

1. Suite and Devices Configuration
2. Cloud Management
3. Suite and Devices Management
4. Suite and Device Administration
5. Hybrid and Migration to the Cloud
6. Security
7. APIs and Programmability

## Current-behavior corrections

- Expressway licensing questions use current Smart Licensing rather than teaching historical option/release keys as the active method.
- Cloud and hybrid-service chapters explicitly warn where 2021 connector architectures or product lifecycles require current Cisco guidance.
- Current-exam-only content is separated from the 21 book chapters so diagnostic chapter results continue to tell the learner which book chapter to revisit.

## Automated validation

```text
Chapters: 28  Questions: 161  Verified: 133 (83%)  Concept: 28  Sources: 19
OK
```

The bank validator checks question shape, four unique options, prohibited answer forms, source-key integrity, one verification record per question, valid status, source URL shape, prohibited dump domains, and the 75% verification threshold. The site contract additionally checks ordered chapter coverage, exact question counts, coverage-map completeness, generated artifacts, remediation UI text, and warning-free validation.

## Browser acceptance

Microsoft Edge headless acceptance passed:

- 28 chapter choices plus full-exam and random-50 modes
- random-50 load
- Show answer and source hyperlink rendering
- unanswered submission confirmation
- FAIL result and Chapters to study display
- Practice these chapters now remediation drill
- service-worker-backed offline reload
- extracted ZIP opened directly from `file://`
- no browser console or page errors

Result:

```text
OK: online scoring, remediation, sources, service-worker offline reload, and file-based offline copy
```

## Source-link check

All 19 distinct Cisco, Webex Help, O'Reilly/Cisco Press, official exam-outline, and Webex Developer URLs completed the bounded HTTP reachability sweep without a failed status. Redirects were followed to their current destinations.

## Items for owner review

- The 28 Concept items are intentionally labeled and are the final question in each section. They test synthesis or troubleshooting judgment where no single checked page states the complete answer in the same words.
- Chapter 19 and Chapter 21 contain historical hybrid-message and Webex Messenger context. They are version-labeled so learners do not treat retired architecture as a recommended current deployment.
