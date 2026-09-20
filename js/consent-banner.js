/**
 * Incozent Technologies — DPDP Privacy & Consent Banner Controller
 * Gates non-essential telemetry and tracks user consent preferences.
 */
(function () {
  const CONSENT_STORAGE_KEY = "incozent_dpdp_consent";

  function getConsent() {
    try {
      const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch (e) {
      return null;
    }
  }

  function setConsent(consentData) {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify({
        ...consentData,
        timestamp: new Date().toISOString()
      }));
    } catch (e) {
      console.warn("Storage access restricted for DPDP consent:", e);
    }
  }

  function renderBanner() {
    if (getConsent()) return; // Already answered

    const banner = document.createElement("div");
    banner.className = "dpdp-banner";
    banner.id = "dpdp-consent-banner";
    banner.setAttribute("role", "region");
    banner.setAttribute("aria-label", "Data Privacy and Consent Notice");

    banner.innerHTML = `
      <div class="dpdp-banner-content">
        <div class="dpdp-banner-title">
          <i class="fa-solid fa-shield-halved" style="color:var(--color-primary);"></i>
          Data Privacy &amp; Statutory Consent (DPDP Act, India)
        </div>
        <div class="dpdp-banner-desc">
          We process minimal technical information to provide our services and protect our infrastructure in accordance with the 
          <strong>Digital Personal Data Protection Act, 2023</strong>. We do not use third-party behavioral advertising cookies. 
          Learn more in our <a href="privacy-policy.html">Privacy Notice</a> and <a href="terms.html">Terms</a>.
        </div>
      </div>
      <div class="dpdp-banner-actions">
        <button type="button" class="dpdp-btn-reject" id="dpdp-reject-all">Strictly Necessary Only</button>
        <button type="button" class="dpdp-btn-accept" id="dpdp-accept-all">Accept All</button>
      </div>
    `;

    document.body.appendChild(banner);

    document.getElementById("dpdp-accept-all").addEventListener("click", function () {
      setConsent({ necessary: true, analytics: true, marketing: true });
      banner.remove();
    });

    document.getElementById("dpdp-reject-all").addEventListener("click", function () {
      setConsent({ necessary: true, analytics: false, marketing: false });
      banner.remove();
    });
  }

  // Global helper for form submissions to retrieve current cookie/consent state
  window.getDPDPConsentState = function () {
    return getConsent() || { necessary: true, analytics: false, marketing: false, default: true };
  };

  document.addEventListener("DOMContentLoaded", renderBanner);
})();
