import { getBookedDatesByRoomId, getSettings } from "@/lib/data-service";
import DateSelector from "./date-selector";
import ReservationForm from "./create-reservation-form";
import { Room } from "@/lib/type";
import { getCurrentUser } from "@/lib/data-service";
import LoginMessage from "./login-message";

async function Reservation({ room }: { room: Room }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByRoomId(room.id),
  ]);

  const user = await getCurrentUser();

  return (
    <div className="grid min-h-[400px] grid-cols-1 border border-zinc-950 lg:grid-cols-2">
      <div className="border-b border-zinc-950 lg:border-b-0 lg:border-r">
        <DateSelector
          settings={settings}
          bookedDates={bookedDates}
          room={room}
        />
      </div>
      <div>
        {user ? <ReservationForm room={room} user={user} /> : <LoginMessage />}
      </div>
    </div>
  );
}

export default Reservation;
