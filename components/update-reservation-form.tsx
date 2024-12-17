"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Room, TUpdateReservationForm } from "@/lib/type";
import { updateReservationFormSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import FormSelect from "./form-select";

type UpdateReservationFormProps = {
  booking: {
    id: number;
    numGuests: number;
    observations: string | null;
    rooms: Pick<Room, "maxCapacity"> | null;
  };
};

function UpdateReservationForm({ booking }: UpdateReservationFormProps) {
  const { numGuests, observations, rooms } = booking;
  const maxCapacity = rooms?.maxCapacity || 1;
  const guestOptions = Array.from({ length: maxCapacity }, (_, i) => i + 1).map(
    (x) => ({
      value: String(x),
      label: `${x} ${x === 1 ? "guest" : "guests"}`,
    }),
  );

  const form = useForm<TUpdateReservationForm>({
    resolver: zodResolver(updateReservationFormSchema),
    defaultValues: {
      numGuests: String(numGuests),
      observations: observations || "",
    },
  });

  return (
    <Form {...form}>
      <form className="flex flex-col gap-6 bg-primary-900 px-12 py-8 text-lg">
        <FormField
          control={form.control}
          name="numGuests"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">How many guests?</FormLabel>
              <FormControl>
                <FormSelect
                  field={field}
                  placeholder="Select number of guests..."
                  options={guestOptions}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            defaultValue={observations || ""}
            className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
          />
        </div>

        <div className="flex items-center justify-end gap-6">
          <button className="bg-accent-500 px-8 py-4 font-semibold text-primary-800 transition-all hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
            Update reservation
          </button>
        </div>
      </form>
    </Form>
  );
}

export default UpdateReservationForm;
