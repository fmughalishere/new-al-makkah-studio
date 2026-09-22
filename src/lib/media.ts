// Central media resolver — every image/video on the site is served from
// Cloudinary instead of the local /public/images folder, so pages load fast
// and nothing has to be shipped inside the app bundle.
//
// Cloudinary asset naming follows the same base names the files had in
// public/images, with spaces turned into underscores (matches what was
// uploaded, e.g. "Canon R6.jpg" -> "Canon_R6.jpg"). If a specific asset was
// uploaded under a different public id/version, just adjust the map below —
// every component pulls image()/video() from this one file.

const CLOUD_NAME = "aaqhrsnd";
const IMAGE_VERSION = "v1790056651";
const VIDEO_VERSION = "v1790056651";

function slugify(name: string) {
  return name.trim().replace(/\s+/g, "_");
}

/**
 * Resolve a Cloudinary image URL from the file's original base name
 * (no extension), e.g. image("Canon R6") or image("aesthetic").
 */
export function image(name: string, ext: "jpg" | "png" | "webp" = "jpg") {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto/${IMAGE_VERSION}/${slugify(
    name
  )}.${ext}`;
}

/**
 * Resolve a Cloudinary video URL from the file's original base name
 * (no extension), e.g. video("v1") or video("edited1").
 */
export function video(name: string) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/q_auto/${VIDEO_VERSION}/${slugify(
    name
  )}.mp4`;
}

/**
 * A cropped, web-optimised 1200x630 version of an image — used for the
 * Open Graph / Twitter share preview (og:image).
 */
export function ogImage(name: string) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/c_fill,g_auto,w_1200,h_630,q_auto,f_jpg/${IMAGE_VERSION}/${slugify(
    name
  )}.jpg`;
}

/** A square crop of an image, used for manifest / favicon-style icons. */
export function iconImage(name: string, size: number) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/c_fill,g_auto,w_${size},h_${size},q_auto,f_png/${IMAGE_VERSION}/${slugify(
    name
  )}.png`;
}

// The canonical, public URL the site is served from — every absolute link
// (Open Graph, Twitter cards, sitemap, robots.txt, JSON-LD) is built from
// this one place. Update it here (or via the NEXT_PUBLIC_SITE_URL env var
// in Vercel) once a custom domain is attached.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://al-makkah-studio.vercel.app";

// Studio locations — used by the Contact section and the Google Map embed.
// Lahore is the primary/first studio, Phool Nagar is the secondary branch.
// Lahore carries exact coordinates (from the studio's Google Maps pin); a
// location without lat/lng falls back to a text address search on the map.
export const LOCATIONS = [
  {
    id: "lahore",
    label: "Lahore (Main Branch)",
    address: "Mansoora Bazar, Crescent Town, Mansoora, Lahore",
    mapQuery: "Mansoora Bazar, Crescent Town, Mansoora, Lahore, Pakistan",
    lat: 31.49394,
    lng: 74.2627816,
  },
  {
    id: "phool-nagar",
    label: "Phool Nagar (Branch)",
    address: "Akma Market, Abbas IT Center, Phool Nagar, 55260",
    mapQuery: "Akma Market, Abbas IT Center, Phool Nagar, 55260, Pakistan",
  },
] as const;

export const CONTACT = {
  email: "husnainmughal487@gmail.com",
  whatsapp: "https://wa.me/923327062018",
  tel: "+923327062018",
};

// Friendly, easy-to-read pre-filled WhatsApp message so a "Book Now" click
// opens the chat with a ready greeting instead of a blank box.
const BOOKING_MESSAGE =
  "Assalam o Alaikum! Mujhe Al Makkah Studio ki booking aur packages ke baare mein details chahiye.";

export function whatsappLink(message: string = BOOKING_MESSAGE) {
  return `${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}
