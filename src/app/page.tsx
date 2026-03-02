"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Problema from "@/components/sections/Problema";
import Enfoque from "@/components/sections/Enfoque";
import ModeloFante from "@/components/sections/ModeloFante";
import Espacio from "@/components/sections/Espacio";
import Programas from "@/components/sections/Programas";
import AcompanamientoPadres from "@/components/sections/AcompanamientoPadres";
import CTAFinal from "@/components/sections/CTAFinal";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";

export type SectionId = "inicio" | "enfoque" | "espacio" | "programas" | "padres";

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>("inicio");

  return (
    <>
      <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />

      <main className="min-h-screen">
        {/* Cada grupo de secciones se muestra/oculta por tab */}
        <div key={activeSection} className="section-enter">
          {activeSection === "inicio" && (
            <>
              <Hero />
              <Problema />
            </>
          )}
          {activeSection === "enfoque" && (
            <>
              <Enfoque />
              <ModeloFante />
            </>
          )}
          {activeSection === "espacio" && <Espacio />}
          {activeSection === "programas" && <Programas />}
          {activeSection === "padres" && (
            <>
              <AcompanamientoPadres />
              <CTAFinal />
            </>
          )}
        </div>
      </main>

      <Footer />
      <StickyWhatsApp />
    </>
  );
}
