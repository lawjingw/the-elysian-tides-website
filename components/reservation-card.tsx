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
  const {
    id,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    created_at: createdAt,
    rooms,
  } = booking;

  return (
    <div className="group grid grid-cols-[300px,1fr] overflow-hidden border border-zinc-200 bg-white transition-all hover:border-zinc-300">
      <div className="relative my-8 ml-8 h-[200px] overflow-hidden">
        <Image
          src={rooms!.images![0] || ""}
          alt={rooms!.name || ""}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col justify-between p-8">
        <div className="space-y-4">
          <div className="flex items-baseline justify-between">
            <h3 className="font-serif text-2xl font-light tracking-wide">
              {rooms?.name}
            </h3>
            {isPast(new Date(startDate)) ? (
              <span className="text-sm uppercase tracking-wider text-zinc-500">
                Past stay
              </span>
            ) : (
              <span className="text-sm uppercase tracking-wider text-emerald-600">
                Upcoming
              </span>
            )}
          </div>

          <div className="space-y-1 text-zinc-600">
            <p className="text-lg">
              {format(new Date(startDate), "MMMM d, yyyy")} &mdash;{" "}
              {format(new Date(endDate), "MMMM d, yyyy")}
            </p>
            <p>
              {numNights} {numNights === 1 ? "night" : "nights"} &middot;{" "}
              {numGuests} {numGuests === 1 ? "guest" : "guests"}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-zinc-100 pt-6">
          <div>
            <p className="mb-1 text-sm uppercase tracking-wider text-zinc-500">
              Total price
            </p>
            <p className="font-serif text-2xl">£{totalPrice}</p>
          </div>

          {!isPast(new Date(startDate)) && (
            <div className="flex gap-4">
              <Link
                href={`/account/reservations/edit/${id}`}
                className="inline-flex items-center gap-2 border-b border-zinc-900 pb-0.5 text-sm uppercase tracking-wider hover:text-zinc-600"
              >
                <PencilIcon className="h-4 w-4" />
                Modify
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
