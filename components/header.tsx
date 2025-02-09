"use client";

import { useState, useEffect } from "react";
import Logo from "./logo";

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
        isScrolled ? "bg-zinc-950/90 py-4 shadow-md" : "bg-zinc-950 py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8">
        <Logo />
        {children}
      </div>
    </header>
  );
}

export default Header;
