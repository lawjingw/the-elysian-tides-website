import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="z-10 flex items-center gap-4">
      <Image
        src="/logo.svg"
        height={60}
        width={60}
        alt="the Tidecott hotel logo"
      />
      <span className="text-primary-100] text-xl font-bold">Tidecott</span>
    </Link>
  );
}

export default Logo;
