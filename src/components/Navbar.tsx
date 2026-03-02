"use client";

import { useState } from "react";
import Image from "next/image";
import media from "../../content/media.json";
import navData from "../../content/sections/navbar.json";
import { whatsappLink } from "@/lib/tokens";
import type { SectionId } from "@/app/page";

interface NavbarProps {
  activeSection: SectionId;
  onSectionChange: (id: SectionId) => void;
}

export default function Navbar({ activeSection, onSectionChange }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const handleNav = (href: string) => {
    const id = href.replace("#", "") as SectionId;
    onSectionChange(id);
    setOpen(false);
    window.scrollTo({ top: 0 });
  };

  const linkClass = (href: string) => {
    const isActive = activeSection === href.replace("#", "");
    const base =
      "font-inter text-xs tracking-wider uppercase px-4 py-2 rounded-md shadow transition-all duration-200 cursor-pointer";
    return isActive
      ? `${base} bg-white text-olive font-semibold`
      : `${base} bg-white/10 text-white hover:bg-white hover:text-olive`;
  };

  const mobileLinkClass = (href: string) => {
    const isActive = activeSection === href.replace("#", "");
    const base =
      "font-inter text-xs tracking-wider uppercase px-4 py-3 rounded-md shadow text-center transition-all duration-200 cursor-pointer";
    return isActive
      ? `${base} bg-white text-olive font-semibold`
      : `${base} bg-white/10 text-white hover:bg-white hover:text-olive`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-md">
      {/* Barra — verde olivo */}
      <nav className="bg-olive flex items-center justify-between px-5 md:px-8 h-16">
        {/* Logo */}
        <button
          onClick={() => handleNav("#inicio")}
          className="flex items-center shrink-0"
          aria-label="Inicio"
        >
          <Image
            src={media.logo}
            alt="Casa Fante"
            width={90}
            height={36}
            className="brightness-0 invert"
            priority
          />
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-2">
          {navData.links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={linkClass(link.href)}
            >
              {link.label}
            </button>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 font-inter text-xs tracking-wider uppercase text-olive bg-white
                       hover:bg-ivory px-5 py-2 rounded-md shadow-md font-semibold
                       transition-all duration-200"
          >
            {navData.cta}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menú"
        >
          <span className="block w-5 h-0.5 bg-white mb-1" />
          <span className="block w-5 h-0.5 bg-white mb-1" />
          <span className="block w-5 h-0.5 bg-white" />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-olive/95 backdrop-blur-sm px-5 pb-5 flex flex-col gap-2 shadow-lg">
          {navData.links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={mobileLinkClass(link.href)}
            >
              {link.label}
            </button>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-xs tracking-wider uppercase text-olive bg-white
                       hover:bg-ivory px-4 py-3 rounded-md shadow-md font-semibold
                       text-center mt-1 transition-all duration-200"
          >
            {navData.cta}
          </a>
        </div>
      )}
    </header>
  );
}
