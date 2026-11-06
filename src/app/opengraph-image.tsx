import { ImageResponse } from "next/og";
import { MARCA } from "@/config";

// Prévia de compartilhamento (WhatsApp, Facebook etc.), gerada no build.
export const alt = `${MARCA}: achadinhos garimpados a dedo`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Imagem() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          background: "radial-gradient(circle at 80% 20%, #3a2a55, #15111d 60%)",
          color: "#fff",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 38, fontWeight: 700, color: "#e9b949", letterSpacing: 6, fontFamily: "sans-serif" }}>
          GARIMPO VIP
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 84, fontWeight: 800, lineHeight: 1.05, marginTop: 24 }}>
          <span>Achadinhos garimpados a dedo.</span>
          <span style={{ color: "#e9b949", fontStyle: "italic" }}>Só as pepitas.</span>
        </div>
        <div style={{ display: "flex", fontSize: 32, marginTop: 36, color: "rgba(255,255,255,.82)", fontFamily: "sans-serif" }}>
          Curadoria independente e gratuita · Grupo no WhatsApp
        </div>
      </div>
    ),
    size,
  );
}
