import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ricardo Nuno Fonseca & Associados — Conceito",
    short_name: "RNF — Conceito",
    description: "Conceito independente de website institucional.",
    start_url: "/",
    display: "standalone",
    background_color: "#17231f",
    theme_color: "#17231f",
    icons: [
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }
    ]
  };
}
