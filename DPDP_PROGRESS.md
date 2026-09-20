# DPDP Compliance Audit & Implementation Log (DPDP Act, 2023 — India)

**Branch:** `DPDP`  
**Repository:** `https://github.com/chittatosha-mohanta/incozent_technologies`  
**Last Updated:** September 20, 2026  
**Status:** Implemented & Documented for Legal Review

---

## 1. Executive Summary & Regulatory Context
This document logs the compliance audit and technical measures enacted under the **Digital Personal Data Protection (DPDP) Act, 2023 (India)** for Incozent Technologies (`Incozent Technologies Private Limited` / `Incozent`).
Incozent acts primarily as a **Data Fiduciary** for website visitors, inquiries, and participant registrants, and as a **Data Fiduciary / Data Processor** for enterprise AI dataset collection engagements.

Under the DPDP Act 2023:
- Data collection must be for lawful purposes with explicit, informed, unconditional, and granular notice and consent (Section 5 & 6).
- Individuals (Data Principals) enjoy rights of summary/access, correction, completion, erasure, grievance redressal, and nomination (Sections 11–14).
- Data fiduciaries must appoint a Grievance Redressal Officer / Data Protection Officer and establish a 72-hour personal data breach escalation framework (Section 8(6)).

---

## 2. Personal Data Inventory & Collection Points

| # | Data Entry Point | Forms / Files | Specific Personal Data Elements Collected | Purpose (Lawful Basis) | Third-Party Processors & Infrastructure |
|---|------------------|---------------|--------------------------------------------|-------------------------|-----------------------------------------|
| 1 | **Contact Form** | `contact.html` (`#contactForm`) | Full Name, Company, Email, Subject, Message | Responding to business inquiries and enterprise communication | Google Apps Script (`script.google.com`), Google Sheets, Vercel Hosting |
| 2 | **Dataset Request Form** | `request-dataset.html` (`#datasetForm`) | Full Name, Company, Business Email, Job Title, Country, Project technical requirements | Scoping commercial dataset collection & custom AI pipeline design | Google Apps Script, Google Sheets, Vercel Hosting |
| 3 | **Pilot Request Form** | `pilot-program.html` (`#pilotForm`) | Full Name, Company, Business Email, Dataset Type, Timeline, Description | Scoping and evaluating feasibility pilots for AI teams | Google Apps Script, Google Sheets, Vercel Hosting |
| 4 | **Participant Network Registration** | `join-participant-network.html` (`#participantForm`) | Full Name, Email, Country, City, Age Range, Languages Spoken, Device Type, Availability | Matching candidates to future consented data collection opportunities | Google Apps Script, Google Sheets, Vercel Hosting |
| 5 | **Data Rights Request Form** | `data-rights.html` (`#dataRightsForm`) | Full Name, Registered Email, Phone, Principal Type, Right Requested (Access/Correct/Erase/Withdraw), Proof/Details | Exercising statutory rights under DPDP Act Sections 11–13 | Google Apps Script, Google Sheets (Dedicated Data Rights tab) |

### Non-Collection Confirmation
- **No public biometric uploads** (facial scans, voice samples, iris, selfies, government ID cards) are accepted via the public website. All biometric and human data collections are executed under isolated, project-specific, in-person/instrumented protocols accompanied by standalone informed consent agreements.
- **No third-party behavioral trackers or ad cookies** (e.g. Meta Pixel, TikTok Pixel, Google Ads remarketing) are embedded on this website.

---

## 3. Implemented DPDP Technical & Legal Measures

### A. Privacy Notice (`privacy-policy.html` / `privacy.html`)
- **Statutory Notice Coverage**: Itemized categories of data, purpose specification, retention criteria (default 180 days for web inquiries), third-party data disclosure, cross-border transfers, security safeguards, and clear steps to withdraw consent.
- **Marked for Legal Review**: Annotated with `<!-- LEGAL_REVIEW_REQUIRED: Incozent Legal Counsel -->` tags for final sign-off by legal counsel before production execution.

### B. Opt-in Granular Consent Mechanism (Section 6 DPDP)
- Unbundled, unticked consent checkboxes implemented across all form entry points:
  1. **Service Provisioning Consent** (Required): Explicit consent to process data strictly for answering the inquiry, scoping the dataset, or registering interest.
  2. **Direct Communications & Updates Consent** (Optional): Granular consent for receiving case studies, AI benchmarks, and product updates.
  3. **Privacy Notice Acknowledgement**: Explicit link to `privacy-policy.html` and confirmation that the principal has read and understood the terms.
- **Consent Records**: Recorded with ISO timestamp, IP/UserAgent metadata placeholder, and granular boolean values stored in Google Sheets.

### C. Consent Banner & Tracker Gate
- Lightweight, zero-dependency cookie and privacy banner (`js/consent-banner.js`) deployed sitewide.
- Supports **Accept All**, **Reject Non-Essential**, and **Preferences Modal**.
- Ensures that non-essential scripts/telemetry cannot execute until explicit positive consent is granted.

### D. Grievance Redressal Mechanism & Officer (Section 13 DPDP)
- Designated Grievance Officer details published across `privacy-policy.html`, `terms.html`, and the global site footer:
  - **Officer:** Chittatosha Mohanta
  - **Entity:** Incozent Technologies Private Limited
  - **Designated Grievance Email:** `chittatoshamohanta@incozent.in` / `grievance@incozent.in`
  - **Response Timeframe:** Acknowledgment within 24 hours; resolution within 30 days as prescribed by law.

### E. Data-Rights Request Portal (`data-rights.html`)
- Dedicated self-serve portal allowing Data Principals to exercise statutory rights:
  - Right to Access summary of personal data and processing activities.
  - Right to Correction / Updating of inaccurate or incomplete records.
  - Right to Erasure / Deletion of personal data no longer necessary.
  - Right to Withdraw Consent previously granted.
  - Right of Grievance Escalation.

### F. Terms of Use Alignment (`terms.html`)
- Added **Section 8: Data Protection & DPDP Compliance Clause**, binding both Incozent and clients to strict personal data protection standards, non-upload of unauthorized personal data, and lawful processing boundaries.

### G. Security Gap Analysis & Hardening
- **Local Dev Server (`serve.py`)**: Added security headers (`Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`).
- **Bot & Spam Protection**: Architecture configured for Google reCAPTCHA v3 verification without degrading privacy.
- **Data at Rest**: Google Cloud / Google Drive AES-256 at-rest encryption documented.
- **Data in Transit**: HTTPS/TLS 1.3 enforced via Vercel CDN.

---

## 4. Documentation & Breach Runbook
- Created `BREACH_RUNBOOK.md` detailing:
  - 72-Hour Data Protection Board / CERT-In / Data Protection Authority notification protocol.
  - Incident Severity Matrix (P1 Critical to P4 Low).
  - Data Principal Notification Template.
  - Authority Notification Template.
  - Post-Mortem and Root Cause Analysis procedure.

---

## 5. Items Requiring Legal Counsel Review
1. Exact registered entity name, CIN, and registered address for Incozent Technologies Private Limited.
2. Formal approval of the 180-day inquiry data retention lifecycle and data purge SLA.
3. Review of cross-border data transfer provisions if client dataset delivery transfers to servers in the US/EU/UK.
4. Final approval of the Grievance Officer designation terms and statutory escalation clause to the Data Protection Board of India.

---

## 6. Git Branch & Delivery Status
- **Branch:** `DPDP`
- **Remote:** `origin/DPDP` (Pushed to GitHub)
