import Reservation from "@/components/reservation";
import RoomDetail from "@/components/room-detail";
import { getRoom } from "@/lib/data-service";

const DOMAIN_URL = process.env.VERCEL_URL || "localhost:3000";

type RoomPageProps = {
  params: Promise<{
    roomId: number;
  }>;
};

export async function generateMetadata(props: RoomPageProps) {
  const params = await props.params;
  const room = await getRoom(params.roomId);
  const { name } = room!;

  return {
    title: name,
    openGraph: {
      title: name,
      description: `Reserve the ${name} room at the Elysian Tides Resort today.`,
      type: "website",
      url: `https://${DOMAIN_URL}/rooms/${params.roomId}`,
      images: room.images,
      width: 1156,
      height: 768,
    },
  };
}

async function page(props: RoomPageProps) {
  const params = await props.params;
  const room = await getRoom(params.roomId);

  return (
    <div className="mx-auto mt-4 max-w-6xl px-4 sm:mt-8 lg:px-0">
      <RoomDetail room={room} />

      <div className="space-y-6">
        <h2 className="text-center font-serif text-3xl font-semibold text-accent-400 sm:text-4xl lg:text-5xl">
          Reserve {room.name.toLowerCase()} today. Pay on arrival.
        </h2>

        <Reservation room={room} />
      </div>
    </div>
  );
}

export default page;
