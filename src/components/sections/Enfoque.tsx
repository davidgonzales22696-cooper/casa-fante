import SimpleCarousel from "@/components/ui/SimpleCarousel";
import data from "../../../content/sections/enfoque.json";

export default function Enfoque() {
  return (
    <section id="enfoque" className="section-padding bg-ivory">
      <div className="container-cf">
        <div className="text-center mb-14">
          <p className="label-tag text-3xl md:text-4xl mb-6">{data.tag}</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-charcoal leading-tight">
            {data.title}{" "}
            <em>{data.titleItalic}</em>
          </h2>
        </div>

        <SimpleCarousel
          autoPlay
          autoPlayInterval={5000}
          showArrows
          showDots
          className="max-w-3xl mx-auto"
        >
          {data.pilares.map((pilar) => (
            <div
              key={pilar.numero}
              className="flex flex-col items-center text-center px-8 md:px-20 pb-12"
            >
              <span className="font-playfair text-8xl text-charcoal/10 leading-none mb-4 select-none">
                {pilar.numero}
              </span>
              <div className="w-10 h-px bg-olive/40 mb-8" />
              <h3 className="font-playfair text-3xl md:text-4xl text-charcoal leading-snug mb-5">
                {pilar.titulo}
              </h3>
              <p className="font-inter text-lg md:text-xl text-charcoal/60 leading-relaxed max-w-lg">
                {pilar.descripcion}
              </p>
            </div>
          ))}
        </SimpleCarousel>
      </div>
    </section>
  );
}
