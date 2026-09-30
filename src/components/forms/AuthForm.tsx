"use client";

import Link from "next/link";
import { useState } from "react";

type Props = {
  mode: "Create an account" | "login";
};

export default function AuthForm({ mode }: Props) {
  const isSignup = mode === "signup";
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputCls =
    "h-[48px] w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-blue-500";
  const labelCls = "mb-1.5 block text-[12px] font-medium text-slate-700";

  return (
    <div className="w-full max-w-[440px] rounded-[24px] bg-white p-8 shadow-2xl md:p-10">
      <p className="text-[13px] font-medium text-blue-600">
        {isSignup ? "Create an Account" : "Sign In"}
      </p>
      <h1 className="mt-1 text-[32px] font-extrabold leading-[1.15] tracking-tight text-slate-950 md:text-[36px]">
        {isSignup ? (
          <>
            Welcome to <span className="block">ByteSpace</span>
          </>
        ) : (
          "Welcome Back"
        )}
      </h1>

      <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-5">
        {isSignup && (
          <div>
            <label htmlFor="fullName" className={labelCls}>
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Jamie Davis"
              autoComplete="name"
              className={inputCls}
            />
          </div>
        )}
        <div>
          <label htmlFor="email" className={labelCls}>
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="designer@example.com"
            autoComplete="email"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="password" className={labelCls}>
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="**********"
            autoComplete={isSignup ? "new-password" : "current-password"}
            className={inputCls}
          />
        </div>

        <div className="flex justify-end pt-1">
          <button
            type="submit"
            className="rounded-full bg-[#D4F800] px-8 py-2.5 text-sm font-semibold text-slate-900 transition hover:brightness-95 active:scale-95"
          >
            {isSignup ? "Continue" : "Sign In"}
          </button>
        </div>
      </form>

      {!isSignup && (
        <>
          <div className="mt-8 flex items-center gap-4">
            <span aria-hidden className="h-px flex-1 bg-slate-200" />
            <span className="text-[12px] text-slate-400">or</span>
            <span aria-hidden className="h-px flex-1 bg-slate-200" />
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Sign in with Facebook"
              className="grid h-14 w-14 place-items-center rounded-2xl border border-slate-200 bg-white transition hover:bg-slate-50 active:scale-95"
            >
              <img src="images/facebook.png" alt="Facebook" />
            </button>
            <button
              type="button"
              aria-label="Sign in with Google"
              className="grid h-14 w-14 place-items-center rounded-2xl border border-slate-200 bg-white transition hover:bg-slate-50 active:scale-95"
            >
              <img src="images/google.png" alt="Google" />
            </button>
          </div>
        </>
      )}

      <p className="mt-16 text-center text-[12px] text-slate-500">
        {isSignup ? (
          <>
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-blue-600 hover:underline"
            >
              Login
            </Link>
          </>
        ) : (
          <>
            New user?{" "}
            <Link
              href="/signup"
              className="font-medium text-blue-600 hover:underline"
            >
              Create an account
            </Link>
          </>
        )}
      </p>
    </div>
  );
}
