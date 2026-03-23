import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f8f7f3",
          color: "#111827",
          fontFamily: "Georgia, serif"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 18
          }}
        >
          <div
            style={{
              height: 170,
              width: 170,
              borderRadius: 24,
              border: "2px solid #111827",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 90,
              fontWeight: 700,
              letterSpacing: 2
            }}
          >
            MH
          </div>
          <div style={{ fontSize: 52, fontWeight: 700, letterSpacing: 1 }}>MadsHatter</div>
          <div style={{ fontSize: 32, opacity: 0.85 }}>AI Resume Review tool</div>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
