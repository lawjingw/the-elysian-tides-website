"use client";

import { Button } from "@/components/ui/button";
import { signup } from "@/lib/actions";
import { signupFormSchema, TSignupForm } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SubmitButton } from "@/components/submit-button";

function SignupForm() {
  const form = useForm<TSignupForm>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      terms: false,
    },
  });

  return (
    <Form {...form}>
      <form
        action={async (formData) => {
          const result = await form.trigger();
          if (!result) return;
          await signup(formData);
        }}
        className="w-full space-y-6 sm:space-y-8"
      >
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm uppercase tracking-wider text-zinc-600">
                Full name*
              </FormLabel>
              <FormControl>
                <input
                  {...field}
                  type="text"
                  className="mt-1 w-full border-b border-zinc-300 pb-2 text-lg tracking-wide focus:border-zinc-900 focus:outline-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm uppercase tracking-wider text-zinc-600">
                Email address*
              </FormLabel>
              <FormControl>
                <input
                  {...field}
                  type="email"
                  className="mt-1 w-full border-b border-zinc-300 pb-2 text-lg tracking-wide focus:border-zinc-900 focus:outline-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm uppercase tracking-wider text-zinc-600">
                Password*
              </FormLabel>
              <FormControl>
                <input
                  {...field}
                  type="password"
                  className="mt-1 w-full border-b border-zinc-300 pb-2 text-lg tracking-wide focus:border-zinc-900 focus:outline-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="passwordConfirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm uppercase tracking-wider text-zinc-600">
                Confirm password*
              </FormLabel>
              <FormControl>
                <input
                  {...field}
                  type="password"
                  className="mt-1 w-full border-b border-zinc-300 pb-2 text-lg tracking-wide focus:border-zinc-900 focus:outline-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="mt-12 flex items-start gap-3">
              <FormControl>
                <input
                  type="checkbox"
                  checked={field.value}
                  onChange={field.onChange}
                  className="mt-1.5 h-4 w-4 cursor-pointer accent-zinc-900"
                />
              </FormControl>
              <FormLabel className="text-sm leading-relaxed text-zinc-600">
                I confirm that I am authorized to create this account and I
                agree to the terms and conditions.
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col justify-between gap-4 pt-8 sm:flex-row">
          <Link href="/login" className="w-full">
            <Button
              type="button"
              variant="outline"
              className="w-full px-4 text-sm sm:text-base"
            >
              Back
            </Button>
          </Link>
          <SubmitButton pendingText="Registering...">Next</SubmitButton>
        </div>
      </form>
    </Form>
  );
}

export default SignupForm;
