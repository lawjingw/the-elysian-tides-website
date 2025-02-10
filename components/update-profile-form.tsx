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
      <form action={handleAction} className="w-full space-y-8">
        <div>
          <label className="text-sm uppercase tracking-wider text-zinc-600">
            Full name*
          </label>
          <input
            value={fullName}
            readOnly
            disabled
            className="mt-1 w-full border-b border-zinc-300 bg-transparent pb-2 text-lg tracking-wide text-zinc-400 focus:border-zinc-900 focus:outline-none"
          />
        </div>

        <div>
          <label className="text-sm uppercase tracking-wider text-zinc-600">
            Email address*
          </label>
          <input
            value={email}
            disabled
            readOnly
            className="mt-1 w-full border-b border-zinc-300 bg-transparent pb-2 text-lg tracking-wide text-zinc-400 focus:border-zinc-900 focus:outline-none"
          />
        </div>

        <FormField
          control={form.control}
          name="nationality"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel className="text-sm uppercase tracking-wider text-zinc-600">
                  Where are you from?*
                </FormLabel>
                {countryFlag && (
                  <Image
                    src={countryFlag}
                    alt="Country flag"
                    width={40}
                    height={20}
                    className="h-5 rounded-sm"
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
              <FormLabel className="text-sm uppercase tracking-wider text-zinc-600">
                National ID number*
              </FormLabel>
              <FormControl>
                <input
                  className="mt-1 w-full border-b border-zinc-300 pb-2 text-lg tracking-wide focus:border-zinc-900 focus:outline-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <input
          type="number"
          value={id}
          hidden
          readOnly
          {...form.register("guestID")}
        />

        <div className="mt-12 flex items-center justify-between pt-8">
          <p className="pr-6 text-sm text-zinc-500">* Required fields</p>
          <div>
            <SubmitButton pendingText="Updating...">
              Update profile
            </SubmitButton>
          </div>
        </div>
      </form>
    </Form>
  );
}

export default UpdateProfileForm;
