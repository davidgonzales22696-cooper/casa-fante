import data from "../../../content/sections/problema.json";

export default function Problema() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-cf">
        <div className="max-w-3xl mx-auto text-center">
          {/* tag text-3xl = un paso bajo h2 text-4xl */}
          <p className="label-tag text-3xl md:text-4xl mb-8">{data.tag}</p>

          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight mb-8">
            {data.title}
            <br />
            <em>{data.titleItalic}</em>
          </h2>

          <div className="w-12 h-px bg-olive mx-auto mb-10" />

          <p className="font-inter text-lg md:text-xl text-charcoal/70 leading-relaxed mb-6 whitespace-pre-line">
            {data.lead}
          </p>

          <p className="font-inter text-lg md:text-xl text-charcoal/70 leading-relaxed">
            {data.body}
          </p>
        </div>
      </div>
    </section>
  );
}
