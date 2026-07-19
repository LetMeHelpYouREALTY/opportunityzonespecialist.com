export const site = {
  name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
  shortName: "Dr. Jan Duffy",
  agentTitle: "REALTOR® | BHHS Nevada Properties",
  brand: "Opportunity Zone Specialist",
  tagline: "Las Vegas homes for sale with Opportunity Zone expertise",
  domain: "opportunityzonespecialist.com",
  url: "https://www.opportunityzonespecialist.com",
  email: "homes@heyberkshire.com",
  license: "S.0197614.LLC",
  brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
  realscoutPortal: "http://drjanduffy.realscout.com/",
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() ||
    "https://calendly.com/drjanduffy/showing",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Dr+Jan+Duffy+Berkshire+Hathaway+HomeServices+Las+Vegas",
  agentPhotoSrc: "/realty/dr-jan-duffy.jpg",
  agentPhotoAlt:
    "Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties",
  city: "Las Vegas",
  state: "NV",
  region: "Greater Las Vegas Valley",

  phone: {
    display: "(702) 222-1964",
    tel: "+17022221964",
    href: "tel:+17022221964",
  },

  address: {
    streetAddress: "9406 W Lake Mead Blvd, Suite 100",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89134",
    addressCountry: "US",
  },

  hours: {
    monday: "09:00-18:00",
    tuesday: "09:00-18:00",
    wednesday: "09:00-18:00",
    thursday: "09:00-18:00",
    friday: "09:00-18:00",
    saturday: "10:00-16:00",
    sunday: "By Appointment",
  },

  geo: {
    latitude: 36.1941,
    longitude: -115.2678,
  },

  serviceAreas: [
    "Las Vegas, NV",
    "Summerlin, NV",
    "Henderson, NV",
    "North Las Vegas, NV",
    "Clark County, NV",
  ],

  rating: {
    value: "4.9",
    count: "200",
  },
} as const;

export const navLinks = [
  { label: "Homes for Sale", href: "/las-vegas-homes-for-sale" },
  { label: "Listings", href: "/listings" },
  { label: "Neighborhoods", href: "/neighborhoods" },
  { label: "Buyers", href: "/buyers" },
  { label: "Sellers", href: "/sellers" },
  { label: "Contact", href: "/contact" },
] as const;

export function getRealscoutAgentId(): string {
  return (
    process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID?.trim() || "QWdlbnQtMjI1MDUw"
  );
}

export function getCloudinaryCloudName(): string {
  return process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME?.trim() || "";
}

export function getCloudinaryFolder(): string {
  return process.env.CLOUDINARY_FOLDER?.trim() || "";
}

export function getOpenHousesMapEmbedUrl(): string {
  return process.env.NEXT_PUBLIC_OPEN_HOUSES_MAP_EMBED_URL?.trim() || "";
}

export function getGoogleMapsApiKey(): string {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim() || "";
}

export function getDirectionsUrl(): string {
  const { streetAddress, addressLocality, addressRegion, postalCode } =
    site.address;
  const query = encodeURIComponent(
    `${streetAddress}, ${addressLocality}, ${addressRegion} ${postalCode}`
  );
  return `https://www.google.com/maps/dir/?api=1&destination=${query}`;
}

export function getOfficeMapEmbedUrl(): string {
  const openHouses = getOpenHousesMapEmbedUrl();
  if (openHouses) return openHouses;

  const { streetAddress, addressLocality, addressRegion, postalCode } =
    site.address;
  const query = encodeURIComponent(
    `${streetAddress}, ${addressLocality}, ${addressRegion} ${postalCode}`
  );
  return `https://www.google.com/maps/embed/v1/place?key=${getGoogleMapsApiKey()}&q=${query}`;
}

export function formatFullAddress(): string {
  const { streetAddress, addressLocality, addressRegion, postalCode } =
    site.address;
  return `${streetAddress}, ${addressLocality}, ${addressRegion} ${postalCode}`;
}

export function cloudinaryUrl(
  publicId: string,
  options: { width?: number; height?: number; crop?: string } = {}
): string | null {
  const cloud = getCloudinaryCloudName();
  if (!cloud || !publicId) return null;
  const folder = getCloudinaryFolder();
  const path = folder ? `${folder}/${publicId}` : publicId;
  const { width = 1600, height = 900, crop = "fill" } = options;
  return `https://res.cloudinary.com/${cloud}/image/upload/c_${crop},w_${width},h_${height},q_auto,f_auto/${path}`;
}

export const FALLBACK_HERO_IMAGE = "/realty/heroes/hero-homes-for-sale.jpg";
