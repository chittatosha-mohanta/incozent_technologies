/**
 * Homepage dynamic sections: workflow strip, capability cards, featured
 * solutions, facial category grid, industries grid, and how-it-works mini steps.
 * Built from content/solutions-data.js so the homepage stays in sync with
 * the solution pages without duplicating content.
 */
document.addEventListener("DOMContentLoaded", function () {
  const solutions = window.solutionsData || [];
  const industries = window.industriesData || [];

  // ---- Workflow strip ----
  const workflowSteps = ["Requirement", "Collection Design", "Recruitment", "Collection", "Curation", "Annotation", "Quality Control", "Privacy Review", "Delivery"];
  const workflowEl = document.getElementById("home-workflow");
  if (workflowEl) {
    workflowEl.innerHTML = workflowSteps.map((s, i) =>
      `<span class="workflow-step">${s}</span>` + (i < workflowSteps.length - 1 ? `<i class="fa-solid fa-arrow-right workflow-arrow"></i>` : "")
    ).join("");
  }

  // ---- Capability cards (all 9 solutions) ----
  const capEl = document.getElementById("capabilities-grid");
  if (capEl) {
    capEl.innerHTML = solutions.map(s => `
      <a href="solutions/${s.slug}.html" class="card solution-card">
        <div class="icon-badge"><i class="${s.icon}"></i></div>
        <h3>${s.title}</h3>
        <p>${s.shortDesc}</p>
        <p class="applications"><b>Applications:</b> ${s.applications}</p>
        <span class="card-link">Learn more <i class="fa-solid fa-arrow-right"></i></span>
      </a>
    `).join("");
  }

  // ---- Featured solutions (top 4) ----
  const featuredSlugs = ["facial-biometric-data", "computer-vision-data", "egocentric-data", "robotics-physical-ai"];
  const featEl = document.getElementById("featured-solutions");
  if (featEl) {
    featEl.innerHTML = featuredSlugs.map(slug => {
      const s = solutions.find(x => x.slug === slug);
      if (!s) return "";
      return `
      <div class="feature-card">
        <div class="icon-badge"><i class="${s.icon}"></i></div>
        <h3>${s.title}</h3>
        <p>${s.shortDesc}</p>
        <p class="applications" style="font-size:13px; color:var(--color-ink-faint);"><b>Applications:</b> ${s.applications}</p>
        <a href="solutions/${s.slug}.html" class="card-link">View Solution <i class="fa-solid fa-arrow-right"></i></a>
      </div>`;
    }).join("");
  }

  // ---- Facial & biometric categories (subset) ----
  const facial = solutions.find(s => s.slug === "facial-biometric-data");
  const facialEl = document.getElementById("facial-categories");
  if (facialEl && facial) {
    facialEl.innerHTML = facial.categories.slice(0, 6).map(c => `
      <div class="category-card">
        <h4>${c.title}</h4>
        <p>${c.desc}</p>
      </div>
    `).join("");
  }

  // ---- Industries grid ----
  const indEl = document.getElementById("industries-grid");
  if (indEl) {
    indEl.innerHTML = industries.map(i => `
      <a href="industries.html" class="card industry-card">
        <div class="icon-badge"><i class="${i.icon}"></i></div>
        <h3>${i.name}</h3>
        <p>${i.desc}</p>
      </a>
    `).join("");
  }

  // ---- How it works mini steps ----
  const miniSteps = ["Define Requirements", "Design the Collection", "Run a Pilot", "Collect &amp; QC", "Deliver the Dataset"];
  const miniEl = document.getElementById("how-it-works-mini");
  if (miniEl) {
    miniEl.innerHTML = miniSteps.map((s, i) => `
      <div class="card" style="text-align:center; padding:20px 14px;">
        <div class="workflow-num" style="margin:0 auto 12px;">${i + 1}</div>
        <p style="font-size:13.5px; font-weight:600;">${s}</p>
      </div>
    `).join("");
  }
});
