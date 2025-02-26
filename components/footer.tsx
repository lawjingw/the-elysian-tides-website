import Link from "next/link";
import Logo from "./logo";
import { Facebook, Instagram, Youtube } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-zinc-950 px-8 pt-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-6 font-serif text-lg">About</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/about" className="hover:text-zinc-300">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-zinc-300">
                  CAREERS
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-zinc-300">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-serif text-lg">Reservations</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/rooms" className="hover:text-zinc-300">
                  FIND A ROOM
                </Link>
              </li>
              <li>
                <Link
                  href="/account/reservations"
                  className="hover:text-zinc-300"
                >
                  MANAGE BOOKING
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-zinc-300">
                  SPECIAL OFFERS
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-serif text-lg">Experiences</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="#" className="hover:text-zinc-300">
                  SPA & WELLNESS
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-zinc-300">
                  DINING
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-zinc-300">
                  GIFT CARDS
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-serif text-lg">Connect With Us</h3>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-zinc-300">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-zinc-300">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-zinc-300">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 py-8">
          <div className="flex flex-col items-center gap-6 text-center text-xs text-zinc-400">
            <Logo />
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#" className="hover:text-zinc-300">
                Privacy Notice
              </Link>
              <Link href="#" className="hover:text-zinc-300">
                Cookie Preferences
              </Link>
              <Link href="#" className="hover:text-zinc-300">
                Terms & Conditions
              </Link>
              <Link href="#" className="hover:text-zinc-300">
                Accessibility
              </Link>
            </div>
            <p>
              ©{new Date().getFullYear()} Elysian Tides. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
