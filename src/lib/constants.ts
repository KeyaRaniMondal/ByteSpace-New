export const NAV_LINKS = [
  { label: "Home", href: "#", active: true },
  { label: "Courses", href: "#courses", active: false },
  { label: "Creators", href: "#creators", active: false },
] as const;

export const HERO_STATS = {
  progress: 55,
  rating: "4.5",
  reviews: "(2k+)",
} as const;

export const PARTNERS = [
  { name: "Northwave", icon: "/images/vector_images/wave.png" },
  { name: "Solstice", icon: "/images/vector_images/solstice.png" },
  { name: "SwiftSend", icon: "/images/vector_images/swiftsend.png" },
  { name: "Quadrant", icon: "/images/vector_images/quadrant.png" },
  { name: "Orbitly", icon: "/images/vector_images/orbitly.png" },
] as const;

export const FEATURED_CATEGORIES = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
] as const;
