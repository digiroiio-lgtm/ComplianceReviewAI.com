import { ImageResponse } from "next/og";

export const alt = "ComplianceReviewAI.com: AI Compliance Review for Modern Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#101a2c",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 700, color: "#6db3f2", display: "flex" }}>
          ComplianceReviewAI.com
        </div>
        <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.08, letterSpacing: -2, display: "flex" }}>
          AI Compliance Review for Modern Businesses
        </div>
        <div style={{ fontSize: 30, color: "#a3b2c8", display: "flex" }}>
          Educational guides to AI-assisted compliance review
        </div>
      </div>
    ),
    size,
  );
}
