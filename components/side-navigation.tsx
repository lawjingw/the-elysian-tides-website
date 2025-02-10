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
    <nav className="border-r border-primary-900">
      <ul className="flex h-full flex-col gap-2 text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={cn(
                "flex items-center gap-4 px-5 py-3 font-semibold transition-colors hover:bg-zinc-950 hover:text-white",
                {
                  "bg-zinc-950 text-white": pathName === link.href,
                },
              )}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
