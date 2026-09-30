import Image from "next/image";
import SearchBar from "@/components/ui/SearchBar";

function LimeSquiggle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 160" fill="none" className={className}>
      <path
        d="M15 20 C 60 5, 100 25, 60 55 C 20 85, 90 85, 60 115 C 35 138, 20 135, 10 150"
        stroke="#D4F800"
        strokeWidth="22"
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

function PaperPlane({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M3.5 19.5 21 12 3.5 4.5l2.6 6.2 6 1.3-6 1.3-2.6 6.2Z" />
    </svg>
  );
}


export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0F38FF]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.14) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_30%,transparent_40%,rgba(0,20,120,.35)_100%)]"
      />

      <LimeSquiggle className="absolute -left-4 top-[28%] hidden w-32 rotate-[10deg] lg:block" />
      <WhiteSquiggle className="absolute left-[16%] top-[52%] hidden w-20 -rotate-12 lg:block" />
      <div className="absolute bottom-[12%] left-[5%] hidden h-32 w-28 rounded-full border-[22px] border-white lg:block" />
      <PaperPlane className="absolute left-[15%] top-[38%] hidden h-5 w-5 -rotate-12 text-[#7DFFB2] lg:block" />

      <div className="absolute -right-10 top-[26%] hidden h-56 w-32 rotate-[-18deg] rounded-[36px] bg-[#D4F800] lg:block" />
      <div className="absolute right-[9%] top-[52%] hidden h-20 w-20 rotate-[18deg] rounded-md bg-white [clip-path:polygon(50%_0,100%_100%,0_100%)] lg:block" />
      <WhiteSquiggle className="absolute bottom-[6%] right-[4%] hidden w-32 rotate-[160deg] lg:block" />

      <div className="relative mx-auto max-w-5xl px-5 pt-[120px] text-center md:pt-[132px]">
        <h1 className="mx-auto max-w-3xl text-[34px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-[60px]">
          Get Access to Hundreds
          <span className="block">Courses Available</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-[13px] leading-relaxed text-white/80 sm:text-sm">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <div className="mt-7 flex justify-center">
          <SearchBar />
        </div>
      </div>

      {/*  student + floating cards*/}
      <div className="relative mx-auto mt-10 max-w-6xl px-5">
        <div className="relative mx-auto flex h-[420px] max-w-[760px] items-end justify-center sm:h-[480px] md:h-[520px]">
          {/* lime arch */}
          <div
            aria-hidden
            className="absolute bottom-0 left-1/2 h-[78%] w-[115%] max-w-[760px] -translate-x-1/2 rounded-t-full bg-[#D4F800] sm:w-[100%]"
          />

          <div className="relative z-10 h-full w-[min(340px,78vw)] sm:w-[420px] md:w-[460px]">
            <Image
              src="/images/hero.png"
              alt="Happy student with laptop wearing headphones"
              fill
              priority
              sizes="(max-width: 768px) 340px, 460px"
              className="rounded-t-full object-cover object-top [mask-image:linear-gradient(to_bottom,black_92%,transparent_100%)]"
            />
          </div>

          <div className="absolute left-0 top-[18%] z-20 hidden rounded-xl border-2 border-emerald-300 bg-white px-4 py-3 text-left shadow-xl sm:block md:left-[2%]">
            <p className="text-[13px] font-bold text-slate-900">UI/UX Design</p>
            <p className="mt-0.5 text-[11px] text-slate-500">
              200 Courses • 1000+ Students
            </p>
            <PaperPlane className="absolute -right-2 -top-2 h-5 w-5 rotate-45 text-amber-300" />
          </div>

          <div className="absolute right-0 top-[22%] z-20 hidden rounded-xl border-2 border-emerald-300 bg-white px-5 py-4 text-left shadow-xl sm:block md:right-[1%]">
            <p className="text-[11px] font-medium text-slate-500">
              Learning Progress
            </p>
            <p className="mt-1 text-4xl font-extrabold text-slate-900">55%</p>
            <div className="mt-2 h-1.5 w-36 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[55%] rounded-full bg-[#8AE600]" />
            </div>
          </div>

          <div className="absolute bottom-[10%] left-0 z-20 flex h-[121px] w-[258px] flex-col gap-2 rounded-2xl border-2 border-emerald-300 bg-white p-4 text-left shadow-xl md:left-[1%]">
            <p className="text-[13px] font-bold text-slate-900">
              Happy Students
            </p>
            <p className="text-[11px] text-slate-500">
              4.5 <span className="text-amber-400">★</span> (2k+)
            </p>
            <div className="flex items-center">
              <Image
                src="/images/Auto Layout Horizontal.png"
                alt="Student avatars"
                width={232}
                height={43}
                className="h-8 w-auto"
              />
              <span className="-ml-2 grid h-8 w-8 place-items-center rounded-full bg-[#D4F800] text-[10px] font-extrabold text-slate-900 ring-2 ring-white">
                2k+
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
