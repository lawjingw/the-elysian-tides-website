"use client";

import { updateProfileFormSchema } from "@/lib/schemas";
import { countries, Guest, TUpdateProfileForm } from "@/lib/type";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import React, { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { getCountries } from "@/lib/utils";
import { updateProfile } from "@/lib/actions";

type UpdateProfileFormProps = {
  guest: Guest;
};

function UpdateProfileForm({ guest }: UpdateProfileFormProps) {
  const { id, fullName, email, countryFlag, nationality, nationalID } = guest;
  const [countries, setCountries] = useState<countries>([]);

  const form = useForm<TUpdateProfileForm>({
    resolver: zodResolver(updateProfileFormSchema),
    defaultValues: {
      nationality:
        nationality && countryFlag
          ? `${nationality}%${countryFlag}`
          : undefined,
      nationalID: nationalID ?? undefined,
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

  return (
    <Form {...form}>
      <form
        action={updateProfile}
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
                    className="right-5 top-1/2 h-5 -translate-y-1/2 transform rounded-sm"
                  />
                )}
              </div>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-primary-200 px-5 py-3 text-primary-800">
                    <SelectValue placeholder="Select country..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem
                      key={country.name}
                      value={`${country.name}%${country.flag}`}
                    >
                      {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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

        <input type="text" name="guestID" value={id} hidden readOnly />
        <div className="flex items-center justify-end gap-6">
          <button className="bg-accent-500 px-8 py-4 font-semibold text-primary-800 transition-all hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
            Update profile
          </button>
        </div>
      </form>
    </Form>
  );
}

export default UpdateProfileForm;
