# CCNP Collaboration Cloud and Edge Solutions Practice Test

Free chapter-by-chapter assessment for the **CLCEI 300-820 Official Cert Guide**, with a separate final part covering the current **CLHCT 300-820 v2.0** exam domains.

| Resource | Link |
|---|---|
| Practice online | [Open the CLCEI/CLHCT practice test](https://jjanson123java.github.io/CCNP-Collaboration-Cloud-and-Edge-Solutions---Practice/) |
| Offline ZIP | [Download CLCEI-Practice-Offline.zip](https://github.com/jjanson123Java/CCNP-Collaboration-Cloud-and-Edge-Solutions---Practice/raw/main/download/CLCEI-Practice-Offline.zip) |
| Study guide | [CCNP Collaboration Cloud and Edge Solutions CLCEI 300-820 Official Cert Guide on O'Reilly](https://learning.oreilly.com/library/view/ccnp-collaboration-cloud/9780136733867/) |

## What is included

- **161 original questions** across 28 sections.
- Chapters 1–21 follow the book so results identify exactly which chapters need to be read again.
- Chapters 22–28 separately cover the seven current CLHCT v2.0 exam domains.
- Single-chapter, full-exam, random-50, and weak-chapter practice modes.
- Per-chapter scoring, configurable pass mark, and a **Chapters to study** list.
- Every answer has an explanation and a reliable source link under **Show answer**.
- **133 questions (83%)** are directly verified; 28 are transparently labeled as concept references.
- Installable Progressive Web App plus a self-contained offline ZIP.

The questions are original. They are not copied from the book, Pearson practice tests, or certification dumps. Current Cisco and Webex documentation takes precedence when product behavior has changed since the book was published.

## How to use it

1. Choose a chapter or an all-chapters mode.
2. Optionally shuffle questions and choose a pass mark.
3. Submit the test to see overall and per-chapter results.
4. Review **Chapters to study**, then select **Practice these chapters now**.
5. Use **Show answer** to read the explanation and open the supporting source.

## Offline use

Download and extract `CLCEI-Practice-Offline.zip`, then open `index.html`. The test runs locally without a web server or internet connection. External verification links naturally require internet access.

## Exam-version note

The book was published for CLCEI 300-820 v1.x. Cisco's current exam is **Implementing Cisco Collaboration Hybrid and Cloud Technologies (CLHCT) 300-820 v2.0**, effective February 3, 2026. The site's final seven sections follow the current official domains and are clearly separated from the book chapters.

## Repository layout

```text
index.html                    Generated standalone practice application
manifest.webmanifest          Installable-app metadata
sw.js                         Offline service worker
icons/                        PWA and favicon assets
download/CLCEI-Practice-Offline.zip
authoring/                    Question bank, sources, generator, validator, and tests
```
