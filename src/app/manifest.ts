import type { MetadataRoute } from "next";
import { iconImage } from "@/src/lib/media";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Al Makkah Studio — Wedding & Cinematic Photography",
    short_name: "Al Makkah Studio",
    description:
      "Cinematic wedding films, bridal shoots & event photography across Punjab, with studios in Lahore and Phool Nagar.",
    start_url: "/",
    display: "standalone",
    background_color: "#08090a",
    theme_color: "#08090a",
    icons: [
      { src: iconImage("logo", 192), sizes: "192x192", type: "image/png" },
      { src: iconImage("logo", 512), sizes: "512x512", type: "image/png" },
    ],
  };
}
