import { login } from "@/lib/actions";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login",
};

const DEFAULT_EMAIL = "guest@example.com";
const DEFAULT_PASSWORD = "guest!23456";

export default function LoginPage() {
  return (
    <div className="mx-auto flex h-full flex-col items-center justify-center">
      <h2 className="mb-4 text-2xl font-semibold text-accent-400">Log In</h2>

      <form className="flex flex-col gap-6 bg-primary-900 px-12 py-8 text-lg">
        <div className="space-y-2">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            defaultValue={DEFAULT_EMAIL}
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
            defaultValue={DEFAULT_PASSWORD}
            className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
            required
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            formAction={login}
            className="bg-accent-500 px-8 py-4 font-semibold text-primary-800 transition-all hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
          >
            Log in
          </button>
        </div>
      </form>

      <p className="mt-6 text-lg text-primary-200">
        No account yet?{" "}
        <Link href="/signup" className="font-medium">
          Sign up
        </Link>
      </p>
    </div>
  );
}
