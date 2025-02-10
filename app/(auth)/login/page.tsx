"use client";

import { Button } from "@/components/ui/button";
import { login } from "@/lib/actions";
import { loginFormSchema, TLoginForm } from "@/lib/schemas";
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

const DEFAULT_EMAIL = "guest@example.com";
const DEFAULT_PASSWORD = "Guest!23456";

export default function LoginPage() {
  const form = useForm<TLoginForm>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: DEFAULT_EMAIL,
      password: DEFAULT_PASSWORD,
      remember: false,
    },
  });

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[600px] flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <h2 className="mb-4 text-center font-serif text-[2rem] tracking-[-0.02em] sm:text-[2.5rem]">
        FIND YOUR RESERVATION
      </h2>
      <p className="mb-12 text-center text-base text-zinc-600 sm:text-lg">
        Please provide your login details to access your account.
      </p>

      <Form {...form}>
        <form
          action={async (formData) => {
            const result = await form.trigger();
            if (!result) return;
            await login(formData);
          }}
          className="w-full space-y-6 sm:space-y-8"
        >
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
            name="remember"
            render={({ field }) => (
              <FormItem className="mt-12 flex items-center gap-3">
                <FormControl>
                  <input
                    type="checkbox"
                    checked={field.value}
                    onChange={field.onChange}
                    className="h-4 w-4 cursor-pointer accent-zinc-900"
                  />
                </FormControl>
                <FormLabel className="text-sm leading-relaxed text-zinc-600">
                  Remember me on this device
                </FormLabel>
              </FormItem>
            )}
          />

          <div className="flex flex-col justify-between gap-4 pt-8">
            <SubmitButton pendingText="Submitting...">Next</SubmitButton>
          </div>
        </form>
      </Form>
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
