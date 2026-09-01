"use client";

import { useEffect } from "react";

export function Experience() {
  useEffect(() => {
    const root = document.documentElement;
    const scenes = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-scene]"));
    let frame = 0;

    const clamp = (value: number) => Math.min(1, Math.max(0, value));
    const update = () => {
      frame = 0;
      const viewport = window.innerHeight;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - viewport);
      root.style.setProperty("--page-progress", String(clamp(window.scrollY / maxScroll)));

      const hero = document.querySelector<HTMLElement>("[data-hero]");
      if (hero) {
        const rect = hero.getBoundingClientRect();
        const progress = clamp(-rect.top / Math.max(1, rect.height * 0.72));
        root.style.setProperty("--hero-progress", String(progress));
        root.style.setProperty("--hero-a-x", `${-progress * 26}px`);
        root.style.setProperty("--hero-a-y", `${progress * 32}px`);
        root.style.setProperty("--hero-a-r", `${7 - progress * 5}deg`);
        root.style.setProperty("--hero-b-x", `${progress * 34}px`);
        root.style.setProperty("--hero-b-y", `${-progress * 22}px`);
        root.style.setProperty("--hero-b-r", `${-6 + progress * 4}deg`);
        root.style.setProperty("--hero-c-x", `${progress * 18}px`);
        root.style.setProperty("--hero-c-y", `${progress * 14}px`);
        root.style.setProperty("--hero-c-r", `${3 - progress * 2}deg`);
        root.style.setProperty("--hero-line-progress", String(1 - Math.min(1, progress * 2.2)));
      }

      scenes.forEach((scene) => {
        const rect = scene.getBoundingClientRect();
        const distance = Math.max(1, rect.height - viewport);
        const progress = clamp(-rect.top / distance);
        scene.style.setProperty("--scene-progress", String(progress));

        if (scene.classList.contains("alignment-scene")) {
          const eased = 1 - Math.pow(1 - progress, 3);
          scene.style.setProperty("--align-one", `${-18 + eased * 18}vw`);
          scene.style.setProperty("--align-two", `${16 - eased * 16}vw`);
          scene.style.setProperty("--align-three", `${-10 + eased * 10}vw`);
        }

        if (scene.classList.contains("reading-scene")) {
          const converge = Math.sin(progress * Math.PI * 0.86);
          scene.style.setProperty("--read-a-x", `${-80 + converge * 80}px`);
          scene.style.setProperty("--read-a-y", `${80 - converge * 42}px`);
          scene.style.setProperty("--read-b-x", `${90 - converge * 90}px`);
          scene.style.setProperty("--read-b-y", `${converge * 22}px`);
          scene.style.setProperty("--read-c-x", `${-45 + converge * 45}px`);
          scene.style.setProperty("--read-c-y", `${-70 + converge * 70}px`);
          scene.style.setProperty("--read-axis", String(Math.max(0.1, converge)));
        }
      });
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
      { rootMargin: "0px 0px -12%", threshold: 0.12 }
    );

    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
