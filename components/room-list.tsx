import { getRooms } from "@/lib/data-service";
import RoomCard from "./room-card";

async function RoomList() {
  const rooms = await getRooms();

  if (!rooms) {
    return <div>Rooms could not be loaded</div>;
  }

  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14">
      {rooms.map((room) => (
        <RoomCard room={room} key={room.id} />
      ))}
    </div>
  );
}

export default RoomList;
