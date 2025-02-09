import { Button } from "@/components/ui/button";
import { signup } from "@/lib/actions";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign up",
};

export default function SignupPage() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[600px] flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <h2 className="mb-4 text-center font-serif text-[2rem] tracking-[-0.02em] sm:text-[2.5rem]">
        ADD YOUR ACCOUNT
      </h2>
      <p className="mb-12 text-center text-base text-zinc-600 sm:text-lg">
        Please provide your details and we&apos;ll create your account.
      </p>

      <form className="w-full space-y-6 sm:space-y-8">
        <div>
          <label
            htmlFor="fullName"
            className="text-sm uppercase tracking-wider text-zinc-600"
          >
            Full name*
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            className="mt-1 w-full border-b border-zinc-300 pb-2 text-lg tracking-wide focus:border-zinc-900 focus:outline-none"
            required
          />
        </div>

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
            className="mt-1 w-full border-b border-zinc-300 pb-2 text-lg tracking-wide focus:border-zinc-900 focus:outline-none"
            required
          />
        </div>

        <div>
          <label
            htmlFor="passwordConfirm"
            className="text-sm uppercase tracking-wider text-zinc-600"
          >
            Confirm password*
          </label>
          <input
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            className="mt-1 w-full border-b border-zinc-300 pb-2 text-lg tracking-wide focus:border-zinc-900 focus:outline-none"
            required
          />
        </div>

        <div className="mt-12 flex items-start gap-3">
          <input
            type="checkbox"
            id="terms"
            className="mt-1.5 h-4 w-4 cursor-pointer accent-zinc-900"
            required
          />
          <label
            htmlFor="terms"
            className="text-sm leading-relaxed text-zinc-600"
          >
            I confirm that I am authorized to create this account and I agree to
            the terms and conditions.
          </label>
        </div>

        <div className="flex flex-col justify-between gap-4 pt-8 sm:flex-row">
          <Link href="/login" className="w-full">
            <Button
              variant="outline"
              className="w-full px-4 py-6 text-sm sm:text-base"
            >
              Back
            </Button>
          </Link>
          <Button
            formAction={signup}
            className="w-full px-4 py-6 text-sm sm:text-base"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}
