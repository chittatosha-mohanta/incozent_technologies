/**
 * Interactive Scroll-Driven Timeline Animation
 * Replicating the Aceternity UI scroll progress beam in clean vanilla JS
 */
(function () {
  function initTimeline() {
    const container = document.getElementById("workflow-timeline");
    const beam = document.getElementById("timeline-beam");
    if (!container || !beam) return;

    function onScroll() {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start progressing when container top enters upper viewport,
      // reach 100% as the bottom passes through the viewport
      const startTrigger = windowHeight * 0.75;
      const endTrigger = windowHeight * 0.25;

      const totalDistance = rect.height;
      const currentScroll = startTrigger - rect.top;

      let progress = currentScroll / (totalDistance + (startTrigger - endTrigger));
      progress = Math.max(0, Math.min(1, progress));

      beam.style.height = (progress * 100) + "%";

      // Beam position relative to container
      const beamCurrentY = progress * rect.height;

      const items = container.querySelectorAll(".timeline-item");
      items.forEach(item => {
        const itemTop = item.offsetTop;
        // Node trigger point (center of node)
        if (beamCurrentY >= itemTop + 10) {
          item.classList.add("is-active");
        } else {
          item.classList.remove("is-active");
        }
      });
    }

    window.addEventListener("scroll", () => requestAnimationFrame(onScroll), { passive: true });
    window.addEventListener("resize", () => requestAnimationFrame(onScroll), { passive: true });
    onScroll();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTimeline);
  } else {
    initTimeline();
  }
})();
