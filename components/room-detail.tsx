import { Room } from "@/lib/type";
import { BedDouble, Binoculars, Scaling, Users, Waves } from "lucide-react";
import Image from "next/image";

function RoomDetail({ room }: { room: Room }) {
  const {
    name,
    maxCapacity,
    bedTypes,
    roomSize,
    privatePool,
    images,
    description,
  } = room;

  return (
    <div className="mb-16 space-y-8 sm:mb-20 lg:mb-28">
      <div className="relative w-full">
        {images && (
          <Image
            className="w-full brightness-75"
            src={images[0]}
            width={1100}
            height={400}
            alt={name}
            priority
          />
        )}
        <h3 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-serif text-3xl font-semibold text-white sm:text-4xl md:text-5xl lg:text-6xl">
          {name}
        </h3>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <p className="text-lg sm:text-xl lg:text-2xl">{description}</p>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 font-bold">
              <Users className="h-5 w-5" />
              <p className="text-sm sm:text-base">OCCUPANCY</p>
            </div>
            <p className="text-sm sm:text-base">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 font-bold">
              <BedDouble className="h-5 w-5" />
              <p className="text-sm sm:text-base">BED TYPE</p>
            </div>
            <p className="text-sm leading-4 sm:text-base">{bedTypes}</p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 font-bold">
              <Scaling className="h-5 w-5" />
              <p className="text-sm sm:text-base">ROOM SIZE</p>
            </div>
            <p className="text-sm sm:text-base">
              {roomSize} m<sup>2</sup>
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 font-bold">
              <Binoculars className="h-5 w-5" />
              <p className="text-sm sm:text-base">ROOM VIEW</p>
            </div>
            <p className="text-sm sm:text-base">
              The Mediterranean Sea and the Verdura golf courses
            </p>
          </div>

          {privatePool && (
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 font-bold">
                <Waves className="h-5 w-5" />
                <p className="text-sm sm:text-base">PRIVATE POOL</p>
              </div>
              <p className="text-sm sm:text-base">Private pool</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RoomDetail;
