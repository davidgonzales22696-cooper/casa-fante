import Image from "next/image";
import data from "../../../content/sections/modelofante.json";

const icons = {
  chat: (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
    </svg>
  ),
  notebook: (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  shield: (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  ),
};

export default function ModeloFante() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-cf">

        {/* ── Header centrado ── */}
        <div className="text-center mb-16">
          <p className="label-tag text-3xl md:text-4xl mb-6">{data.tag}</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-charcoal leading-tight mb-6">
            {data.title}
            <br />
            <em>{data.titleItalic}</em>
          </h2>
          <div className="w-12 h-px bg-olive/40 mx-auto mb-8" />
          <p className="font-inter text-lg md:text-xl text-charcoal/60 leading-relaxed max-w-2xl mx-auto">
            {data.intro}
          </p>
        </div>

        {/* ── 3 feature cards en fila ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {data.items.map((item, i) => (
            <div
              key={item.label}
              className="group bg-white border border-charcoal/8 rounded-sm px-7 py-8 shadow-sm flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <div className="text-olive">
                  {icons[item.icon as keyof typeof icons]}
                </div>
                <span className="font-playfair text-4xl text-charcoal/8 leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="w-8 h-px bg-olive/30" />
              <div>
                <p className="font-inter text-xs tracking-widest uppercase text-olive mb-2">{item.label}</p>
                <p className="font-playfair text-xl text-charcoal leading-snug">{item.texto}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Imagen + texto inferior ── */}
        <div className="grid md:grid-cols-2 gap-12 items-center border-t border-charcoal/8 pt-14">

          {/* Imagen */}
          <div className="relative w-full aspect-square overflow-hidden rounded-full shadow-md bg-white">
            <Image
              src="/info/fotos/logofante.png"
              alt="Fante Escucha"
              fill
              className="object-contain p-10"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>

          {/* Texto + preview + badges */}
          <div className="flex flex-col gap-7">
            <p className="font-inter text-lg md:text-xl text-charcoal/70 leading-relaxed">
              {data.body}
            </p>

            {/* Message preview — minimalista */}
            <div className="flex flex-col gap-2.5 bg-charcoal/[0.03] border border-charcoal/8 rounded-sm px-5 py-5">
              {data.bubbles.map((text, i) => (
                <div
                  key={i}
                  className={`max-w-[82%] px-4 py-3 rounded-2xl font-inter text-sm leading-relaxed ${
                    i % 2 === 0
                      ? "bg-white text-charcoal/65 self-start shadow-sm"
                      : "bg-olive/10 text-charcoal/70 self-end"
                  }`}
                >
                  {text}
                </div>
              ))}
            </div>

            {/* Badges */}
            <div className="flex flex-col gap-2 pt-2 border-t border-charcoal/8">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-olive shrink-0" />
                <p className="font-inter text-sm text-charcoal/45">{data.nota}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sand shrink-0" />
                <p className="font-inter text-sm italic text-charcoal/45">{data.piloto}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
