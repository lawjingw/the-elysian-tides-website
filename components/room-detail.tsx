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
    <div className="mb-28 grid grid-cols-[4fr_3fr] gap-20">
      <div className="relative col-span-2 scale-110">
        {images && (
          <Image
            className="w-full brightness-75"
            src={images[0]}
            width={1100}
            height={400}
            alt={name}
          />
        )}
        <h3 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-semibold text-white">
          {name}
        </h3>
      </div>
      <p className="text-2xl">{description}</p>
      <div className="grid grid-cols-2 gap-6">
        <div className="items-left flex flex-col gap-3">
          <div className="flex items-center gap-3 font-bold">
            <Users className="h-5 w-5" />
            <p>OCCUPANCY</p>
          </div>
          <p>
            For up to <span className="font-bold">{maxCapacity}</span> guests
          </p>
        </div>
        <div className="items-left flex flex-col gap-3">
          <div className="flex items-center gap-3 font-bold">
            <BedDouble className="h-5 w-5" />
            <p>BED TYPE</p>
          </div>
          <p className="leading-4">{bedTypes}</p>
        </div>
        <div className="items-left flex flex-col gap-3">
          <div className="flex items-center gap-3 font-bold">
            <Scaling className="h-5 w-5" />
            <p>ROOM SIZE</p>
          </div>
          <p>
            {roomSize} m<sup>2</sup>
          </p>
        </div>
        <div className="items-left flex flex-col gap-3">
          <div className="flex items-center gap-3 font-bold">
            <Binoculars className="h-5 w-5" />
            <p>ROOM VIEW</p>
          </div>
          <p>The Mediterranean Sea and the Verdura golf courses</p>
        </div>

        {privatePool && (
          <div className="items-left flex flex-col gap-3">
            <div className="flex items-center gap-3 font-bold">
              <Waves className="h-5 w-5" />
              <p>PRIVATE POOL</p>
            </div>
            <p>Private pool </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default RoomDetail;
