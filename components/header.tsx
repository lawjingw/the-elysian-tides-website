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
      className={`sticky left-0 top-0 z-10 w-full px-8 py-4 ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        {children}
      </div>
    </header>
  );
}

export default Header;
