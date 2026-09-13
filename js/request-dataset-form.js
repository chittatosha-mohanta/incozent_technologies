/**
 * Multi-step "Request a Dataset" form controller.
 * Handles step navigation, progress bar, dataset-type checkbox rendering,
 * and final submission to the `dataset_requests` table via the Table API.
 */
document.addEventListener("DOMContentLoaded", function () {
  const TOTAL_STEPS = 6;
  const form = document.getElementById("datasetForm");
  const progressEl = document.getElementById("form-progress");
  const btnBack = document.getElementById("btn-back");
  const btnNext = document.getElementById("btn-next");
  const btnSubmit = document.getElementById("btn-submit");
  let currentStep = 1;

  // Build progress bar
  for (let i = 1; i <= TOTAL_STEPS; i++) {
    const seg = document.createElement("div");
    seg.className = "form-progress-step" + (i === 1 ? " active" : "");
    seg.dataset.step = i;
    progressEl.appendChild(seg);
  }

  // Dataset type checkboxes
  const datasetTypes = ["Facial", "Biometric", "Image", "Video", "Egocentric", "360-degree video", "Human activity", "Robotics", "Autonomous driving", "Computer vision", "Other"];
  const grid = document.getElementById("dataset-type-grid");
  grid.innerHTML = datasetTypes.map(t => `
    <label class="checkbox-pill">
      <input type="checkbox" name="dataset-type" value="${t}"> ${t}
    </label>
  `).join("");

  function updateProgress() {
    progressEl.querySelectorAll(".form-progress-step").forEach(seg => {
      const s = parseInt(seg.dataset.step, 10);
      seg.classList.remove("active", "done");
      if (s < currentStep) seg.classList.add("done");
      else if (s === currentStep) seg.classList.add("active");
    });
  }

  function showStep(step) {
    form.querySelectorAll(".form-step").forEach(el => {
      el.classList.toggle("active", parseInt(el.dataset.step, 10) === step);
    });
    btnBack.style.visibility = step === 1 ? "hidden" : "visible";
    btnNext.style.display = step === TOTAL_STEPS ? "none" : "inline-flex";
    btnSubmit.style.display = step === TOTAL_STEPS ? "inline-flex" : "none";
    updateProgress();
  }

  function validateStep(step) {
    const stepEl = form.querySelector(`.form-step[data-step="${step}"]`);
    const requiredFields = stepEl.querySelectorAll("[required]");
    for (const field of requiredFields) {
      if (!field.value || (field.type === "checkbox" && !field.checked)) {
        field.reportValidity();
        return false;
      }
    }
    return true;
  }

  btnNext.addEventListener("click", () => {
    if (!validateStep(currentStep)) return;
    if (currentStep < TOTAL_STEPS) {
      currentStep++;
      showStep(currentStep);
    }
  });

  btnBack.addEventListener("click", () => {
    if (currentStep > 1) {
      currentStep--;
      showStep(currentStep);
    }
  });

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    if (!validateStep(TOTAL_STEPS)) return;

    btnSubmit.disabled = true;
    btnSubmit.textContent = "Submitting...";

    const selectedTypes = Array.from(document.querySelectorAll('input[name="dataset-type"]:checked')).map(cb => cb.value);

    const payload = {
      full_name: val("q-name"),
      company: val("q-company"),
      business_email: val("q-email"),
      job_title: val("q-title"),
      country: val("q-country"),
      dataset_types: selectedTypes,
      other_dataset_type: val("q-other-type"),
      num_participants: val("q-participants"),
      num_samples: val("q-samples"),
      duration: val("q-duration"),
      geography: val("q-geography"),
      demographics: val("q-demographics"),
      environment: val("q-environment"),
      device: val("q-device"),
      camera: val("q-camera"),
      resolution: val("q-resolution"),
      frame_rate: val("q-framerate"),
      metadata_requirements: val("q-metadata"),
      annotation_requirements: val("q-annotation"),
      quality_requirements: val("q-quality"),
      review_requirements: val("q-review"),
      acceptance_criteria: val("q-acceptance"),
      start_date: val("q-start"),
      delivery_date: val("q-delivery"),
      urgency: val("q-urgency"),
      project_description: val("q-description"),
      technical_specifications: val("q-tech-specs"),
      sop_availability: val("q-sop"),
      additional_requirements: val("q-additional"),
      consent_agree: document.getElementById("q-consent").checked,
      status: "New"
    };

    try {
      const res = await fetch("tables/dataset_requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error("submit failed");
      document.querySelector(".form-shell form").style.display = "none";
      document.getElementById("form-progress").style.display = "none";
      document.getElementById("dataset-success").style.display = "block";
    } catch (err) {
      alert("There was a problem submitting your request. Please try again or contact us directly.");
      btnSubmit.disabled = false;
      btnSubmit.textContent = "Submit Request";
    }
  });

  function val(id) {
    const el = document.getElementById(id);
    return el ? el.value : "";
  }

  showStep(currentStep);
});
