"use client";

import { useState } from "react";
import Image from "next/image";
import media from "../../../content/media.json";
import data from "../../../content/sections/programas.json";
import CTAButton from "@/components/ui/CTAButton";

type ProgramKey = keyof typeof media.programImages;

export default function Programas() {
  const [active, setActive] = useState(0);
  const prog = data.programas[active];

  return (
    <section id="programas" className="section-padding bg-ivory">
      <div className="container-cf">
        <div className="text-center mb-14">
          <p className="label-tag text-3xl md:text-4xl mb-6">{data.tag}</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-charcoal leading-tight">
            {data.title}
            <br />
            <em>{data.titleItalic}</em>
          </h2>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 stagger">
          {data.programas.map((p, i) => (
            <button
              key={p.key}
              onClick={() => setActive(i)}
              className={`font-inter text-sm md:text-base tracking-wide px-5 py-2.5 rounded-full border transition-all duration-300 ease-out hover:scale-[1.04] active:scale-[0.97]
                ${
                  active === i
                    ? "bg-olive text-white border-olive shadow-md"
                    : "bg-white text-charcoal/70 border-charcoal/20 hover:border-olive hover:text-olive"
                }`}
            >
              {p.nombre}
            </button>
          ))}
        </div>

        {/* Program panel */}
        <div
          key={prog.key}
          className="grid md:grid-cols-2 gap-0 overflow-hidden rounded-sm shadow-lg border border-charcoal/10 section-enter"
        >
          {/* Image — tall */}
          <div className="relative h-80 md:h-[520px]">
            <Image
              src={media.programImages[prog.key as ProgramKey]}
              alt={prog.nombre}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Age badge */}
            <div className="absolute bottom-4 left-4 bg-charcoal/70 px-4 py-1.5 rounded-sm">
              <span className="font-inter text-sm text-white/90 tracking-wide">
                {prog.edad}
              </span>
            </div>
          </div>

          {/* Text */}
          <div className="bg-white p-10 md:p-14 flex flex-col justify-center gap-5">
            <p className="font-inter text-sm tracking-widest uppercase text-olive">
              {prog.subtitulo}
            </p>
            <h3 className="font-playfair text-3xl md:text-4xl text-charcoal leading-tight">
              {prog.nombre}
            </h3>
            <div className="w-10 h-px bg-olive/40" />
            <p className="font-inter text-lg md:text-xl text-charcoal/60 leading-relaxed">
              {prog.descripcion}
            </p>
          </div>
        </div>

        <div className="text-center mt-14">
          <CTAButton label={data.cta} className="text-base px-10 py-5" />
        </div>
      </div>
    </section>
  );
}
