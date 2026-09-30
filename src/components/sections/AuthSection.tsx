import Image from "next/image";
import AuthForm from "@/components/forms/AuthForm";

function WhiteSquiggle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className}>
      <path
        d="M15 20 C 55 10, 95 25, 55 50 C 25 68, 90 65, 60 90 C 40 105, 30 100, 20 110"
        stroke="white"
        strokeWidth="18"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AuthVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      {/* back card */}
      <div className="absolute left-0 top-14 w-[220px] -rotate-3 rounded-2xl bg-[#E8EAF0] p-2.5 opacity-90 shadow-xl">
        <div className="h-[110px] rounded-xl bg-slate-300" />
        <p className="px-1 pt-2 text-[13px] font-bold text-slate-900">
          Build Digital Asset
        </p>
        <p className="px-1 text-[10px] text-slate-500">
          by <span className="text-blue-600">purepearl studio</span>
        </p>
        <div className="flex items-center justify-between px-1 py-1.5">
          <span className="rounded-full bg-white/70 px-2 py-0.5 text-[10px] text-slate-600">
            Beginner
          </span>
          <span className="text-[12px] font-extrabold text-blue-600">
            $25<span className="font-normal text-slate-400">/lifetime</span>
          </span>
        </div>
      </div>

      {/* front card */}
      <div className="relative z-10 ml-20 w-[290px] rounded-2xl bg-white p-2.5 shadow-2xl sm:ml-24">
        <Image
          src="/images/feature/big-data.png"
          alt="the Power of Big Data course"
          width={290}
          height={160}
          className="h-[130px] w-full rounded-xl object-cover"
        />
        <div className="flex items-start justify-between px-1 pt-2">
          <p className="text-[14px] font-bold text-slate-900">
            the Power of Big Data
          </p>
          <span className="flex shrink-0 items-center gap-1 text-[12px] text-slate-500">
            4.5 <span className="text-[#B8E600]">★</span>
          </span>
        </div>
        <p className="px-1 text-[10px] text-slate-500">
          by <span className="text-blue-600">purepearl studio</span>
        </p>
        <div className="flex items-center justify-between px-1 py-1.5">
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600">
            Beginner
          </span>
          <Image
            src="/images/Auto Layout Horizontal.png"
            alt="Enrolled students"
            width={110}
            height={24}
            className="h-6 w-auto"
          />
        </div>
        <p className="px-1 pb-1 text-[13px] font-extrabold text-blue-600">
          $25
          <span className="text-[10px] font-normal text-slate-400">
            /lifetime
          </span>
        </p>
      </div>

      {/* lime ring */}
      <div className="absolute -top-4 left-16 z-20 h-[72px] w-[88px] rotate-[-12deg] rounded-full border-[16px] border-[#D4F800]" />

      {/* lime triangle */}
      <div className="absolute -bottom-2 left-2 z-20 h-24 w-24 rotate-[14deg] bg-[#D4F800] [clip-path:polygon(50%_0,100%_100%,0_100%)]" />

      <WhiteSquiggle className="absolute bottom-16 right-16 z-20 w-16 -rotate-12" />

      {/* happy students lime card */}
      <div className="absolute -bottom-10 right-0 z-20 w-[210px] rounded-xl bg-[#D4F800] p-3 shadow-xl">
        <p className="text-[12px] font-bold text-slate-900">Happy Students</p>
        <p className="text-[10px] text-slate-700">
          4.5 (2k+) <span className="text-blue-700">★</span>
        </p>
        <Image
          src="/images/Auto Layout Horizontal.png"
          alt="Happy students"
          width={180}
          height={32}
          className="mt-1.5 h-7 w-auto"
        />
      </div>
    </div>
  );
}

type Props = {
  mode: "signup" | "login";
};

export default function AuthSection({ mode }: Props) {
  const isSignup = mode === "signup";
  return (
    <section className="relative overflow-hidden bg-[#0F38FF]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.14) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-24 pt-[150px] lg:grid-cols-2 lg:items-center md:pt-[160px]">
        <div>
          <h2 className="text-xl font-bold text-white">
            {isSignup ? "Sign up and come in" : "Sign in with ease"}
          </h2>
          <p className="mt-3 max-w-md text-[13px] leading-relaxed text-white/80">
            {isSignup
              ? "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
              : "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."}
          </p>
          <div className="mt-10 hidden sm:block">
            <AuthVisual />
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <AuthForm mode={mode} />
        </div>
      </div>
    </section>
  );
}
