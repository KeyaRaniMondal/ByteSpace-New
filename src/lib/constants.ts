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

export const FEATURED_COURSES = [
  {
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    rating: "4.5",
    level: "Beginner",
    price: "$25",
    image: "/images/feature/figma.png",
  },
  {
    title: "Build Digital Asset",
    author: "purepearl studio",
    rating: "4.5",
    level: "Beginner",
    price: "$25",
    image: "/images/feature/digital-asset.png",
  },
  {
    title: "the Power of Big Data",
    author: "purepearl studio",
    rating: "4.5",
    level: "Beginner",
    price: "$25",
    image: "/images/feature/big-data.png",
  },
  {
    title: "Balancing Productivity and Wellness",
    author: "purepearl studio",
    rating: "4.5",
    level: "Beginner",
    price: "$25",
    image: "/images/feature/productivity.png",
  },
  {
    title: "Mastering Money Management",
    author: "purepearl studio",
    rating: "4.5",
    level: "Beginner",
    price: "$25",
    image: "/images/feature/money.png",
  },
  {
    title: "From Idea to Startup Success",
    author: "purepearl studio",
    rating: "4.5",
    level: "Beginner",
    price: "$25",
    image: "/images/feature/startup.png",
  },
] as const;
