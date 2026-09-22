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

// Studio locations — used by the Contact section and the Google Map embed.
// Lahore is the primary/first studio, Phool Nagar is the secondary branch.
// Both carry exact coordinates (from each studio's Google Maps pin) so the
// embedded map points precisely at the right spot.
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
    address: "Main Multan Road, Phool Nagar, Punjab",
    mapQuery: "Main Multan Road, Phool Nagar, Punjab, Pakistan",
    lat: 31.205781,
    lng: 73.9370389,
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
