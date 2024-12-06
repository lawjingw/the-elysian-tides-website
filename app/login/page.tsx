import { login, signup } from "@/lib/actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

const DEFAULT_EMAIL = "user@example.com";
const DEFAULT_PASSWORD = "guest!23456";

export default function LoginPage() {
  return (
    <div className="mx-auto flex h-full flex-col items-center justify-center">
      <form className="max-auto flex flex-col gap-5 bg-primary-900 px-16 py-10 text-lg">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          defaultValue={DEFAULT_EMAIL}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          defaultValue={DEFAULT_PASSWORD}
          required
        />
        <div className="space-x-8">
          <button
            formAction={login}
            className="bg-accent-500 px-8 py-4 font-semibold text-primary-800 transition-all hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
          >
            Log in
          </button>
          <button
            formAction={signup}
            className="bg-accent-500 px-8 py-4 font-semibold text-primary-800 transition-all hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
