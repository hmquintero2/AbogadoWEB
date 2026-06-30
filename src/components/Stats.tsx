"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 15, suffix: "+", label: "Años de Experiencia", desc: "ejerciendo el derecho" },
  { value: 500, suffix: "+", label: "Casos Resueltos", desc: "con éxito comprobado" },
  { value: 98, suffix: "%", label: "Clientes Satisfechos", desc: "recomiendan el servicio" },
  { value: 1200, suffix: "+", label: "Consultas", desc: "realizadas en Ecuador" },
];

function useCounter(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function StatCard({ value, suffix, label, desc }: { value: number; suffix: string; label: string; desc: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCounter(value, 2000, active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center group px-4">
      <div className="font-serif text-5xl sm:text-6xl font-bold mb-2 text-teal-gradient">
        {count.toLocaleString()}<span style={{ color: "#2dd4bf" }}>{suffix}</span>
      </div>
      <div
        className="w-8 h-px mx-auto mb-3 group-hover:w-14 transition-all duration-500"
        style={{ background: "rgba(45,212,191,0.4)" }}
      />
      <p className="text-white font-semibold text-sm mb-1">{label}</p>
      <p className="text-gray-500 text-xs">{desc}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-16 bg-dark relative overflow-hidden">
      {/* Decorativo */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(45,212,191,0.4), transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(94,234,212,0.4), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-label">Trayectoria en números</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Resultados que hablan por sí solos
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-y-2 lg:divide-y-0 lg:divide-x divide-white/5">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}