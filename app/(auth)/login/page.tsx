import { Button } from "@/components/ui/button";
import { login } from "@/lib/actions";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login",
};

const DEFAULT_EMAIL = "guest@example.com";
const DEFAULT_PASSWORD = "Guest!23456";

export default function LoginPage() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[600px] flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <h2 className="mb-4 text-center font-serif text-[2rem] tracking-[-0.02em] sm:text-[2.5rem]">
        FIND YOUR RESERVATION
      </h2>
      <p className="mb-12 text-center text-base text-zinc-600 sm:text-lg">
        Please provide your login details to access your account.
      </p>

      <form className="w-full space-y-6 sm:space-y-8">
        <div>
          <label
            htmlFor="email"
            className="text-sm uppercase tracking-wider text-zinc-600"
          >
            Email address*
          </label>
          <input
            id="email"
            name="email"
            type="email"
            defaultValue={DEFAULT_EMAIL}
            className="mt-1 w-full border-b border-zinc-300 pb-2 text-lg tracking-wide focus:border-zinc-900 focus:outline-none"
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="text-sm uppercase tracking-wider text-zinc-600"
          >
            Password*
          </label>
          <input
            id="password"
            name="password"
            type="password"
            defaultValue={DEFAULT_PASSWORD}
            className="mt-1 w-full border-b border-zinc-300 pb-2 text-lg tracking-wide focus:border-zinc-900 focus:outline-none"
            required
          />
        </div>

        <div className="mt-12 flex items-start gap-3">
          <input
            type="checkbox"
            id="remember"
            className="mt-1.5 h-4 w-4 cursor-pointer accent-zinc-900"
          />
          <label
            htmlFor="remember"
            className="text-sm leading-relaxed text-zinc-600"
          >
            Remember me on this device
          </label>
        </div>

        <div className="flex flex-col justify-between gap-4 pt-8">
          <Button
            formAction={login}
            className="w-full px-4 py-6 text-sm sm:text-base"
          >
            Next
          </Button>
        </div>

        <div className="space-y-4 pt-4 sm:space-y-6">
          <div className="text-center">
            <Link
              href="#"
              className="text-xs text-zinc-600 hover:text-zinc-900 sm:text-sm"
            >
              Forgot your password?
            </Link>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-zinc-200" />
            </div>
            <div className="relative flex justify-center text-xs sm:text-sm">
              <span className="bg-white px-4 text-zinc-500">Or</span>
            </div>
          </div>

          <p className="text-center text-xs text-zinc-600 sm:text-sm">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-zinc-900 hover:underline"
            >
              Register now
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
