"use client";

import { useState, useEffect } from "react";
import Logo from "./logo";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

function Header({ children }: Readonly<{ children: React.ReactNode }>) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full text-white transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/90 py-3 shadow-md md:py-4"
          : "bg-zinc-950 py-3 md:py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8">
        <Logo />
        <Sheet>
          <div className="hidden md:block">{children}</div>
          <SheetTrigger className="md:hidden">
            <Menu className="h-8 w-8" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-white p-0">
            <div className="mt-10 pl-2">
              <Logo />
            </div>
            <nav className="h-full py-8">
              <div className="flex h-full flex-col">{children}</div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default Header;
