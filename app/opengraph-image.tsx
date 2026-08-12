import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Bloom Tutoring";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const [baloo2ExtraBold, nunitoExtraBold, flowerPng] = await Promise.all([
  readFile(join(process.cwd(), "assets/Baloo2-ExtraBold.ttf")),
  readFile(join(process.cwd(), "assets/Nunito-ExtraBold.ttf")),
  readFile(join(process.cwd(), "public/images/flower.png")),
]);
const flowerDataUrl = `data:image/png;base64,${flowerPng.toString("base64")}`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fbf6ee",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <img
            src={flowerDataUrl}
            width={160}
            height={160}
            alt=""
            style={{ display: "block" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontFamily: "Baloo 2",
                fontSize: 128,
                fontWeight: 800,
                lineHeight: 1,
                color: "#18765f",
              }}
            >
              bloom
            </span>
            <span
              style={{
                fontFamily: "Nunito",
                fontSize: 40,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: 10,
                color: "#b83c20",
                marginTop: 10,
              }}
            >
              Tutoring
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Baloo 2", data: baloo2ExtraBold, weight: 800, style: "normal" },
        { name: "Nunito", data: nunitoExtraBold, weight: 800, style: "normal" },
      ],
    }
  );
}
