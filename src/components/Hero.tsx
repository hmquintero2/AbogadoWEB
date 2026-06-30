"use client";

import { useEffect, useRef } from "react";
import { ChevronDown, MessageCircle, Calendar, Shield, CheckCircle, Award } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    el.style.opacity = "0";
    setTimeout(() => {
      el.style.transition = "opacity 1.1s ease";
      el.style.opacity = "1";
    }, 80);
  }, []);

  const handleAnchor = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-dark"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #2dd4bf 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 -left-48 w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #5eead4 0%, transparent 70%)" }}
        />
        {/* Grid sutil */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M 64 0 L 0 0 0 64" fill="none" stroke="white" strokeWidth="0.7" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Línea superior teal */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(45,212,191,0.5), transparent)" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Texto ── */}
          <div className="order-2 lg:order-1">
            <div className="section-label" style={{ color: "var(--teal)" }}>
              Despacho Jurídico de Excelencia
            </div>

            <h1
              className="font-serif text-4xl sm:text-5xl xl:text-[3.6rem] font-bold text-white mb-6"
              style={{ lineHeight: "1.1" }}
            >
              Defendemos sus{" "}
              <span className="text-teal-gradient">derechos</span>{" "}
              con experiencia y ética.
            </h1>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-md">
              Con más de{" "}
              <span className="text-teal-400 font-semibold">15 años de trayectoria</span>{" "}
              en litigios complejos, ofrecemos asesoría jurídica integral con resultados comprobados.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-6 mb-10">
              {[
                { icon: Shield,       label: "Confidencialidad garantizada" },
                { icon: CheckCircle,  label: "90% de casos ganados" },
                { icon: Award,        label: "+500 clientes satisfechos" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-gray-400">
                  <Icon className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={() => handleAnchor("#contacto")} className="btn-primary">
                <Calendar className="w-4 h-4" />
                Solicitar Consulta
              </button>
              <a
                href="https://wa.me/593961802045?text=Hola%2C%20quisiera%20una%20consulta%20legal."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <MessageCircle className="w-4 h-4 text-green-400" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* ── Foto (única en el sitio) ── */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Marcos decorativos */}
              <div
                className="absolute -inset-3 rounded-2xl opacity-25"
                style={{ border: "1px solid rgba(45,212,191,0.4)" }}
              />
              <div
                className="absolute -inset-7 rounded-3xl opacity-10"
                style={{ border: "1px solid rgba(45,212,191,0.25)" }}
              />

              {/* Contenedor foto */}
              <div
                className="relative w-64 h-80 sm:w-80 sm:h-[430px] lg:w-[360px] lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl"
                style={{ background: "linear-gradient(160deg, #1a2235 0%, #0d1117 100%)" }}
              >
                {/*
                  ── PARA AÑADIR TU FOTO ──
                  Elimina el bloque placeholder de abajo y descomenta:

                  import Image from "next/image";
                  <Image
                    src="/foto-abogado.jpg"
                    alt="Abg. John Eriquez"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div
                    className="w-28 h-28 rounded-full flex items-center justify-center"
                    style={{
                      border: "2px solid rgba(45,212,191,0.3)",
                      background: "rgba(45,212,191,0.06)",
                    }}
                  >
                    <span className="font-serif text-5xl font-bold text-teal-gradient">JE</span>
                  </div>
                  <p
                    className="text-[10px] tracking-[0.25em] uppercase"
                    style={{ color: "rgba(45,212,191,0.4)" }}
                  >
                    Añade tu foto aquí
                  </p>
                </div>

                {/* Overlay degradado */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(10,15,30,0.85) 0%, transparent 50%)" }}
                />

                {/* Nombre dentro */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-serif text-white font-bold text-lg">Abg. John Eriquez</p>
                  <p className="text-teal-400/80 text-xs tracking-wide">Abogado & Consultor Legal · Ecuador</p>
                </div>
              </div>

              {/* Card flotante */}
              <div className="absolute -top-4 -right-4 sm:-right-7 bg-white rounded-xl px-4 py-3 shadow-card border border-gray-100">
                <p className="font-serif font-bold text-gray-900 text-xl">15+</p>
                <p className="text-gray-400 text-[11px]">años de experiencia</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
        <span className="text-gray-500 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-teal-400" />
      </div>
    </section>
  );
}