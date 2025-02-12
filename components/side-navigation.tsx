"use client";

import { CalendarDaysIcon, HomeIcon, UserIcon } from "lucide-react";
import SignOutButton from "./signout-button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
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
  const pathName = usePathname();

  return (
    <nav className="hidden border-r border-primary-900 sm:block">
      <ul className="flex h-full flex-col items-center gap-2 px-2 py-4 md:items-stretch">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={cn(
                "flex items-center gap-4 rounded-lg px-3 py-2 transition-colors hover:bg-zinc-950 hover:text-white",
                {
                  "bg-zinc-950 text-white": pathName === link.href,
                },
              )}
              href={link.href}
              title={link.name}
            >
              {link.icon}
              <span className="hidden min-[950px]:block">{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="md:mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
