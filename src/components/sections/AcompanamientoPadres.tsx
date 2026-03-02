import Image from "next/image";
import media from "../../../content/media.json";
import data from "../../../content/sections/acompanamiento.json";

export default function AcompanamientoPadres() {
  return (
    <section id="padres" className="section-padding bg-ivory">
      <div className="container-cf">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="relative h-80 md:h-full min-h-[500px] overflow-hidden rounded-sm shadow-lg">
            <Image
              src={media.connectionImage}
              alt="Acompañamiento a padres en Casa Fante"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div>
            <p className="label-tag text-3xl md:text-4xl mb-6">{data.tag}</p>
            <h2 className="font-playfair text-4xl md:text-5xl text-charcoal leading-tight mb-10">
              {data.title}
              <br />
              <em>{data.titleItalic}</em>
            </h2>

            <div className="flex flex-col gap-8">
              {data.pasos.map((paso) => (
                <div key={paso.num} className="flex gap-5">
                  <span className="font-playfair text-4xl text-olive/50 leading-none shrink-0 w-8">
                    {paso.num}
                  </span>
                  <div>
                    <h4 className="font-inter font-medium text-base md:text-lg tracking-wide text-charcoal mb-2">
                      {paso.titulo}
                    </h4>
                    <p className="font-inter text-base md:text-lg text-charcoal/60 leading-relaxed">
                      {paso.texto}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-charcoal/10">
              <p className="font-playfair text-xl md:text-2xl italic text-charcoal/60">
                &ldquo;{data.cita}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
