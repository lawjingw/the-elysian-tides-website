import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src="/logo.svg"
        height={60}
        width={60}
        alt="the Thistle & Tide hotel logo"
      />
      <span className="text-xl font-bold text-primary-100]">
        Thistle & Tide
      </span>
    </Link>
  );
}

export default Logo;
