import Image from "next/image";
import { GROWTH_STATS, CREATOR_BENEFITS } from "@/lib/constants";

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

export default function Growth() {
  return (
    <section
      aria-label="Growth and creator"
      className="relative overflow-hidden bg-white"
    >
      {/* soft background glows like reference */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/4 h-64 w-[560px] rounded-full bg-[#E4FF4D]/50 blur-3xl" />
        <div className="absolute left-[-120px] top-[30%] h-72 w-72 rounded-full bg-[#0F38FF]/10 blur-3xl" />
        <div className="absolute bottom-[-80px] left-[-60px] h-56 w-56 rounded-full bg-[#D4F800]/60 blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-80px] h-72 w-72 rounded-full bg-[#0F38FF]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-14 md:py-20">
        {/* ---- top row: professional growth ---- */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-[26px] font-extrabold leading-[1.2] tracking-tight text-slate-950 sm:text-[32px]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="mt-4 max-w-md text-[13px] leading-relaxed text-slate-500">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>
            <dl className="mt-6 flex gap-8">
              {GROWTH_STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-xl font-extrabold text-blue-700">
                    {stat.value}
                  </dd>
                  <dd className="text-[12px] text-slate-500">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* visual collage */}
          <div className="relative mx-auto w-full max-w-[440px]">
            <div className="relative z-10 w-[220px] rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
              <Image
                src="/images/feature/figma.png"
                alt="Learn Figma course"
                width={220}
                height={140}
                className="h-[110px] w-full rounded-xl object-cover"
              />
              <p className="px-1 pt-2 text-[12px] font-bold text-slate-900">
                Learn Figma from Basic
              </p>
              <p className="px-1 text-[10px] text-slate-400">
                by <span className="text-blue-600">purepearl studio</span>
              </p>
              <div className="flex items-center justify-between px-1 py-1.5">
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600">
                  Beginner
                </span>
                <span className="text-[12px] font-extrabold text-blue-600">
                  $25
                  <span className="font-normal text-slate-400">/lifetime</span>
                </span>
              </div>
            </div>

            <Image
              src="/images/hero.png"
              alt="Student with laptop"
              width={300}
              height={360}
              className="relative z-20 -mt-24 ml-auto h-[300px] w-[250px] object-contain drop-shadow-2xl"
            />

            <div className="absolute bottom-16 right-0 z-30 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-xl">
              <p className="text-[10px] text-slate-500">Learning Progress</p>
              <p className="text-2xl font-extrabold text-slate-900">55%</p>
              <div className="mt-1.5 h-1.5 w-28 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[55%] rounded-full bg-[#8AE600]" />
              </div>
            </div>

            <LimeSquiggle className="absolute right-[-10px] top-16 z-10 w-20 rotate-12" />
          </div>
        </div>

        {/* ---- bottom row: create & manage ---- */}
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          {/* visual */}
          <div className="relative mx-auto w-full max-w-[440px] order-2 lg:order-1">
            <div className="absolute left-0 top-0 z-30 flex flex-col gap-2">
              <div className="w-[130px] rounded-xl bg-[#0F38FF] p-3 text-white shadow-xl">
                <p className="text-[10px] text-white/80">Total Revenue</p>
                <p className="text-[10px] text-white/60">Oct 2025</p>
                <p className="mt-1 text-lg font-extrabold">$120.29</p>
                <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/30">
                  <div className="h-full w-[70%] rounded-full bg-[#D4F800]" />
                </div>
              </div>
              <div className="w-[110px] rounded-xl bg-[#0F38FF] p-3 text-white shadow-xl">
                <p className="text-[10px] text-white/80">Year to Date</p>
                <p className="text-[10px] text-white/60">2025</p>
                <p className="mt-1 text-base font-extrabold">$1,200.38</p>
                <span className="mt-1.5 inline-block rounded-full bg-[#D4F800] px-2 py-0.5 text-[10px] font-bold text-slate-900">
                  +10%
                </span>
              </div>
            </div>

            <Image
              src="/images/user.png"
              alt="Creator with tablet"
              width={300}
              height={380}
              className="relative z-20 mx-auto h-[340px] w-[280px] object-contain drop-shadow-2xl"
            />

            <div className="absolute bottom-8 right-2 z-30 rounded-xl border border-slate-100 bg-white px-3 py-2 shadow-xl">
              <p className="text-[11px] font-bold text-slate-900">
                Happy Students
              </p>
              <p className="text-[10px] text-slate-500">
                4.5 <span className="text-amber-400">★</span> (2k+)
              </p>
              <Image
                src="/images/Auto Layout Horizontal.png"
                alt="Happy students"
                width={150}
                height={28}
                className="mt-1 h-6 w-auto"
              />
            </div>

            <LimeSquiggle className="absolute right-16 top-1/2 z-10 w-20 -rotate-12" />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-[26px] font-extrabold leading-[1.2] tracking-tight text-slate-950 sm:text-[32px]">
              Create & Manage
              <span className="block">Courses Easily.</span>
            </h2>
            <p className="mt-4 max-w-md text-[13px] leading-relaxed text-slate-500">
              <span className="font-semibold text-slate-700">ByteSpace</span>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>
            <ul className="mt-6 space-y-3">
              {CREATOR_BENEFITS.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-2.5 text-[13px] font-medium text-slate-700"
                >
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-blue-600 text-white">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 12.5l5 5L20 6.5" />
                    </svg>
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
