"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link href={href}>
      <div
        className={`block border-b-2 px-4 py-2 text-lg font-light tracking-wide transition-colors hover:text-accent-400 ${
          pathname === href
            ? "border-accent-400 text-accent-400"
            : "border-transparent"
        }`}
      >
        {children}
      </div>
    </Link>
  );
}

export default NavLink;
