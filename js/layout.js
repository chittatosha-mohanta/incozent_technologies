/**
 * Renders the shared header (nav) and footer into #site-header / #site-footer
 * placeholders. Keeps navigation/footer markup consistent across every page
 * without duplicating it in each HTML file.
 */
(function () {
  const cfg = window.companyConfig || {};
  const solutions = window.solutionsData || [];
  const industries = window.industriesData || [];

  function currentPath() {
    let p = window.location.pathname.split("/").pop();
    if (!p) p = "index.html";
    return p;
  }

  function getPrefix() {
    return window.location.pathname.includes("/solutions/") ? "../" : "";
  }

  function headerHTML() {
    const pfx = getPrefix();
    const solutionLinks = solutions.map(s =>
      `<a href="${pfx}solutions/${s.slug}.html"><i class="${s.icon}"></i>${s.title}</a>`
    ).join("");

    return `
    <div class="nav-bar">
      <a href="${pfx}index.html" class="brand" aria-label="${cfg.fullName || cfg.name}">
        <span class="brand-mark">
          <img src="${pfx}assets/logo_mark_white.png" alt="" class="brand-mark-img" width="22" height="13">
        </span>
        <span class="brand-name">${cfg.name}</span>
      </a>
      <nav class="main-nav">
        <div class="nav-item">
          <span class="nav-link">Solutions <i class="fa-solid fa-chevron-down"></i></span>
          <div class="dropdown">${solutionLinks}
            <a href="${pfx}solutions.html" style="border-top:1px solid var(--color-border); margin-top:6px; padding-top:12px; color:var(--color-primary); font-weight:700;"><i class="fa-solid fa-grip"></i>View All Solutions</a>
          </div>
        </div>
        <div class="nav-item">
          <span class="nav-link">Industries <i class="fa-solid fa-chevron-down"></i></span>
          <div class="dropdown">
            ${industries.map(i => `<a href="${pfx}industries.html"><i class="${i.icon}"></i>${i.name}</a>`).join("")}
          </div>
        </div>
        <a href="${pfx}how-it-works.html" class="nav-link">How It Works</a>
        <a href="${pfx}data-quality.html" class="nav-link">Data Quality</a>
        <a href="${pfx}privacy-consent.html" class="nav-link">Privacy &amp; Consent</a>
        <a href="${pfx}pilot-program.html" class="nav-link">Pilot Program</a>
        <a href="${pfx}about.html" class="nav-link">About</a>
        <div class="nav-item">
          <span class="nav-link">Resources <i class="fa-solid fa-chevron-down"></i></span>
          <div class="dropdown">
            <a href="${pfx}resources.html"><i class="fa-solid fa-book"></i>Resources</a>
            <a href="${pfx}data-catalog.html"><i class="fa-solid fa-table-cells"></i>Data Catalog</a>
            <a href="${pfx}faq.html"><i class="fa-solid fa-circle-question"></i>FAQ</a>
            <a href="${pfx}contact.html"><i class="fa-solid fa-envelope"></i>Contact</a>
          </div>
        </div>
      </nav>
      <div class="nav-actions">
        <a href="${pfx}request-dataset.html" class="btn btn-primary nav-cta"><span class="nav-cta-text">Request a Dataset</span><span style="display:none" class="nav-cta-mobile-hide"></span></a>
        <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu"><i class="fa-solid fa-bars"></i></button>
      </div>
    </div>
    <div class="mobile-nav" id="mobile-nav">
      <div class="mobile-group-label">Solutions</div>
      ${solutions.map(s => `<a class="mobile-sub" href="${pfx}solutions/${s.slug}.html">${s.title}</a>`).join("")}
      <a class="mobile-sub" href="${pfx}solutions.html">View All Solutions</a>
      <div class="mobile-group-label">Industries</div>
      <a class="mobile-sub" href="${pfx}industries.html">All Industries</a>
      <div class="mobile-group-label">Company</div>
      <a href="${pfx}how-it-works.html">How It Works</a>
      <a href="${pfx}data-quality.html">Data Quality</a>
      <a href="${pfx}privacy-consent.html">Privacy &amp; Consent</a>
      <a href="${pfx}pilot-program.html">Pilot Program</a>
      <a href="${pfx}about.html">About</a>
      <a href="${pfx}resources.html">Resources</a>
      <a href="${pfx}data-catalog.html">Data Catalog</a>
      <a href="${pfx}faq.html">FAQ</a>
      <a href="${pfx}contact.html">Contact</a>
      <a href="${pfx}join-participant-network.html">Join Participant Network</a>
      <a href="${pfx}request-dataset.html" class="btn btn-primary btn-block" style="margin-top:16px; border-bottom:none;">Request a Dataset</a>
    </div>`;
  }

  function footerHTML() {
    const pfx = getPrefix();
    const solutionLinks = solutions.slice(0, 6).map(s =>
      `<li><a href="${pfx}solutions/${s.slug}.html">${s.title}</a></li>`
    ).join("");

    return `
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">
            <a href="${pfx}index.html" class="brand footer-brand-link" aria-label="${cfg.fullName || cfg.name}">
              <span class="brand-mark">
                <img src="${pfx}assets/logo_mark_white.png" alt="" class="brand-mark-img" width="22" height="13">
              </span>
              <span class="brand-name">${cfg.name}</span>
            </a>
          </div>
          <p class="footer-desc">${cfg.tagline}. ${cfg.geography}.</p>
        </div>
        <div class="footer-col">
          <h4>Solutions</h4>
          <ul>${solutionLinks}<li><a href="${pfx}solutions.html">View All</a></li></ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="${pfx}how-it-works.html">How It Works</a></li>
            <li><a href="${pfx}data-quality.html">Data Quality</a></li>
            <li><a href="${pfx}privacy-consent.html">Privacy &amp; Consent</a></li>
            <li><a href="${pfx}pilot-program.html">Pilot Program</a></li>
            <li><a href="${pfx}about.html">About</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="${pfx}resources.html">Resources</a></li>
            <li><a href="${pfx}data-catalog.html">Data Catalog</a></li>
            <li><a href="${pfx}industries.html">Industries</a></li>
            <li><a href="${pfx}faq.html">FAQ</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Get Started</h4>
          <ul>
            <li><a href="${pfx}request-dataset.html">Request a Dataset</a></li>
            <li><a href="${pfx}pilot-program.html">Start a Pilot</a></li>
            <li><a href="${pfx}join-participant-network.html">Join Participant Network</a></li>
            <li><a href="${pfx}contact.html">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; ${cfg.year} ${cfg.fullName || cfg.name}. All rights reserved.</span>
        <div class="footer-legal-links">
          <a href="${pfx}privacy-policy.html">Privacy Policy</a>
          <a href="${pfx}terms.html">Terms</a>
          <a href="${pfx}cookie-policy.html">Cookie Policy</a>
        </div>
      </div>
    </div>`;
  }

  function init() {
    // Inject brand favicon if not already present
    if (!document.querySelector("link[rel*='icon']")) {
      const fav = document.createElement("link");
      fav.rel = "icon";
      fav.type = "image/png";
      fav.href = window.location.pathname.includes("/solutions/") ? "../assets/favicon.png" : "assets/favicon.png";
      document.head.appendChild(fav);
    }

    const headerEl = document.getElementById("site-header");
    const footerEl = document.getElementById("site-footer");
    if (headerEl) {
      headerEl.innerHTML = headerHTML();
      const toggle = document.getElementById("nav-toggle");
      const mobile = document.getElementById("mobile-nav");
      if (toggle && mobile) {
        toggle.addEventListener("click", () => mobile.classList.toggle("open"));
      }
    }
    if (footerEl) {
      footerEl.innerHTML = footerHTML();
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
