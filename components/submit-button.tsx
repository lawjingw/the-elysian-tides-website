"use client";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

type SubmitButtonProps = {
  pendingText: string;
  children: React.ReactNode;
};

export function SubmitButton({ pendingText, children }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      size="sm"
      className="duration-300 disabled:cursor-not-allowed disabled:bg-zinc-500 disabled:text-zinc-300"
    >
      {pending ? pendingText : children}
    </Button>
  );
}
