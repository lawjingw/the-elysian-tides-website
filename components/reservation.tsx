import { getBookedDatesByRoomId, getSettings } from "@/lib/data-service";
import DateSelector from "./date-selector";
import ReservationForm from "./reservation-form";
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
    <div className="flex min-h-[400px] border border-primary-800">
      <DateSelector settings={settings} bookedDates={bookedDates} room={room} />
      {user ? (
        <ReservationForm room={room} user={user} />
      ) : (
        <LoginMessage />
      )}{" "}
    </div>
  );
}

export default Reservation;
