"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

function Logo() {
  const pathName = usePathname();

  return (
    <Link href="/" className="z-10 flex items-center gap-4">
      <Image
        className="h-[60px] w-[60px]"
        src={logo}
        height={60}
        width={60}
        alt="Elysian Tides Resort logo"
      />
      <span
        className={cn("text-2xl font-bold", {
          "text-white": pathName === "/",
          "text-slate-800": pathName !== "/",
        })}
      >
        Elysian Tides
      </span>
    </Link>
  );
}

export default Logo;
