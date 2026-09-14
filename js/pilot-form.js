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

    window.submitIncozentForm(
      "Pilot Requests",
      payload,
      function () {
        form.style.display = "none";
        document.getElementById("pilot-success").style.display = "block";
      },
      function () {
        alert("There was a problem submitting your request. Please try again or email us directly at chittatoshamohanta@incozent.in");
        submitBtn.disabled = false;
        submitBtn.textContent = "Submit Pilot Request";
      }
    );
  });
});
