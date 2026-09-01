import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://conceito-rnf.vercel.app"),
  title: {
    default: "Ricardo Nuno Fonseca & Associados — Conceito de website",
    template: "%s — Ricardo Nuno Fonseca & Associados"
  },
  description:
    "Conceito independente de website institucional para Ricardo Nuno Fonseca & Associados — Sociedade de Advogados, SP, RL.",
  openGraph: {
    title: "Ricardo Nuno Fonseca & Associados — Conceito de website",
    description: "Uma proposta digital institucional construída a partir de informação pública confirmada.",
    type: "website",
    locale: "pt_PT"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ricardo Nuno Fonseca & Associados — Conceito de website",
    description: "Uma proposta digital institucional construída a partir de informação pública confirmada."
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true }
  },
  icons: {
    icon: "/favicon.svg"
  },
  manifest: "/manifest.webmanifest"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#17231f",
  colorScheme: "light dark"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT">
      <body>{children}</body>
    </html>
  );
}
