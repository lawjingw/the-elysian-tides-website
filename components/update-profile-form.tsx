"use client";

import { updateProfileFormSchema } from "@/lib/schemas";
import { countries, Guest, TUpdateProfileForm } from "@/lib/type";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { getCountries } from "@/lib/utils";
import { updateProfile } from "@/lib/actions";
import FormSelect from "./form-select";
import { SubmitButton } from "./submit-button";

type UpdateProfileFormProps = {
  guest: Guest;
};

function UpdateProfileForm({ guest }: UpdateProfileFormProps) {
  const { id, fullName, email, countryFlag, nationality, nationalID } = guest;
  const [countries, setCountries] = useState<countries>([]);
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

  useEffect(() => {
    const fetchCountries = async () => {
      const countries = await getCountries();
      setCountries(countries);
    };
    fetchCountries();
  }, []);

  const handleAction = async (formData: FormData) => {
    const result = await form.trigger();
    if (!result) return;

    await updateProfile(formData);
  };

  return (
    <Form {...form}>
      <form
        action={handleAction}
        className="flex flex-col gap-6 bg-primary-900 px-12 py-8 text-lg"
      >
        <div className="space-y-2">
          <label>Full name</label>
          <Input
            value={fullName}
            readOnly
            disabled
            className="bg-primary-200 px-5 py-3 text-primary-800"
          />
        </div>

        <div className="space-y-2">
          <label>Email address</label>
          <Input
            value={email}
            disabled
            readOnly
            className="bg-primary-200 px-5 py-3 text-primary-800"
          />
        </div>

        <FormField
          control={form.control}
          name="nationality"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel className="text-base">Where are you from?</FormLabel>
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
              <FormLabel className="text-base">National ID number</FormLabel>
              <FormControl>
                <Input
                  className="bg-primary-200 px-5 py-3 text-primary-800"
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
        <div className="flex items-center justify-end gap-6">
          <SubmitButton pendingText="Updating...">Update profile</SubmitButton>
        </div>
      </form>
    </Form>
  );
}

export default UpdateProfileForm;
