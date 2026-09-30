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

export const LEARNING_PATHS = [
  { name: "Design", icon: "/images/vector_images/design.png" },
  { name: "Development", icon: "/images/vector_images/development.png" },
  { name: "IT & Software", icon: "/images/vector_images/it-software.png" },
  { name: "Business", icon: "/images/vector_images/business.png" },
  { name: "Marketing", icon: "/images/vector_images/marketing.png" },
  { name: "Photography", icon: "/images/vector_images/photography.png" },
] as const;

export const GROWTH_STATS = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
] as const;

export const CREATOR_BENEFITS = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
] as const;

export const TESTIMONIALS = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    image: "/images/sarah.png",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    image: "/images/james.png",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    image: "/images/alex.png",
  },
] as const;
