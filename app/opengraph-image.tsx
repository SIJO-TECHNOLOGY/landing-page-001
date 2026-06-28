import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { BRAND, HERO, STATS } from "@/lib/content";

// Branded link-preview card (iMessage / WhatsApp / Slack / social).
export const runtime = "nodejs";
export const alt = `${BRAND.full} — Purpose-built AI for business operations`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const iconData = await readFile(join(process.cwd(), "app/icon.png"));
  const iconSrc = `data:image/png;base64,${iconData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#0b1220",
          backgroundImage:
            "linear-gradient(135deg, #0e1729 0%, #0b1220 45%, #070b14 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: brand mark + telemetry whisper */}
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <img
            src={iconSrc}
            width={80}
            height={80}
            style={{ borderRadius: 18 }}
          />
          <div
            style={{
              display: "flex",
              marginLeft: 22,
              fontSize: 32,
              fontWeight: 600,
              letterSpacing: -0.5,
            }}
          >
            {BRAND.name}
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: "auto",
              fontSize: 19,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#38bdf8",
            }}
          >
            Engineering Intelligence
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            fontSize: 66,
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 940,
          }}
        >
          {`${HERO.headingTop} ${HERO.headingAccent}`}
        </div>

        {/* Proof points */}
        <div style={{ display: "flex" }}>
          {STATS.map((stat) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: 56,
              }}
            >
              <div
                style={{ display: "flex", fontSize: 46, fontWeight: 600 }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: 6,
                  fontSize: 20,
                  color: "#94a3b8",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
