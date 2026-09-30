import Image from "next/image";
import { LEARNING_PATHS } from "@/lib/constants";

export default function LearningPaths() {
  return (
    <section aria-label="Learning paths" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 pb-16 text-center md:pb-20">
        <h2 className="mx-auto max-w-3xl text-[26px] font-extrabold tracking-tight text-slate-950 sm:text-[32px]">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="mx-auto mt-3 max-w-4xl text-[13px] leading-relaxed text-slate-500">
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring
          there&apos;s something for everyone. Unleash your potential and
          explore our carefully curated categories.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {LEARNING_PATHS.map((path) => (
            <a
              key={path.name}
              href="#courses"
              className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[#D4F800]">
                <Image
                  src={path.icon}
                  alt={`${path.name} icon`}
                  width={22}
                  height={22}
                  className="h-[22px] w-[22px] object-contain"
                />
              </span>
              <span className="text-[14px] font-medium text-slate-800">
                {path.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
