"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SubmitButton } from "@/components/submit-button";
import { login } from "@/lib/actions";
import { loginFormSchema, TLoginForm } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const DEFAULT_EMAIL = "guest@example.com";
const DEFAULT_PASSWORD = "Guest!23456";

function LoginForm() {
  const form = useForm<TLoginForm>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: DEFAULT_EMAIL,
      password: DEFAULT_PASSWORD,
      remember: false,
    },
  });

  return (
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
  );
}

export default LoginForm;
