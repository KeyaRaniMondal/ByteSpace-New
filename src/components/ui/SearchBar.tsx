"use client";

import { useState } from "react";

type Props = {
  placeholder?: string;
  onSearch?: (value: string) => void;
};

export default function SearchBar({
  placeholder = "Course, topic, creator",
  onSearch,
}: Props) {
  const [value, setValue] = useState("");

  return (
    <form
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch?.(value);
      }}
      className="flex w-full max-w-[520px] items-center gap-2"
    >
      <label className="flex h-[48px] min-w-0 flex-1 items-center gap-2 rounded-full bg-white px-4 shadow-lg sm:px-5">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#64748b"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
        />
      </label>
      <button
        type="submit"
        className="h-[48px] shrink-0 rounded-full bg-[#D4F800] px-5 text-sm font-semibold text-slate-900 transition hover:brightness-95 active:scale-95 sm:px-7"
      >
        Search
      </button>
    </form>
  );
}
