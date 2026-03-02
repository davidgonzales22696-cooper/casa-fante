import Image from "next/image";
import media from "../../content/media.json";
import { whatsappLink } from "@/lib/tokens";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white/70 font-inter">
      <div className="container-cf py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-3">
          <Image
            src={media.logo}
            alt="Casa Fante"
            width={100}
            height={40}
            className="brightness-0 invert opacity-80"
          />
          <p className="text-xs tracking-wider uppercase">
            Desarrollo infantil desde el vínculo
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2 text-xs">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-olive-light hover:text-white transition-colors tracking-wider uppercase"
          >
            Agenda tu entrevista
          </a>
          <p>© {year} Casa Fante. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
