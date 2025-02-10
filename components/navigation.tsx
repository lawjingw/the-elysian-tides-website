import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { getCurrentUser, getGuest } from "@/lib/data-service";
import NavLink from "./nav-link";
import { User2Icon } from "lucide-react";

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
    <NavigationMenu className="w-full">
      <NavigationMenuList className="flex-col items-start space-x-0 space-y-4 md:flex-row md:items-center md:space-y-0">
        {navigationItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavLink href={item.href}>{item.title}</NavLink>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <NavLink href="/account">
            <div className="flex gap-2">
              <User2Icon />
              {guest ? `Hello, ${guest.fullName}` : "Sign in"}
            </div>
          </NavLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
