import { CalendarDaysIcon, HomeIcon, UserIcon } from "lucide-react";
import SignOutButton from "./signout-button";

import SideNavLink from "./side-nav-link";

export const NAVLINKS = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5" />,
  },
];

function SideNavigation() {
  return (
    <nav className="hidden border-r border-primary-900 sm:block">
      <ul className="flex h-full flex-col items-center gap-2 px-2 py-4 md:items-stretch">
        {NAVLINKS.map((link) => (
          <SideNavLink key={link.name} link={link} />
        ))}

        <li className="md:mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
