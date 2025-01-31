"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

function NavLink({ href, children }: NavLinkProps) {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <li>
      <Link
        href={href}
        className={`${pathName === "/" ? "text-white" : "text-slate-800"} transition-colors hover:text-accent-400`}
      >
        {children}
      </Link>
    </li>
  );
}

export default NavLink;
