import data from "../../../content/sections/problema.json";

export default function Problema() {
  return (
    <section className="section-padding bg-charcoal/[0.025]">
      <div className="container-cf">
        <div className="max-w-3xl mx-auto text-center relative">

          {/* Comilla decorativa */}
          <span
            aria-hidden="true"
            className="absolute -top-6 left-1/2 -translate-x-1/2 font-playfair text-[10rem] leading-none text-olive/10 select-none pointer-events-none"
          >
            &ldquo;
          </span>

          <p className="label-tag text-3xl md:text-4xl mb-8 relative z-10">{data.tag}</p>

          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight mb-8 relative z-10">
            {data.title}
            <br />
            <em>{data.titleItalic}</em>
          </h2>

          <div className="w-12 h-px bg-olive mx-auto mb-10" />

          {/* Lead como pull-quote */}
          <p className="font-playfair text-xl md:text-2xl text-charcoal/75 leading-relaxed mb-8 italic whitespace-pre-line">
            {data.lead}
          </p>

          <p className="font-inter text-lg md:text-xl text-charcoal/55 leading-relaxed">
            {data.body}
          </p>
        </div>
      </div>
    </section>
  );
}
