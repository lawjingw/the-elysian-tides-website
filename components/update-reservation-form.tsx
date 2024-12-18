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
import { Textarea } from "./ui/textarea";
import { updateReservation } from "@/lib/actions";
import { SubmitButton } from "./submit-button";

type UpdateReservationFormProps = {
  booking: {
    id: number;
    numGuests: number;
    observations: string | null;
    rooms: Pick<Room, "maxCapacity"> | null;
  };
};

function UpdateReservationForm({ booking }: UpdateReservationFormProps) {
  const { id, numGuests, observations, rooms } = booking;
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

  const handleAction = async (formData: FormData) => {
    const result = await form.trigger();
    if (!result) return;

    await updateReservation(formData);
  };

  return (
    <Form {...form}>
      <form
        action={handleAction}
        className="flex flex-col gap-6 bg-primary-900 px-12 py-8 text-lg"
      >
        <FormField
          control={form.control}
          name="numGuests"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How many guests?</FormLabel>
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

        <FormField
          control={form.control}
          name="observations"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Anything we should know about your stay?</FormLabel>
              <FormControl>
                <Textarea
                  className="bg-primary-200 text-primary-800"
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
          {...form.register("bookingId")}
        />

        <div className="flex items-center justify-end gap-6">
          <SubmitButton pendingText="Updating...">
            Update reservation
          </SubmitButton>
        </div>
      </form>
    </Form>
  );
}

export default UpdateReservationForm;
