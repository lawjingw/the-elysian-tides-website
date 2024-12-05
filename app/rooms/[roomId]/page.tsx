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
    <div className="mx-auto mt-8 max-w-6xl">
      <RoomDetail room={room} />
      <div>
        <h2 className="text-center text-5xl font-semibold">
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
