/**
 * Generic renderer for every /solutions/{slug}.html page.
 * Each solution page is a thin HTML shell with <body data-slug="...">;
 * this script fills in the shared template from content/solutions-data.js.
 * This keeps all 9 solution pages structurally identical and easy to maintain.
 */
document.addEventListener("DOMContentLoaded", function () {
  const slug = document.body.getAttribute("data-slug");
  const s = (window.solutionsData || []).find(x => x.slug === slug);
  if (!s) return;

  const cfg = window.companyConfig || {};
  document.title = s.title + " — " + (cfg.fullName || cfg.name || "Incozent");
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", s.heroText);

  // Page hero
  document.getElementById("sol-breadcrumb-title").textContent = s.title;
  document.getElementById("sol-title").textContent = s.title;
  document.getElementById("sol-hero-text").textContent = s.heroText;
  document.querySelectorAll(".sol-cta-label").forEach(el => el.textContent = s.ctaLabel);

  // What this data supports
  document.getElementById("sol-supports").innerHTML = s.supports.map(item =>
    `<li><i class="fa-solid fa-check"></i>${item}</li>`
  ).join("");

  // Possible collection categories
  document.getElementById("sol-categories").innerHTML = s.categories.map(c => `
    <div class="category-card">
      <h4>${c.title}</h4>
      <p>${c.desc}</p>
    </div>
  `).join("");

  // Disclaimer
  const disclaimerEl = document.getElementById("sol-disclaimer");
  if (disclaimerEl) disclaimerEl.textContent = s.disclaimer;

  // Related solutions (3 others)
  const others = (window.solutionsData || []).filter(x => x.slug !== slug).slice(0, 3);
  const relatedEl = document.getElementById("sol-related");
  if (relatedEl) {
    relatedEl.innerHTML = others.map(o => `
      <a href="${o.slug}.html" class="card solution-card">
        <div class="icon-badge"><i class="${o.icon}"></i></div>
        <h3>${o.title}</h3>
        <p>${o.shortDesc}</p>
        <span class="card-link">View Solution <i class="fa-solid fa-arrow-right"></i></span>
      </a>
    `).join("");
  }
});
