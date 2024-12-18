"use client";
import { useFormStatus } from "react-dom";

type SubmitButtonProps = {
  pendingText: string;
  children: React.ReactNode;
};

export function SubmitButton({ pendingText, children }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="bg-accent-500 px-8 py-4 font-semibold text-primary-800 transition-all hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      {pending ? pendingText : children}
    </button>
  );
}
