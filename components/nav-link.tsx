"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SheetClose } from "./ui/sheet";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <SheetClose asChild>
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
    </SheetClose>
  );
}

export default NavLink;
