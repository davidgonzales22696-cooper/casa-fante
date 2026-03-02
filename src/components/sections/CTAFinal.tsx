import CTAButton from "@/components/ui/CTAButton";
import data from "../../../content/sections/cta.json";

export default function CTAFinal() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-cf text-center">
        <p className="label-tag text-3xl md:text-5xl mb-8">{data.tag}</p>

        <h2 className="font-playfair text-4xl md:text-6xl text-charcoal leading-tight mb-6">
          {data.title}
          <br />
          <em>{data.titleItalic}</em>
        </h2>

        <div className="w-12 h-px bg-olive/40 mx-auto mb-10" />

        <p className="font-inter text-lg md:text-xl text-charcoal/70 leading-relaxed mb-14 max-w-lg mx-auto whitespace-pre-line">
          {data.subtitle}
        </p>

        <CTAButton label={data.cta} className="text-base px-10 py-5 shadow-lg" />

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-charcoal/40">
          {data.diferencial.map((item) => (
            <span key={item} className="font-inter text-sm md:text-base tracking-widest uppercase">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
