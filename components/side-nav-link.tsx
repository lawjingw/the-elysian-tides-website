"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SideNavLinkProps = {
  link: {
    name: string;
    href: string;
    icon: React.ReactNode;
  };
};

function SideNavLink({ link }: SideNavLinkProps) {
  const pathName = usePathname();

  return (
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
  );
}

export default SideNavLink;
