import Image from "next/image";
import media from "../../../content/media.json";
import data from "../../../content/sections/hero.json";
import CTAButton from "@/components/ui/CTAButton";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Image
        src={media.heroImage}
        alt="Niños explorando en Casa Fante"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-charcoal/50" />

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto pt-16">
        {/* Tag hero: tamaño propio, no usa label-tag para no sobredimensionar */}
        <p className="font-inter font-medium text-base md:text-lg tracking-widest uppercase text-white/70 mb-6">
          {data.tag}
        </p>

        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
          {data.title}
          <br />
          <em>{data.titleItalic}</em>
        </h1>

        <p className="font-inter text-lg md:text-xl text-white/80 leading-relaxed mb-12 max-w-2xl mx-auto">
          {data.subtitle}
        </p>

        <CTAButton
          label={data.cta}
          className="text-base px-10 py-5 shadow-lg"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory to-transparent" />
    </section>
  );
}
