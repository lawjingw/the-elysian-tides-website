import SignupForm from "@/components/signup-form";

export default function SignupPage() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[600px] flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <h2 className="mb-4 text-center font-serif text-[2rem] tracking-[-0.02em] sm:text-[2.5rem]">
        ADD YOUR ACCOUNT
      </h2>
      <p className="mb-12 text-center text-base text-zinc-600 sm:text-lg">
        Please provide your details and we&apos;ll create your account.
      </p>
      <SignupForm />
    </div>
  );
}
