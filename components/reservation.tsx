import { getBookedDatesByRoomId, getSettings } from "@/lib/data-service";
import DateSelector from "./date-selector";
import ReservationForm from "./reservation-form";
import { Room } from "@/lib/type";

async function Reservation({ room }: { room: Room }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByRoomId(room.id),
  ]);

  return (
    <div className="flex min-h-[400px] border border-primary-800">
      <DateSelector settings={settings} bookedDates={bookedDates} room={room} />
      <ReservationForm room={room} />
    </div>
  );
}

export default Reservation;
