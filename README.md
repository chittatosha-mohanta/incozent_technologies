# Veridata — Real-World Data Infrastructure for AI

A structured, conversion-oriented marketing website for a company that helps AI teams design, collect, curate, annotate, quality-control and deliver real-world datasets (facial/biometric, computer vision, image, video, egocentric, robotics, autonomous driving, human activity, and custom data).

The site follows a **layered information architecture** — core conversion pages, supporting trust pages, detailed solution pages, forms, and lightweight future-facing catalog/resources pages — instead of dumping all content into one long homepage.

---

## 1. Completed Features

### Structure & Navigation
- Shared, dynamically-rendered header (with **Solutions** and **Industries** dropdowns) and footer, injected on every page by `js/layout.js` from `js/config.js` + `content/solutions-data.js`. Mobile hamburger menu with full nav.
- Central config file (`js/config.js`) — company name, tagline, email, phone, location, founder placeholder, geography positioning. All pages reference it instead of hardcoding.
- Content data layer (`content/solutions-data.js`) — the 9 solutions and 8 industries are defined **once** and drive: the nav dropdowns, homepage capability cards, `/solutions` hub, and every individual solution page (via `js/solution-page.js`, a generic template renderer).

### Pages Built (26 total)
**Core conversion**
- `index.html` — Homepage: hero, what-we-do + workflow, capabilities grid, 4 problem cards, 4 featured solutions + driving callout, facial/biometric spotlight, industries grid, India-first section, mini how-it-works, quality/privacy panels, pilot CTA, final CTA.
- `request-dataset.html` — 6-step **Request a Dataset** form (contact → dataset type → requirements → quality → timeline → additional details + consent), writes to `dataset_requests` table.
- `join-participant-network.html` — participant interest registration (non-sensitive fields only), writes to `participant_applications` table.
- `pilot-program.html` — pilot explainer + pilot request form, writes to `pilot_requests` table.

**Supporting trust pages**
- `how-it-works.html` (full 10-step workflow), `data-quality.html`, `privacy-consent.html`, `about.html`, `faq.html` (accordion), `contact.html` (form → `contact_inquiries` table).

**Detailed solution pages** (`/solutions/*.html`, one per capability, same template)
- `facial-biometric-data.html`, `computer-vision-data.html`, `image-data.html`, `video-data.html`, `egocentric-data.html`, `robotics-physical-ai.html`, `autonomous-driving.html`, `human-activity.html`, `custom-data-collection.html`
- Plus the hub: `solutions.html`

**Lower-priority / future-facing**
- `industries.html`, `data-catalog.html` (capability catalog labeled "Example Collection Specification" — explicitly **not** a marketplace, no fake inventory counts), `resources.html`, `privacy-policy.html`, `terms.html`, `cookie-policy.html`

### Forms & Data (RESTful Table API)
| Table | Used by | Purpose |
|---|---|---|
| `contact_inquiries` | `contact.html` | General business inquiries |
| `dataset_requests` | `request-dataset.html` | Full 6-step dataset request specification |
| `participant_applications` | `join-participant-network.html` | Non-sensitive participant interest registration |
| `pilot_requests` | `pilot-program.html` | Pilot project requests |

All four tables include a `status` field with the recommended lifecycle (`New → Under Review → Contacted → Qualified → Pilot → Converted → Closed`) so a future admin dashboard can manage submissions.

### Safety / Compliance Guardrails Implemented
- **No biometric upload anywhere on the site.** Every facial/biometric mention includes the disclaimer: *"Custom collection is available based on project requirements. No public biometric upload is required through this website."*
- The Participant Network form explicitly collects **only** name, email, country, city, age range, languages, device type, availability, preferred categories, and consent-to-contact — no selfies, videos, biometric samples, or ID documents — with an explicit notice stating this.
- Data Catalog page is clearly labeled a **capability catalog**, not a marketplace — every entry says "Example Collection Specification," no invented dataset counts or "available now" inventory.
- Quality claims avoid fixed accuracy percentages; framed as "defined per project."
- Privacy & Consent page states data is not collected speculatively — only under a defined project purpose and consent process.

---

## 2. Site Map / URLs

```
/ (index.html)
/solutions.html
/solutions/facial-biometric-data.html
/solutions/computer-vision-data.html
/solutions/image-data.html
/solutions/video-data.html
/solutions/egocentric-data.html
/solutions/robotics-physical-ai.html
/solutions/autonomous-driving.html
/solutions/human-activity.html
/solutions/custom-data-collection.html
/industries.html
/how-it-works.html
/data-quality.html
/privacy-consent.html
/pilot-program.html
/about.html
/faq.html
/contact.html
/request-dataset.html
/join-participant-network.html
/data-catalog.html
/resources.html
/privacy-policy.html
/terms.html
/cookie-policy.html
```

