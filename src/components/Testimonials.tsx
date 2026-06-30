"use client";

import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    role: "Empresaria",
    text: "El Abg. Eriquez resolvió mi caso laboral de manera impecable. Su profesionalismo y conocimiento jurídico son excepcionales.",
    stars: 5,
  },
  {
    name: "Carlos Mendoza",
    role: "Gerente General",
    text: "Excelente asesoría en la constitución de nuestra empresa. Proceso claro, eficiente y sin complicaciones.",
    stars: 5,
  },
  {
    name: "Ana Rodríguez",
    role: "Profesional independiente",
    text: "Me ayudó en un proceso civil complejo. Siempre disponible, transparente y con resultados reales.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad" style={{ background: "var(--cream-2)" }}>
      <div className="text-center mb-12">

        <div className="text-center mb-16">
          <div className="section-label justify-center" style={{ display: "inline-flex" }}>
            Lo que dicen nuestros clientes
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Testimonios
          </h2>
          <div className="divider-teal" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, text, stars }) => (
            <div
              key={name}
              className="bg-white rounded-2xl p-7 border border-gray-100 shadow-card card-hover flex flex-col"
            >
              <Quote className="w-8 h-8 text-teal-400 opacity-60 mb-4 flex-shrink-0" />
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                &ldquo;{text}&rdquo;
              </p>
              <div className="mt-6 pt-5 border-t border-gray-50 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, var(--teal), var(--teal-2))" }}
                >
                  {name[0]}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{name}</p>
                  <p className="text-gray-400 text-xs">{role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: stars }).map((_, i) => (
                    <span key={i} className="text-teal-400 text-sm">★</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}