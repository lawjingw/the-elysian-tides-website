import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { getCurrentUser, getGuest } from "@/lib/data-service";
import NavLink from "./nav-link";
import { User2Icon } from "lucide-react";
import { NAVLINKS } from "./side-navigation";

const navigationItems = [
  {
    title: "Rooms",
    href: "/rooms",
    description: "Discover our luxurious accommodations",
  },
  {
    title: "About",
    href: "/about",
    description: "Learn about our story and values",
  },
];

export default async function Navigation() {
  const currentUser = await getCurrentUser();
  const guest = currentUser ? await getGuest(currentUser.email!) : null;

  return (
    <NavigationMenu className="flex w-full flex-col justify-start">
      <NavigationMenuList className="flex-col items-start space-x-0 space-y-2 md:flex-row md:items-center md:space-y-0">
        {navigationItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavLink href={item.href}>{item.title}</NavLink>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem className="hidden sm:block">
          <NavLink href="/account">
            <div className="flex gap-2">
              <User2Icon />
              {guest ? `Hello, ${guest.fullName}` : "Sign in"}
            </div>
          </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="sm:hidden">
          <span className="block px-4 py-2 text-lg font-light tracking-wide">
            Account
          </span>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList className="ml-5 flex-col items-start space-x-0 space-y-2 pt-2 sm:hidden">
        {NAVLINKS.map((link) => (
          <NavigationMenuItem key={link.name}>
            <NavLink href={link.href}>
              <div className="flex items-center gap-4">
                <span>{link.name}</span>
              </div>
            </NavLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
