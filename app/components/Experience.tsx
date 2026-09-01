"use client";

import { useEffect } from "react";

export function Experience() {
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.motionReady = "true";
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const narrative = document.querySelector<HTMLElement>(".narrative-scene");
    const counter = document.querySelector<HTMLElement>("[data-counter]");
    const parallaxMedia = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax-media]"));
    const teamMedia = document.querySelector<HTMLElement>("[data-team-media]");
    let frame = 0;

    const clamp = (value: number) => Math.min(1, Math.max(0, value));
    const bell = (progress: number, center: number, radius: number) =>
      clamp(1 - Math.abs(progress - center) / radius);

    const update = () => {
      frame = 0;
      const viewport = window.innerHeight;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - viewport);
      const isReduced = reducedMotion.matches;

      root.dataset.reducedMotion = isReduced ? "true" : "false";
      root.style.setProperty("--page-progress", String(clamp(window.scrollY / maxScroll)));

      const hero = document.querySelector<HTMLElement>("[data-hero]");
      if (hero) {
        const rect = hero.getBoundingClientRect();
        const progress = isReduced ? 0 : clamp(-rect.top / Math.max(1, rect.height));
        root.style.setProperty("--hero-progress", String(progress));
        root.style.setProperty("--hero-media-y", `${progress * 10}vh`);
        root.style.setProperty("--hero-copy-y", `${progress * -6}vh`);
      }

      parallaxMedia.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const progress = clamp((viewport - rect.top) / Math.max(1, viewport + rect.height));
        element.style.setProperty("--media-shift", isReduced ? "0px" : `${(progress - 0.5) * 90}px`);
      });

      if (narrative) {
        const rect = narrative.getBoundingClientRect();
        const distance = Math.max(1, rect.height - viewport);
        const progress = isReduced ? 0 : clamp(-rect.top / distance);
        const first = progress < 0.18 ? 1 : bell(progress, 0.12, 0.28);
        const second = bell(progress, 0.5, 0.3);
        const third = progress > 0.82 ? 1 : bell(progress, 0.86, 0.28);
        const active = progress < 0.33 ? "01" : progress < 0.68 ? "02" : "03";

        narrative.style.setProperty("--narrative-progress", String(progress));
        narrative.style.setProperty("--beat-one", String(first));
        narrative.style.setProperty("--beat-two", String(second));
        narrative.style.setProperty("--beat-three", String(third));
        narrative.style.setProperty("--narrative-image-y", `${(progress - 0.5) * -12}vh`);
        narrative.style.setProperty("--narrative-image-scale", String(1.12 - progress * 0.07));
        if (counter) counter.textContent = active;
      }

      if (teamMedia) {
        const rect = teamMedia.getBoundingClientRect();
        const progress = clamp((viewport - rect.top) / Math.max(1, viewport + rect.height));
        teamMedia.style.setProperty("--team-shift", isReduced ? "0px" : `${(progress - 0.5) * 70}px`);
      }
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.setAttribute("data-visible", "true");
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.12 }
    );

    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reducedMotion.addEventListener("change", schedule);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reducedMotion.removeEventListener("change", schedule);
      if (frame) window.cancelAnimationFrame(frame);
      delete root.dataset.motionReady;
    };
  }, []);

  return null;
}
