import Image from "next/image";
import defaultUser from "@/public/default-user.jpg";
import { User } from "@supabase/supabase-js";

function Avatar({ user }: { user: User | null }) {
  const displayName = user?.user_metadata.fullName.split(" ")[0];

  return (
    <div className="flex items-center gap-4">
      <Image
        src={defaultUser}
        alt="user avatar"
        className="h-8 w-8 rounded-full"
      />
      <span>{displayName}</span>
    </div>
  );
}

export default Avatar;
