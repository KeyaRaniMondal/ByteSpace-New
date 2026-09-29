"use client";

import { useState } from "react";
import { FEATURED_CATEGORIES } from "@/lib/constants";

type Props = {
  onSelect?: (category: string) => void;
};

export default function Featured({ onSelect }: Props) {
  const [active, setActive] = useState<string>("Featured");

  const handleSelect = (category: string) => {
    setActive(category);
    onSelect?.(category);
  };

  return (
    <section aria-label="Featured categories" className="bg-white">
      <div className="mx-auto max-w-5xl px-5 py-14 text-center md:py-16">
        <h2 className="mx-auto max-w-xl text-[28px] font-extrabold leading-[1.15] tracking-tight text-slate-950 sm:text-4xl">
          Discover Your Passion,
          <span className="block">Build Your Skills</span>
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-[13px] leading-relaxed text-slate-500 sm:text-sm">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {FEATURED_CATEGORIES.map((category) => {
            const isActive = category === active;
            return (
              <button
                key={category}
                type="button"
                onClick={() => handleSelect(category)}
                aria-pressed={isActive}
                className={`rounded-full px-4 py-2 text-[13px] font-medium transition active:scale-95 ${
                  isActive
                    ? "bg-[#D4F800] text-slate-900"
                    : "bg-[#F3F4F6] text-slate-700 hover:bg-slate-200"
                }`}
              >
                {category}
              </button>
            );
          })}
          <a
            href="#courses"
            className="px-2 py-2 text-[13px] font-semibold text-blue-600 hover:text-blue-700"
          >
            + More
          </a>
        </div>
      </div>
    </section>
  );
}
