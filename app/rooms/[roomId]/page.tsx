import Reservation from "@/components/reservation";
import RoomDetail from "@/components/room-detail";
import Spinner from "@/components/spinner";
import { getRoom } from "@/lib/data-service";
import { Suspense } from "react";

type RoomPageProps = {
  params: {
    roomId: number;
  };
};

export async function generateMetadata({ params }: RoomPageProps) {
  const room = await getRoom(params.roomId);
  const { name } = room!;

  return {
    title: name,
  };
}

async function page({ params }: RoomPageProps) {
  const room = await getRoom(params.roomId);

  return (
    <div className="mx-auto mt-4 max-w-6xl px-4 sm:mt-8 lg:px-0">
      <RoomDetail room={room} />
      <div className="space-y-6">
        <h2 className="text-center font-serif text-3xl font-semibold text-accent-400 sm:text-4xl lg:text-5xl">
          Reserve {room.name.toLowerCase()} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation room={room} />
        </Suspense>
      </div>
    </div>
  );
}

export default page;
