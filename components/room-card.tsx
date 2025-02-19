import { Users, BedDouble, Scaling, Waves } from "lucide-react";
import { Room } from "../lib/type";
import Link from "next/link";
import { Button } from "./ui/button";
import RoomImageCarousel from "./room-image-carousel";

type RoomCardProps = {
  room: Room;
};

function RoomCard({ room }: RoomCardProps) {
  const {
    id,
    name,
    maxCapacity,
    bedTypes,
    roomSize,
    privatePool,
    regularPrice,
    discount,
    images,
  } = room;

  return (
    <div className="flex h-full flex-col overflow-hidden border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="max-h-[300px] overflow-hidden">
        {images && images.length > 0 && (
          <RoomImageCarousel images={images} name={name} />
        )}
      </div>
      <div className="flex grow flex-col justify-between p-6">
        <div>
          <h3 className="mb-3 font-serif text-2xl font-light tracking-wide">
            {name}
          </h3>
          <div className="my-7 space-y-3 text-sm text-zinc-600">
            <div className="mb-2 flex items-center gap-3">
              <div>
                <BedDouble className="h-4 w-4" />
              </div>
              <p className="leading-4">{bedTypes}</p>
            </div>
            <div className="mb-2 flex items-center gap-3">
              <Scaling className="h-4 w-4" />
              <p>
                {roomSize} m<sup>2</sup>
              </p>
            </div>
            <div className="mb-2 flex items-center gap-3">
              <Users className="h-4 w-4" />
              <p>
                For up to <span className="font-bold">{maxCapacity}</span>{" "}
                guests
              </p>
            </div>
            {privatePool && (
              <div className="flex items-center gap-3">
                <Waves className="h-4 w-4" />
                <p>Private pool </p>
              </div>
            )}
          </div>
        </div>
        <div className="text-center">
          <p className="mb-4 flex items-baseline justify-center gap-3">
            {discount && discount > 0 ? (
              <>
                <span className="font-serif text-3xl font-light">
                  €{regularPrice - discount}
                </span>
                <span className="font-serif text-zinc-400 line-through">
                  €{regularPrice}
                </span>
              </>
            ) : (
              <span className="font-serif text-3xl font-light">
                €{regularPrice}
              </span>
            )}
            <span className="text-zinc-400">per night</span>
          </p>
          <Link href={`/rooms/${id}`} className="block">
            <Button className="w-full duration-300">View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
