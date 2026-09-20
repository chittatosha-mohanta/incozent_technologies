/**
 * Incozent Technologies — Unified Form Submission Handler
 * Sends form submissions to Google Sheets (Google Apps Script Webhook)
 * with graceful fallback to local preview tables.
 */
window.submitIncozentForm = async function (formType, payload, successCallback, errorCallback) {
  payload.form_type = formType;
  
  // Retrieve current DPDP cookie/consent state sitewide
  if (window.getDPDPConsentState && typeof window.getDPDPConsentState === "function") {
    payload.dpdp_banner_consent = window.getDPDPConsentState();
  }

  // Route to Sheet 1, Sheet 2, Sheet 3, or Sheet 4 as requested
  if (formType === "Participant Applications") {
    payload.sheet_name = "Sheet 2 - Participant Form";
  } else if (formType === "Pilot Requests") {
    payload.sheet_name = "Sheet 3 - Pilot Requests";
  } else if (formType === "Data Rights Requests") {
    payload.sheet_name = "Sheet 4 - Data Rights Requests";
  } else {
    payload.sheet_name = "Sheet 1 - Client Requirements";
  }
  payload.submitted_at = new Date().toLocaleString();
  payload.consent_timestamp = new Date().toISOString();

  const endpoint = window.companyConfig && window.companyConfig.googleSheetWebhookUrl;

  try {
    if (endpoint && endpoint.startsWith("https://script.google.com/macros/s/")) {
      await fetch(endpoint, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload)
      });
      if (typeof successCallback === "function") successCallback();
      return;
    }

    // Fallback for local preview tables if webhook is not yet configured
    const tableMap = {
      "Contact Inquiries": "tables/contact_inquiries",
      "Dataset Requests": "tables/dataset_requests",
      "Participant Applications": "tables/participant_applications",
      "Pilot Requests": "tables/pilot_requests",
      "Data Rights Requests": "tables/data_rights_requests"
    };
    const targetUrl = tableMap[formType] || "tables/contact_inquiries";
    const res = await fetch(targetUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error("Submission failed");
    if (typeof successCallback === "function") successCallback();
  } catch (err) {
    console.error("Form submission error:", err);
    if (typeof errorCallback === "function") {
      errorCallback(err);
    } else {
      alert("There was an issue submitting your request. Please try again or email chittatoshamohanta@incozent.in directly.");
    }
  }
};

