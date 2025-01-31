import Avatar from "./avatar";
import { getCurrentUser } from "@/lib/data-service";
import NavLink from "./nav-link";

export default async function Navigation() {
  const user = await getCurrentUser();

  return (
    <nav className="z-10 text-xl">
      <ul className="flex items-center gap-16">
        <NavLink href="/rooms">Rooms</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/account">
          {user ? <Avatar user={user} /> : "Guest area"}
        </NavLink>
      </ul>
    </nav>
  );
}
