# Incozent Technologies — Real-World Data Infrastructure for AI

[![Website](https://img.shields.io/badge/Status-Active-brightgreen)](https://github.com/chittatosha-mohanta/incozent_technologies)
[![Founder](https://img.shields.io/badge/Founder-Chittatosha%20Mohanta-blue)](https://github.com/chittatosha-mohanta)
[![Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Next.js%20%7C%20TailwindCSS%20v4-blueviolet)](https://github.com/chittatosha-mohanta/incozent_technologies)

**Incozent Technologies** is a specialized data infrastructure and AI engineering company that helps teams design, collect, curate, annotate, quality-control, and deliver high-integrity real-world datasets for cutting-edge Artificial Intelligence, Computer Vision, and Physical AI models.

---

## Table of Contents

- [1. Company & Brand Overview](#1-company--brand-overview)
- [2. Key Features & Visual Highlights](#2-key-features--visual-highlights)
  - [Brand Identity & Custom Assets](#brand-identity--custom-assets)
  - [3D AI Data Infrastructure Showcase](#3d-ai-data-infrastructure-showcase)
  - [Animated Workflow Pipeline](#animated-workflow-pipeline)
  - [Aceternity-Style Scroll Timeline](#aceternity-style-scroll-timeline)
- [3. React / Next.js Subproject (`my-app/`)](#3-react--nextjs-subproject-my-app)
- [4. Complete Website Architecture (26 Pages)](#4-complete-website-architecture-26-pages)
- [5. Data Models & Form Ingestion](#5-data-models--form-ingestion)
- [6. Safety, Privacy & Compliance Guardrails](#6-safety-privacy--compliance-guardrails)
- [7. Project Directory Structure](#7-project-directory-structure)
- [8. Getting Started & Running Locally](#8-getting-started--running-locally)

---

## 1. Company & Brand Overview

- **Company Name**: Incozent Technologies
- **Founder**: Chittatosha Mohanta
- **Primary Inquiries**: `contact@incozent.com`
- **Headquarters**: Bhubaneswar, Odisha, India (Global Delivery)
- **Positioning**: Scalable, ethically-sourced human, computer vision, and physical AI datasets with strict quality verification and consent frameworks.

---

## 2. Key Features & Visual Highlights

### Brand Identity & Custom Assets
- Custom vector and raster assets organized under `assets/` and `solutions/assets/`.
- Precision navbar lockup (`logo_navbar.png`, `logo_dark_pill.png`, and `logo_mark_white.png`) with clean typography.
- Standardized `favicon.ico` and `favicon.png` across all root pages and subdirectories.
- Global navigation injected dynamically across all pages using `js/layout.js` backed by configuration in `js/config.js`.

### 3D AI Data Infrastructure Showcase
- **Hero Visual (`assets/hero_data_pipeline.jpg`)**: Frontpage split-column layout featuring an ultra-crisp multimodal AI dataset ecosystem (neural network nodes, streaming data matrices, robotic sensor arrays, and biometric landmarks) set against a clean white background.
- **Glassmorphic Metric Badges**: Floating micro-cards highlighting real-time metrics:
  - *"99.4% Verified Accuracy"*
  - *"10M+ Labeled Samples Delivered"*

### Animated Workflow Pipeline
- **Continuous Directional Motion**: In the "What We Do" workflow strip (`index.html`), step transition arrows feature an animated CSS wave (`@keyframes workflowFlow`) that pulses forward along the data pipeline without distracting color shifts.

### Aceternity-Style Scroll Timeline
- **Interactive Progress Beam (`how-it-works.html` & `js/timeline.js`)**: An interactive, scroll-linked progress indicator modeled after modern Framer Motion / Aceternity timeline components.
- **Dynamic Gradient Line**: As the user scrolls through the 10-step data lifecycle, a glowing gradient beam tracks user scroll position, illuminating active milestone nodes and expanding content cards.

---

## 3. React / Next.js Subproject (`my-app/`)

For modern React and Next.js applications, a full TypeScript + Tailwind CSS v4 + shadcn setup is included in the `my-app/` directory alongside standalone components in `components/ui/`:

- **Component**: [`components/ui/timeline.tsx`](file:///Users/chittatoshamohanta/Downloads/code-sandbox-light-f16f8a2c-fb6b-4c96-b6d1-d8bcab429e26-main/components/ui/timeline.tsx)
- **Demo**: [`components/ui/demo.tsx`](file:///Users/chittatoshamohanta/Downloads/code-sandbox-light-f16f8a2c-fb6b-4c96-b6d1-d8bcab429e26-main/components/ui/demo.tsx)
- **Dependencies**: Framer Motion (`framer-motion`), Lucide Icons (`lucide-react`), Tailwind CSS v4.

### Running the Next.js Application
```bash
cd my-app
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the interactive React timeline and UI components.

---

## 4. Complete Website Architecture (26 Pages)

The production marketing site is structured into distinct, high-converting static pages:

### Core Conversion
- `index.html` — Homepage with hero visual, animated workflow, capability cards, industry matrices, and pilot CTAs.
- `request-dataset.html` — 6-step guided dataset specification and quotation workflow.
- `join-participant-network.html` — Contributor community onboarding (strictly non-sensitive metadata).
- `pilot-program.html` — Fast-track pilot evaluation request flow.

### Trust & Operations
- `how-it-works.html` — Comprehensive 10-stage dataset lifecycle with interactive scroll progress.
- `data-quality.html` — Multi-stage human-in-the-loop and automated validation standards.
- `privacy-consent.html` — GDPR, DPDP Act (India), and ethical consent protocols.
- `about.html` — Mission, leadership, and operational capabilities.
- `faq.html` — Accordion-driven answers to technical, commercial, and legal questions.
- `contact.html` — Direct enterprise inquiries and consultation scheduling.

### Capability & Solution Hubs (`/solutions/*.html`)
- `solutions.html` — Main solutions directory.
- `facial-biometric-data.html` — 2D/3D facial expression, liveness, and demographic balance datasets.
- `computer-vision-data.html` — Object detection, semantic segmentation, and bounding box pipelines.
- `image-data.html` — High-resolution studio, in-the-wild, and multi-spectral photography.
- `video-data.html` — Multi-frame temporal annotation and action recognition.
- `egocentric-data.html` — First-person view collection for AR/VR smart glasses and spatial AI.
- `robotics-physical-ai.html` — Teleoperation demonstrations, tactile sensing, and manipulation feeds.
- `autonomous-driving.html` — ADAS camera, LiDAR, and edge-case driving conditions.
- `human-activity.html` — Complex pose estimation, sports analytics, and ergonomic telemetry.
- `custom-data-collection.html` — Bespoke multi-modal collection workflows.

### Catalog & Legal
- `industries.html` — Automotive, Healthcare, Retail, Security, Consumer Tech, and Robotics focus areas.
- `data-catalog.html` — Representative collection specifications (ethical showcase, no mock storefront inventory).
- `resources.html` — Technical whitepapers and engineering guides.
- `privacy-policy.html`, `terms.html`, `cookie-policy.html` — Legal governance documentation.

---

## 5. Data Models & Form Ingestion

Forms connect seamlessly via RESTful endpoints (`/tables/{name}`) backed by `.tables/schema.json`:

1. `contact_inquiries` — General enterprise consultations.
2. `dataset_requests` — Deep technical specifications (modality, participants, volume, sensor setup, quality tolerance).
3. `participant_applications` — Demographic and device profile registration.
4. `pilot_requests` — Accelerated pilot project scopes.

All schemas support a unified lifecycle:
`New` → `Under Review` → `Contacted` → `Qualified` → `Pilot` → `Converted` → `Closed`.

---

## 6. Safety, Privacy & Compliance Guardrails

- **Zero Speculative Biometric Uploads**: The website intentionally does not feature public face/biometric upload mechanisms. All facial and biometric engagements are strictly offline, governed by formal consent contracts and ethical review boards.
- **Minimal Contributor Data Collection**: Contributor onboarding collects only essential demographic bands, device categories, and contact information.
- **Defensible Quality Claims**: Metrics and accuracy benchmarks are scoped per project SOP rather than generalized marketing claims.

---

## 7. Project Directory Structure

```
.
├── assets/                  # Brand logos, hero graphics, favicons, UI artwork
├── components/ui/           # Reusable React/Next.js UI components (timeline.tsx, demo.tsx)
├── content/                 # Single-source-of-truth solution & industry copy (solutions-data.js)
├── css/                     # Production styling & animation system (style.css)
├── js/                      # Dynamic layouts, form logic, scroll animations, configuration
├── my-app/                  # Next.js App Router, Tailwind v4, and shadcn subproject
├── solutions/               # 9 dedicated capability pages + sub-assets
├── .tables/                 # Database table definitions (schema.json)
├── serve.py                 # Lightweight Python dev server with cache-busting headers
├── index.html               # Main homepage
└── README.md                # Project documentation
```

---

## 8. Getting Started & Running Locally

### 1. Vanilla Web Application
To run the primary multi-page website locally:
```bash
python3 serve.py
```
Visit [http://localhost:8080](http://localhost:8080) in any modern web browser.

### 2. Next.js / React Subproject
To run the Next.js interactive component suite:
```bash
cd my-app
npm install
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000).

---

## Contact & Enterprise Inquiries

For custom dataset engineering, pilot requests, and partnership queries:

- **Website**: [incozent.com](mailto:contact@incozent.com)
- **Email**: `contact@incozent.com`
- **GitHub**: [github.com/chittatosha-mohanta/incozent_technologies](https://github.com/chittatosha-mohanta/incozent_technologies)
- **Location**: Bhubaneswar, Odisha, India
