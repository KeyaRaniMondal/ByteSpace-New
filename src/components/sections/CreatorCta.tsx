import Link from "next/link";

function LimeSquiggle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className}>
      <path
        d="M15 20 C 55 10, 95 25, 55 50 C 25 68, 90 65, 60 90 C 40 105, 30 100, 20 110"
        stroke="#D4F800"
        strokeWidth="18"
        strokeLinecap="round"
      />
    </svg>
  );
}

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

export default function CreatorCta() {
  return (
    <section
      aria-label="Become a creator"
      className="relative overflow-hidden bg-[#0F38FF]"
    >
      {/* blueprint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.14) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      />

      {/* doodles */}
      <LimeSquiggle className="absolute -left-5 top-6 hidden w-28 rotate-[15deg] sm:block" />
      <WhiteSquiggle className="absolute left-[13%] top-8 hidden w-16 -rotate-12 md:block" />
      <div className="absolute bottom-8 left-[5%] hidden h-24 w-24 rounded-full border-[20px] border-[#D4F800] sm:block" />
      <div className="absolute bottom-16 left-[-24px] hidden h-24 w-24 rotate-[18deg] rounded-md bg-white [clip-path:polygon(50%_0,100%_100%,0_100%)] sm:block" />

      <div className="absolute right-[12%] top-10 hidden h-20 w-20 rotate-[12deg] rounded-lg bg-[#D4F800] [clip-path:polygon(50%_0,100%_100%,0_100%)] sm:block" />
      <div className="absolute -right-8 top-16 hidden h-44 w-28 rotate-[-12deg] rounded-[40px] bg-white md:block" />
      <LimeSquiggle className="absolute bottom-2 right-[8%] hidden w-28 rotate-[160deg] sm:block" />

      <div className="relative mx-auto max-w-4xl px-5 py-14 text-center md:py-16">
        <h2 className="mx-auto max-w-2xl text-[24px] font-extrabold leading-[1.2] tracking-tight text-white sm:text-[30px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-[12px] leading-relaxed text-white/80 sm:text-[13px]">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <Link
          href="#join"
          className="mt-7 inline-block rounded-full bg-[#D4F800] px-7 py-2.5 text-[13px] font-semibold text-slate-900 transition hover:brightness-95 active:scale-95"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}
