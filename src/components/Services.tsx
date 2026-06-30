"use client";

import { Scale, Users, Briefcase, Heart, Building2, FileText } from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Derecho Civil",
    desc: "Resolución de controversias civiles, contratos, responsabilidad y propiedad.",
    color: "#2dd4bf",
  },
  {
    icon: Users,
    title: "Derecho Penal",
    desc: "Defensa penal integral, protección de derechos y representación ante tribunales.",
    color: "#5eead4",
  },
  {
    icon: Briefcase,
    title: "Derecho Laboral",
    desc: "Protección de derechos laborales, despidos, accidentes y negociaciones colectivas.",
    color: "#2dd4bf",
  },
  {
    icon: Heart,
    title: "Derecho Familiar",
    desc: "Divorcios, custodia, alimentos, herencias y procesos de sucesión.",
    color: "#5eead4",
  },
  {
    icon: Building2,
    title: "Derecho Empresarial",
    desc: "Constitución de empresas, fusiones, adquisiciones y compliance corporativo.",
    color: "#2dd4bf",
  },
  {
    icon: FileText,
    title: "Contratos",
    desc: "Redacción, revisión y negociación de contratos nacionales e internacionales.",
    color: "#5eead4",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="section-pad" style={{ background: "var(--cream)" }}>
      <div className="text-center mb-12">

        <div className="text-center mb-16">
          <div className="section-label justify-center" style={{ display: "inline-flex" }}>
            Áreas de práctica
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios Jurídicos
          </h2>
          <div className="divider-teal" />
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Ofrecemos asesoría especializada en las principales ramas del derecho,
            con un enfoque personalizado para cada cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, color }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card card-hover group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${color}18` }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>
              <h3 className="font-serif font-bold text-gray-900 text-lg mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              <div
                className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}