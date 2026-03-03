import Image from "next/image";
import media from "../../content/media.json";
import { whatsappLink } from "@/lib/tokens";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white/60 font-inter">
      {/* Línea superior olive */}
      <div className="h-px bg-olive/40" />

      <div className="container-cf py-14 flex flex-col md:flex-row items-center md:items-end justify-between gap-10">

        {/* Logo + tagline */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <Image
            src={media.logo}
            alt="Casa Fante"
            width={280}
            height={70}
            className="object-contain opacity-85"
          />
          <p className="text-xs tracking-widest uppercase text-white/40">
            Desarrollo infantil desde el vínculo
          </p>
          <p className="text-xs text-white/30">Lima, Perú</p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-sm tracking-widest uppercase text-olive/80 hover:text-olive transition-colors duration-300"
          >
            Agenda tu sesión inicial →
          </a>
          <p className="text-xs text-white/25">
            © {year} Casa Fante. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
