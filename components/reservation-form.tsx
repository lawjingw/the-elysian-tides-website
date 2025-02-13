"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import FormSelect from "./form-select";
import { Textarea } from "./ui/textarea";
import { SubmitButton } from "./submit-button";
import { useForm } from "react-hook-form";
import { Room } from "@/lib/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { reservationFormSchema, TReservationForm } from "@/lib/schemas";
import { useReservationContext } from "@/hooks/use-reservation-context";

type ReservationFormProps = {
  booking?: {
    numGuests: number;
    observations: string | null;
    rooms: Pick<Room, "maxCapacity"> | null;
  };
  handleAction: (formData: FormData) => void;
  submitButtonText: string;
  submitButtonPendingText: string;
  maxCapacity: number;
};

function ReservationForm({
  booking,
  maxCapacity,
  submitButtonText,
  submitButtonPendingText,
  handleAction,
}: ReservationFormProps) {
  const { selectedRange } = useReservationContext();
  const { numGuests, observations } = booking || {};
  const guestOptions = Array.from({ length: maxCapacity }, (_, i) => i + 1).map(
    (x) => ({
      value: String(x),
      label: `${x} ${x === 1 ? "guest" : "guests"}`,
    }),
  );

  const form = useForm<TReservationForm>({
    resolver: zodResolver(reservationFormSchema),
    defaultValues: {
      numGuests: numGuests ? String(numGuests) : "",
      observations: observations || "",
    },
  });

  return (
    <Form {...form}>
      <form
        action={async (formData) => {
          const result = await form.trigger();
          if (!result) return;
          handleAction(formData);
        }}
        className="flex grow flex-col justify-end gap-6 px-2 py-8 text-lg sm:px-12"
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
                  className="bg-zinc-100 placeholder:italic"
                  placeholder="Any special requests or requirements?"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-end">
          {!(selectedRange && selectedRange.from && selectedRange.to) &&
          !numGuests ? (
            <p className="h-9 py-4 text-zinc-500">Start by selecting dates</p>
          ) : (
            <SubmitButton pendingText={submitButtonPendingText}>
              {submitButtonText}
            </SubmitButton>
          )}
        </div>
      </form>
    </Form>
  );
}

export default ReservationForm;
