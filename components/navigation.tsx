import Link from "next/link";
import Avatar from "./avatar";
import { getCurrentUser } from "@/lib/auth-service";

export default async function Navigation() {
  const user = await getCurrentUser();

  return (
    <nav className="z-10 text-xl">
      <ul className="flex items-center gap-16">
        <li>
          <Link
            href="/rooms"
            className="transition-colors hover:text-accent-400"
          >
            Rooms
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="transition-colors hover:text-accent-400"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="transition-colors hover:text-accent-400"
          >
            {user ? <Avatar user={user} /> : "Guest area"}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
