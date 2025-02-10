import Link from "next/link";
import LoginForm from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[600px] flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <h2 className="mb-4 text-center font-serif text-[2rem] tracking-[-0.02em] sm:text-[2.5rem]">
        FIND YOUR RESERVATION
      </h2>
      <p className="mb-12 text-center text-base text-zinc-600 sm:text-lg">
        Please provide your login details to access your account.
      </p>

      <LoginForm />

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
    </div>
  );
}
