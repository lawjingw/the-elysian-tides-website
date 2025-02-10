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
        className="h-[40px] w-[40px] sm:h-[60px] sm:w-[60px]"
        src={logo}
        height={60}
        width={60}
        alt="Elysian Tides Resort logo"
      />
      <span
        className={cn("font-serif text-2xl sm:text-3xl", {
          "text-white": pathName === "/",
        })}
      >
        Elysian Tides
      </span>
    </Link>
  );
}

export default Logo;
