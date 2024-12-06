import { login, signup } from "@/lib/actions";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign up",
};

export default function SignupPage() {
  return (
    <div className="mx-auto flex h-full flex-col items-center justify-center">
      <h2 className="mb-4 text-2xl font-semibold text-accent-400">Sign Up</h2>

      <form className="flex flex-col gap-6 bg-primary-900 px-12 py-8 text-lg">
        <div className="space-y-2">
          <label htmlFor="fullName">Full name:</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="passwordConfirm">Repeat password:</label>
          <input
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
            required
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            formAction={signup}
            className="bg-accent-500 px-8 py-4 font-semibold text-primary-800 transition-all hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
          >
            Sign up
          </button>
        </div>
      </form>

      <p className="mt-6 text-lg text-primary-200">
        Already have an account?{" "}
        <Link href="/login" className="font-medium">
          Log in
        </Link>
      </p>
    </div>
  );
}
