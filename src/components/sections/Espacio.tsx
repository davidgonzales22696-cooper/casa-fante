import Image from "next/image";
import SimpleCarousel from "@/components/ui/SimpleCarousel";
import media from "../../../content/media.json";
import data from "../../../content/sections/espacio.json";

export default function Espacio() {
  return (
    <section id="espacio" className="section-padding bg-ivory">
      <div className="container-cf">
        <div className="text-center mb-14">
          <p className="label-tag text-3xl md:text-4xl mb-6">{data.tag}</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-charcoal leading-tight mb-5">
            {data.title}
            <br />
            <em>{data.titleItalic}</em>
          </h2>
          <p className="font-inter text-base md:text-lg text-charcoal/60 max-w-lg mx-auto leading-relaxed">
            {data.atributos}
          </p>
        </div>

        {/* Video — elemento principal */}
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-charcoal/5 mb-4 shadow-lg">
          <video
            src={media.video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            aria-label={data.videoLabel}
          />
        </div>

        {/* Carrusel de imágenes */}
        <SimpleCarousel showArrows showDots className="mt-6">
          {media.spaceGallery.map((src, i) => (
            <div key={i} className="relative w-full aspect-[3/2] overflow-hidden">
              <Image
                src={src}
                alt={`Espacio Casa Fante ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          ))}
        </SimpleCarousel>

        <p className="text-center font-playfair text-xl md:text-2xl text-charcoal/60 italic mt-10">
          {data.cierre}
        </p>
      </div>
    </section>
  );
}
