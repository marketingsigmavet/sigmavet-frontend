import React, { useEffect } from "react";
import HomePage from "./pages/HomePage";

const scripts = [
  "/assets/js/vendor/jquery.js",
  "/assets/js/vendor/waypoints.js",
  "/assets/js/bootstrap-bundle.js",
  "/assets/js/swiper-bundle.js",
  "/assets/js/ion.rangeSlider.min.js",
  "/assets/js/magnific-popup.js",
  "/assets/js/nice-select.js",
  "/assets/js/jarallax.js",
  "/assets/js/jquery-appear.js",
  "/assets/js/jquery-knob.js",
  "/assets/js/purecounter.js",
  "/assets/js/wow.js",
  "/assets/js/ajax-form.js",
  "/assets/js/jsap/gsap.js",
  "/assets/js/jsap/scrolltrigger.min.js",
  "/assets/js/jsap/splittext.min.js",
  "/assets/js/jsap/careox-split.js",
  "/assets/js/slider-init.js",
  "/assets/js/main.js",
];

function removeExistingTemplateScripts() {
  document.querySelectorAll("script[data-template-script='true']").forEach((node) => node.remove());
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.dataset.templateScript = "true";
    script.onload = () => resolve();
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

export default function App() {
  useEffect(() => {
    let mounted = true;

    const boot = async () => {
      removeExistingTemplateScripts();

      for (const src of scripts) {
        if (!mounted) return;
        try {
          await loadScript(src);
        } catch (error) {
          console.error(`Failed to load script: ${src}`, error);
        }
      }

      const yearNode = document.getElementById("year");
      if (yearNode) {
        yearNode.textContent = new Date().getFullYear().toString();
      }
    };

    boot();

    return () => {
      mounted = false;
      removeExistingTemplateScripts();
    };
  }, []);

  return <HomePage />;
}
