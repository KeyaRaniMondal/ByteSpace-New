import AuthSection from "@/components/sections/AuthSection";

export const metadata = {
  title: "Sign up — ByteSpace",
  description: "Create your free ByteSpace account.",
};

export default function SignupPage() {
  return <AuthSection mode="signup" />;
}
