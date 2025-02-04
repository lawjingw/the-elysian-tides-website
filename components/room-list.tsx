import { getRooms } from "@/lib/data-service";
import RoomCard from "./room-card";

async function RoomList({ filter }: { filter: string }) {
  const rooms = await getRooms();

  const filteredRooms = rooms.filter((room) => {
    if (filter === "all") {
      return true;
    }

    if (filter === "small") {
      return room.maxCapacity <= 2;
    }

    if (filter === "medium") {
      return room.maxCapacity > 2 && room.maxCapacity <= 4;
    }

    if (filter === "large") {
      return room.maxCapacity > 4;
    }

    return false;
  });

  if (!rooms) {
    return <div>Rooms could not be loaded</div>;
  }

  return (
    <div className="flex flex-col items-center gap-8">
      {filteredRooms.map((room) => (
        <RoomCard room={room} key={room.id} />
      ))}
    </div>
  );
}

export default RoomList;
