"use client";

import { GraduationCap, Star, Trophy, CheckCircle, Users } from "lucide-react";

const specialties = [
  "Derecho Civil y Mercantil",
  "Litigios Penales Complejos",
  "Derecho Laboral y RRHH",
  "Derecho Familiar y Sucesiones",
  "Derecho Empresarial",
  "Contratos Internacionales",
];

const education = [
  { year: "2008", title: "Doctorado en Derecho",           institution: "Universidad Autónoma de Madrid" },
  { year: "2005", title: "Maestría en Derecho Corporativo", institution: "UNAM, México" },
  { year: "2002", title: "Licenciatura en Derecho",         institution: "Universidad Nacional" },
];

const values = [
  { icon: Trophy,       title: "Excelencia",   desc: "Estándares superiores en cada caso" },
  { icon: CheckCircle,  title: "Ética",         desc: "Transparencia e integridad total" },
  { icon: Users,        title: "Compromiso",    desc: "Dedicación absoluta al cliente" },
];

export default function About() {
  return (
    <section id="sobre-mi" className="section-pad" style={{ background: "var(--cream-2)" }}>
      <div className="text-center mb-12">

        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="section-label justify-center" style={{ display: "inline-flex" }}>
            Conozca al profesional
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Sobre el Abogado
          </h2>
          <div className="divider-teal" />
        </div>

        {/* Grid dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Columna izquierda — bio + valores */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-3xl font-bold text-gray-900 mb-1">
                Abg. John Eriquez
              </h3>
              <p className="text-teal-600 font-semibold text-sm tracking-wide mb-6">
                Abogado Litigante & Consultor Jurídico · Ecuador
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Con más de 15 años de ejercicio profesional, el Abg. John Eriquez ha consolidado
                una trayectoria distinguida en el manejo de casos de alta complejidad, representando
                con éxito a personas naturales, empresas e instituciones en Ecuador.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Su enfoque meticuloso, combinado con un profundo conocimiento del ordenamiento
                jurídico ecuatoriano y una visión estratégica, le han permitido obtener resultados
                favorables en más del 90% de los casos litigados ante tribunales.
              </p>
            </div>

            {/* Valores */}
            <div className="grid grid-cols-3 gap-4">
              {values.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="text-center p-4 rounded-2xl border border-gray-100 bg-white shadow-card card-hover"
                >
                  <div
                    className="w-10 h-10 mx-auto mb-3 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(45,212,191,0.1)" }}
                  >
                    <Icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <p className="font-serif font-bold text-gray-900 text-sm">{title}</p>
                  <p className="text-gray-400 text-xs mt-1 leading-snug">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha — formación + especialidades */}
          <div className="space-y-8">

            {/* Formación */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <GraduationCap className="w-5 h-5 text-teal-600" />
                <h4 className="font-serif font-bold text-gray-900 text-lg">Formación Académica</h4>
              </div>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div key={edu.year} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                        style={{ background: "var(--teal)", color: "#0d1117" }}
                      >
                        {edu.year.slice(2)}
                      </div>
                      {i < education.length - 1 && (
                        <div className="w-px flex-1 mt-1" style={{ background: "rgba(45,212,191,0.2)" }} />
                      )}
                    </div>
                    <div className="pb-4">
                      <p className="font-semibold text-gray-800 text-sm">{edu.title}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{edu.institution} · {edu.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Especialidades */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Star className="w-5 h-5 text-teal-600" />
                <h4 className="font-serif font-bold text-gray-900 text-lg">Áreas de Especialización</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {specialties.map((s) => (
                  <div
                    key={s}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-700 border border-gray-100 bg-white"
                  >
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--teal)" }} />
                    {s}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}