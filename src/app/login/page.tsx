import AuthSection from "@/components/sections/AuthSection";

export const metadata = {
  title: "Login — ByteSpace",
  description: "Log in to your ByteSpace account.",
};

export default function LoginPage() {
  return <AuthSection mode="login" />;
}
