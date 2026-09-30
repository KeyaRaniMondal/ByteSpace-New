"use client";

import Link from "next/link";
import { useState } from "react";
import { FOOTER_COLUMNS, FOOTER_LEGAL } from "@/lib/constants";

function FooterLogo() {
  return (
    <Link href="/" className="flex items-center gap-1.5">
      <span className="grid h-7 w-7 place-items-center rounded-md bg-[#D4F800] text-lg font-black leading-none text-slate-900">
        b
      </span>
      <span className="text-xl font-extrabold tracking-tight text-slate-950">
        ByteSpace
      </span>
    </Link>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-white text-slate-600">
      <div className="mx-auto max-w-6xl px-5 pb-8 pt-12 md:pt-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          {/* newsletter */}
          <div>
            <FooterLogo />
            <p className="mt-4 max-w-md text-[13px] leading-relaxed">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 flex max-w-md items-center gap-3"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="h-[46px] w-full rounded-full border border-slate-200 bg-white px-5 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-slate-400"
              />
              <button
                type="submit"
                className="h-[46px] shrink-0 rounded-full bg-[#D4F800] px-7 text-sm font-semibold text-slate-900 transition hover:brightness-95 active:scale-95"
              >
                Search
              </button>
            </form>
            <p className="mt-4 max-w-md text-[11px] leading-relaxed text-slate-500">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* link columns */}
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 sm:grid-cols-3"
          >
            {FOOTER_COLUMNS.map((col, i) => (
              <ul key={i} className="space-y-3.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-[13px] text-slate-600 transition hover:text-slate-950"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        {/* bottom bar */}
        <div className="mt-14 flex flex-col gap-3 border-t border-slate-200 pt-6 text-[12px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2023 ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {FOOTER_LEGAL.map((item) => (
              <li key={item}>
                <Link href="#" className="transition hover:text-slate-900">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
