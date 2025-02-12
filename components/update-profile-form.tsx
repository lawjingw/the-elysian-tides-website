"use client";

import { TUpdateProfileForm, updateProfileFormSchema } from "@/lib/schemas";
import { country, Guest } from "@/lib/type";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { updateProfile } from "@/lib/actions";
import FormSelect from "./form-select";
import { SubmitButton } from "./submit-button";

type UpdateProfileFormProps = {
  guest: Guest;
  countries: country[];
};

function UpdateProfileForm({ guest, countries }: UpdateProfileFormProps) {
  const { id, fullName, email, countryFlag, nationality, nationalID } = guest;
  const countryOptions = countries.map((country) => ({
    value: `${country.name}%${country.flag}`,
    label: country.name,
  }));

  const form = useForm<TUpdateProfileForm>({
    resolver: zodResolver(updateProfileFormSchema),
    defaultValues: {
      nationality:
        nationality && countryFlag
          ? `${nationality}%${countryFlag}`
          : undefined,
      nationalID: nationalID || "",
      guestID: id,
    },
  });

  const handleAction = async (formData: FormData) => {
    const result = await form.trigger();
    if (!result) return;
    await updateProfile(formData);
  };

  return (
    <Form {...form}>
      <form action={handleAction} className="w-full space-y-6 sm:space-y-8">
        <div className="space-y-6 sm:space-y-8">
          <div>
            <label className="text-xs uppercase tracking-wider text-zinc-600 sm:text-sm">
              Full name*
            </label>
            <input
              value={fullName}
              readOnly
              disabled
              className="mt-2 w-full border-b border-zinc-300 bg-transparent pb-2 text-base tracking-wide text-zinc-400 focus:border-zinc-900 focus:outline-none sm:text-lg"
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-wider text-zinc-600 sm:text-sm">
              Email address*
            </label>
            <input
              value={email}
              disabled
              readOnly
              className="mt-2 w-full border-b border-zinc-300 bg-transparent pb-2 text-base tracking-wide text-zinc-400 focus:border-zinc-900 focus:outline-none sm:text-lg"
            />
          </div>

          <FormField
            control={form.control}
            name="nationality"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel className="text-xs uppercase tracking-wider text-zinc-600 sm:text-sm">
                    Where are you from?*
                  </FormLabel>
                  {countryFlag && (
                    <Image
                      src={countryFlag}
                      alt="Country flag"
                      width={40}
                      height={20}
                      className="h-4 rounded-sm sm:h-5"
                    />
                  )}
                </div>
                <FormControl>
                  <FormSelect
                    field={field}
                    placeholder="Select country..."
                    options={countryOptions}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="nationalID"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs uppercase tracking-wider text-zinc-600 sm:text-sm">
                  National ID number*
                </FormLabel>
                <FormControl>
                  <input
                    className="mt-2 w-full border-b border-zinc-300 pb-2 text-base tracking-wide focus:border-zinc-900 focus:outline-none sm:text-lg"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <input
          type="number"
          value={id}
          hidden
          readOnly
          {...form.register("guestID")}
        />

        <div className="flex flex-col-reverse gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between sm:pt-8">
          <p className="text-center text-xs text-zinc-500 sm:text-left sm:text-sm">
            * Required fields
          </p>
          <SubmitButton pendingText="Updating...">Update profile</SubmitButton>
        </div>
      </form>
    </Form>
  );
}

export default UpdateProfileForm;
