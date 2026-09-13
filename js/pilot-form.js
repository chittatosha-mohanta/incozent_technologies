/**
 * Handles submission of the Pilot Request form on pilot-program.html
 * via the RESTful Table API (table: pilot_requests).
 */
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("pilotForm");
  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";

    const payload = {
      full_name: document.getElementById("pilot-name").value,
      company: document.getElementById("pilot-company").value,
      email: document.getElementById("pilot-email").value,
      dataset_type: document.getElementById("pilot-dataset-type").value,
      timeline: document.getElementById("pilot-timeline").value,
      project_description: document.getElementById("pilot-desc").value,
      status: "New"
    };

    try {
      const res = await fetch("tables/pilot_requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error("Request failed");
      form.style.display = "none";
      document.getElementById("pilot-success").style.display = "block";
    } catch (err) {
      alert("There was a problem submitting your request. Please try again or email us directly.");
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit Pilot Request";
    }
  });
});
