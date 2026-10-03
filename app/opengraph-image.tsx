import { ImageResponse } from "next/og";

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
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#080A09",
          color: "#E8E9E3",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 50% 40% at 15% 20%, rgba(217,154,82,0.12), transparent 60%), radial-gradient(ellipse 45% 40% at 90% 80%, rgba(23,53,36,0.7), transparent 55%)",
          }}
        />
        <p
          style={{
            fontSize: 28,
            letterSpacing: "0.2em",
            color: "#3F7048",
            margin: 0,
            position: "relative",
          }}
        >
          BUSINESS × TECHNOLOGY
        </p>
        <p
          style={{
            fontSize: 56,
            fontWeight: 500,
            marginTop: 24,
            lineHeight: 1.15,
            position: "relative",
          }}
        >
          Israel Santos
        </p>
        <p
          style={{
            fontSize: 28,
            color: "#969C96",
            marginTop: 16,
            maxWidth: 800,
            position: "relative",
          }}
        >
          Business & Digital Transformation Analyst
        </p>
        <div
          style={{
            position: "absolute",
            left: 80,
            bottom: 80,
            width: 48,
            height: 2,
            background: "#D99A52",
            opacity: 0.7,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
