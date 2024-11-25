import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";

function Logo() {
  return (
    <Link href="/" className="z-10 flex items-center gap-4">
      <Image
        className="h-[60px] w-[60px]"
        src={logo}
        height={60}
        width={60}
        alt="Elysian Tides Resort logo"
      />
      <span className="text-xl font-bold text-primary-100">Elysian Tides</span>
    </Link>
  );
}

export default Logo;
