import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import { PencilIcon } from "lucide-react";
import DeleteReservation from "./delete-reservation";
import Image from "next/image";
import { Booking, Room } from "@/lib/type";
import Link from "next/link";

export const formatDistanceFromNow = (dateStr: string) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

type ReservationCardProps = {
  booking: Booking & { rooms: Pick<Room, "name" | "images"> | null };
};

function ReservationCard({ booking }: ReservationCardProps) {
  const { id, startDate, endDate, numNights, totalPrice, numGuests, rooms } =
    booking;

  return (
    <div className="group grid grid-cols-1 overflow-hidden border border-zinc-200 bg-white transition-all hover:border-zinc-300 md:grid-cols-[240px,1fr] lg:grid-cols-[300px,1fr]">
      <div className="relative h-[200px] md:my-6 md:ml-6 lg:my-8 lg:ml-8">
        <Image
          src={rooms!.images![0] || ""}
          alt={rooms!.name || ""}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col justify-between p-4 md:p-6 lg:p-8">
        <div className="space-y-3 md:space-y-4">
          <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
            <h3 className="font-serif text-xl font-light tracking-wide md:text-2xl">
              {rooms?.name}
            </h3>
            {isPast(new Date(startDate)) ? (
              <span className="text-xs uppercase tracking-wider text-zinc-500 md:text-sm">
                Past stay
              </span>
            ) : (
              <span className="text-xs uppercase tracking-wider text-emerald-600 md:text-sm">
                Upcoming
              </span>
            )}
          </div>

          <div className="space-y-1 text-zinc-600">
            <p className="text-base md:text-lg">
              {format(new Date(startDate), "MMMM d, yyyy")} &mdash;{" "}
              {format(new Date(endDate), "MMMM d, yyyy")}
            </p>
            <p className="text-sm md:text-base">
              {numNights} {numNights === 1 ? "night" : "nights"} &middot;{" "}
              {numGuests} {numGuests === 1 ? "guest" : "guests"}
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-4 border-t border-zinc-100 pt-4 md:mt-0 md:flex-row md:items-center md:justify-between md:pt-6">
          <div>
            <p className="mb-1 text-xs uppercase tracking-wider text-zinc-500 md:text-sm">
              Total price
            </p>
            <p className="font-serif text-xl md:text-2xl">£{totalPrice}</p>
          </div>

          {!isPast(new Date(startDate)) && (
            <div className="flex items-center gap-4">
              <Link
                href={`/account/reservations/edit/${id}`}
                className="inline-flex items-center gap-2 text-sm uppercase tracking-wider hover:text-zinc-600"
              >
                <PencilIcon className="h-5 w-5" />
                <span className="border-b border-zinc-900 pb-0.5 md:hidden min-[950px]:block">
                  Modify
                </span>
              </Link>
              <DeleteReservation bookingId={id} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReservationCard;
