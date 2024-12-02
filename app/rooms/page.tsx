import { Metadata } from "next";
import RoomCard from "../../components/room-card";
import { getRooms } from "../../lib/data-service";

export const metadata: Metadata = {
  title: "Rooms",
};

async function Page() {
  const rooms = await getRooms();

  return (
    <div>
      <h1 className="mb-5 text-4xl font-medium text-accent-400">
        Our Luxury Rooms
      </h1>
      <p className="mb-10 text-lg text-primary-200">
        Stylishly refurbished, Verdura Resort&apos;s newly decorated rooms and
        suites.
      </p>

      {rooms.length > 0 && (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14">
          {rooms.map((room) => (
            <RoomCard room={room} key={room.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Page;
