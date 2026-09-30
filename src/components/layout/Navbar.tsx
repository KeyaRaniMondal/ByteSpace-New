"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/constants";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="relative grid h-9 w-9 place-items-center">
        <img src="/images/logo.png" alt="logo" />
      </span>
      <span className="text-xl font-extrabold tracking-tight text-white">
        ByteSpace
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center justify-between px-5 md:px-8">
        <Logo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 text-[14px] font-medium text-white/90 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`transition hover:text-white ${
                  link.active ? "text-white" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-5 text-[14px] font-medium text-white md:flex">
          <Link href="/login" className="text-white/90 hover:text-white">
            Sign In
          </Link>
          <Link href="/signup" className="text-white/90 hover:text-white">
            Join Us
          </Link>
          <button
            aria-label="Cart"
            className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-white/10"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 7h12l1.5 13.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5L6 7Z" />
              <path d="M9 10V6a3 3 0 0 1 6 0v4" />
            </svg>
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-white hover:bg-white/10 md:hidden"
        >
          {open ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mx-4 rounded-2xl bg-white p-4 shadow-xl md:hidden">
          <ul className="flex flex-col gap-1 text-[15px] font-medium text-slate-800">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 hover:bg-slate-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex gap-2 border-t border-slate-100 pt-3">
            <Link
              href="/login"
              className="flex-1 rounded-full border border-slate-200 px-4 py-2.5 text-center text-sm font-semibold"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="flex-1 rounded-full bg-[#0F38FF] px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
