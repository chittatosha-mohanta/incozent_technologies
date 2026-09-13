/**
 * Handles the "Join the Participant Network" registration form.
 * Intentionally collects only non-sensitive interest/eligibility fields —
 * no selfies, videos, biometric samples or identity documents.
 */
document.addEventListener("DOMContentLoaded", function () {
  const categories = ["Facial", "Image", "Video", "Egocentric", "Human activity", "Robotics", "Other"];
  const grid = document.getElementById("participant-categories-grid");
  grid.innerHTML = categories.map(c => `
    <label class="checkbox-pill">
      <input type="checkbox" name="p-category" value="${c}"> ${c}
    </label>
  `).join("");

  const form = document.getElementById("participantForm");
  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true; btn.textContent = "Submitting...";

    const selected = Array.from(document.querySelectorAll('input[name="p-category"]:checked')).map(cb => cb.value);

    const payload = {
      full_name: document.getElementById("p-name").value,
      email: document.getElementById("p-email").value,
      country: document.getElementById("p-country").value,
      city: document.getElementById("p-city").value,
      age_range: document.getElementById("p-age").value,
      languages: document.getElementById("p-languages").value,
      device_type: document.getElementById("p-device").value,
      availability: document.getElementById("p-availability").value,
      preferred_categories: selected,
      consent_future_contact: document.getElementById("p-consent").checked,
      status: "New"
    };

    try {
      const res = await fetch("tables/participant_applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error();
      form.style.display = "none";
      document.getElementById("participant-success").style.display = "block";
    } catch (err) {
      alert("There was a problem submitting your registration. Please try again.");
      btn.disabled = false; btn.textContent = "Register Interest";
    }
  });
});
