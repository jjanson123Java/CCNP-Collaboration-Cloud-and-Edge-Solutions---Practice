# CLCEI / CLHCT Practice Test Design

## Intent

Add a second, chapter-centered practice exam to the existing CCNP Collaboration Practice Tests site. Its purpose is diagnostic: after a student completes a chapter test or mixed exam, the results must identify which chapters of *CCNP Collaboration Cloud and Edge Solutions CLCEI 300-820 Official Cert Guide* need to be studied again.

## Content model

- Chapters 1–21 follow the book's chapter titles and foundation-topic headings.
- Questions are original and assess the concepts, configurations, call flows, and troubleshooting skills taught by each chapter; no book or commercial practice-test questions are copied.
- Current CLHCT 300-820 v2.0 topics that are not covered by the 2021 book live in a clearly separate final part, mapped to the current official exam-topic outline.
- Each answer includes a concise explanation and a source link shown by **Show answer**.
- A question is **Verified** only when an opened authoritative source directly supports its correct answer. A useful topic-alignment source that does not directly state the answer is labeled **Concept**.
- Current Cisco and Webex behavior wins when the book is outdated. Material book-to-current differences are disclosed in the verification panel.
- Cisco product documentation, Webex Help, official exam topics, Cisco technical notes, and Cisco Live material are preferred. Braindump sites are prohibited.

## Student experience

- Reuse the current CLCOR application, visual design, randomization, scoring, and offline behavior.
- Offer each book chapter individually, all questions, random 50, and weak-chapter practice.
- Multi-chapter results show per-chapter scores and list chapters below the chosen pass mark from weakest to strongest.
- The CLCOR and CLCEI pages link to each other.
- Both exams remain installable PWAs and downloadable as self-contained offline ZIPs.

## Quality gates

- Target 6–7 original questions for each book chapter and 5–6 for each current-exam-only section, approximately 160–180 questions total.
- Cover every foundation-topic heading in the public book contents and every selected current-exam domain.
- At least 75% of questions must be directly verified; the remainder must be transparently labeled Concept.
- Validation must reject malformed banks, missing verification entries, invented source keys, mismatched chapter counts, prohibited dump domains, and HTML in question text.
- Browser acceptance covers scoring, chapter remediation, source links, cross-links, service-worker offline reload, and the offline ZIP.

## Deliverables

- Published CLCEI app at `/clcei/`.
- Offline download at `download/CLCEI-Practice-Offline.zip`.
- Updated CLCOR toolbar, service worker, and README covering both exams.
- Maintainer-readable question/source data and a report of verification coverage, current-exam outline changes, and any uncertain items.

## Non-goals

- Reproducing or distributing the O'Reilly book.
- Copying the book's “Do I Know This Already?” questions, Pearson questions, or any certification dumps.
- Presenting the practice score as Cisco's actual passing score.
