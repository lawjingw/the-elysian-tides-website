"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

function NavLink({ href, children }: NavLinkProps) {
  const pathName = usePathname();

  return (
    <li>
      <Link href={href}>
        <div
          className={cn(
            "border-b-2 border-transparent pb-1 transition-all duration-300 hover:border-b-2 hover:border-accent-400 hover:text-accent-400",
            {
              "text-white": pathName === "/",
              "border-accent-400 text-accent-400": pathName === href,
            },
          )}
        >
          {children}
        </div>
      </Link>
    </li>
  );
}

export default NavLink;