No query parameters are used; all pages are static routes.

---

## 3. Data Models (Preview Table API)

Defined via `TableSchemaUpdate`, stored as rows via the RESTful Table API (`tables/{name}`):

- **contact_inquiries**: full_name, email, company, subject, message, status
- **dataset_requests**: full_name, company, business_email, job_title, country, dataset_types (array), other_dataset_type, num_participants, num_samples, duration, geography, demographics, environment, device, camera, resolution, frame_rate, metadata_requirements, annotation_requirements, quality_requirements, review_requirements, acceptance_criteria, start_date, delivery_date, urgency, project_description, technical_specifications, sop_availability, additional_requirements, consent_agree, status
- **participant_applications**: full_name, email, country, city, age_range, languages, device_type, availability, preferred_categories (array), consent_future_contact, status
- **pilot_requests**: full_name, company, email, dataset_type, project_description, timeline, status

> ⚠️ Note: these tables currently hold **preview** data only (visible in the editor). If/when this site is Hosted-Deployed, the live database is separate — ask to seed or migrate rows into the live D1 database if needed once deployed.

---

## 4. Project File Structure

```
index.html
solutions.html, industries.html, how-it-works.html, data-quality.html,
privacy-consent.html, pilot-program.html, about.html, faq.html, contact.html,
request-dataset.html, join-participant-network.html, data-catalog.html,
resources.html, privacy-policy.html, terms.html, cookie-policy.html

solutions/
  facial-biometric-data.html ... custom-data-collection.html  (9 files, shared template)

css/
  style.css              — full design system (variables, header/nav, hero, cards,
                            workflow strips, panels, forms, catalog, FAQ, footer)

js/
  config.js               — companyConfig (name, email, phone, location, etc.)
  layout.js               — renders header/footer + mobile nav on every page
  home.js                 — homepage dynamic sections (cards, workflow, industries)
  solution-page.js        — generic renderer for /solutions/{slug}.html pages
  request-dataset-form.js — 6-step form controller + submission
  pilot-form.js           — pilot request form submission
  participant-form.js     — participant registration form submission

content/
  solutions-data.js       — single source of truth: 9 solutions + 8 industries
                            (title, icon, description, applications, categories,
                            disclaimer, CTA label) — drives nav, homepage, and
                            every solution page
```

This mirrors the "content separate from components" principle from the spec: editing a solution's copy means editing one object in `content/solutions-data.js`, not hunting through 9 HTML files.

---

## 5. Not Yet Implemented (by design, per spec)

- **Admin/CRM dashboard** for reviewing submissions (lifecycle fields exist in the schema now so this can be added later without a data migration).
- **Client / Project / Dataset / DatasetVersion / DataAsset / Annotation / QCResult / ConsentRecord / Delivery** entities — only the four "inbound form" tables were built for the MVP, per the spec's own phasing guidance ("do not implement a full dashboard yet").
- Real biometric/video capture flows — intentionally excluded from this site; all facial/biometric collection is explicitly routed to an offline, consented, project-based process (this also keeps the site static and avoids the legal/technical risks of in-browser biometric capture).
- Multi-language / i18n.
- Search functionality across solutions/resources.

## 6. Recommended Next Steps

1. Replace placeholder values in `js/config.js` (`founderName`, `email`, `phone`, `linkedin`, `github`) with real details.
2. Decide on and add a real logo asset (currently a simple icon mark).
3. If this project needs to go live for real inbound leads, use **Hosted Deploy** (see Publish tab) so the four form tables provision a live D1 database — then periodically review submissions via the Table API or a future admin view.
4. When ready to build the admin dashboard, add read/list views against the four existing tables using their `status` lifecycle field — no schema changes needed.
5. Consider adding case studies / resource articles under `/resources.html` as the company matures (kept intentionally minimal for the MVP per the "not a mature operation" positioning).

---

## 7. Design System Notes

- Typography: Inter (Google Fonts).
- Icons: Font Awesome 6 (CDN).
- Primary color: `#2454ff` (blue), accent: `#0ea5a3` (teal), dark sections: `#0b1220`.
- Fully responsive (grid collapses at 980px / 900px / 700px / 620px / 560px breakpoints); mobile nav collapses into a hamburger-triggered stacked menu.
- One consistent primary CTA ("Request a Dataset") with contextual secondary CTAs per page, matching the spec's CTA strategy.
