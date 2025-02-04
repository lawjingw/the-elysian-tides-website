"use client";

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
    <div className="flex max-w-[960px] border border-zinc-200">
      <RoomImageCarousel images={images} name={name} />
      <div className="flex flex-col justify-between px-8 py-6">
        <div>
          <h3 className="mb-3 font-serif text-2xl">{name}</h3>
          <div className="my-7 text-sm text-zinc-600">
            <div className="mb-2 flex items-center gap-3">
              <BedDouble className="h-5 w-5" />
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
          <p className="mb-2 flex items-baseline justify-center gap-3">
            {discount && discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="font-semibold text-primary-600 line-through">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">£{regularPrice}</span>
            )}
            <span className="text-zinc-400">/ night</span>
          </p>
          <Link href={`/rooms/${id}`}>
            <Button>Details & reservation</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
