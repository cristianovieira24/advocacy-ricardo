import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ricardo Nuno Fonseca & Associados — Conceito de website";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          color: "#f3f0e7",
          background: "#17231f",
          fontFamily: "serif"
        }}
      >
        <div style={{ position: "absolute", inset: 44, display: "flex", border: "1px solid rgba(255,255,255,.18)" }} />
        <div style={{ position: "absolute", width: 420, height: 420, right: 70, top: 95, display: "flex", background: "#b8f36b", transform: "rotate(7deg)" }} />
        <div style={{ position: "absolute", width: 360, height: 300, right: 210, bottom: 50, display: "flex", border: "1px solid rgba(255,255,255,.4)", background: "#26352f", transform: "rotate(-5deg)" }} />
        <div style={{ padding: "88px 80px", width: 760, display: "flex", flexDirection: "column", justifyContent: "space-between", zIndex: 2 }}>
          <div style={{ display: "flex", fontFamily: "sans-serif", fontSize: 16, letterSpacing: 3, color: "#b8f36b", textTransform: "uppercase" }}>
            Conceito independente · Coimbra
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 76, lineHeight: .95, letterSpacing: -4 }}>Ricardo Nuno</div>
            <div style={{ display: "flex", fontSize: 76, lineHeight: .95, letterSpacing: -4 }}>Fonseca &amp; Associados</div>
            <div style={{ display: "flex", marginTop: 24, fontFamily: "sans-serif", fontSize: 20, color: "rgba(255,255,255,.68)" }}>Sociedade de Advogados, SP, RL</div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
