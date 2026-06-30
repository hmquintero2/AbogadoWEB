"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "593961802045"; // sin "+", sin espacios

const contactInfo = [
  { icon: Phone,  label: "Teléfono",  value: "+593 96 180 2045" },
  { icon: Mail,   label: "Email",     value: "johneriquez@abogado.com" },
  { icon: MapPin, label: "Dirección", value: "Yaruqui - Quito, Ecuador" },
  { icon: Clock,  label: "Atención",  value: "Lun–Vie 8:00 – 18:00" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      "*Nueva consulta desde la web*",
      "",
      `*Nombre:* ${form.name}`,
      `*Correo:* ${form.email}`,
      form.phone && `*Teléfono:* ${form.phone}`,
      form.subject && `*Área de consulta:* ${form.subject}`,
      "",
      `*Mensaje:*`,
      form.message,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const inputCls =
    "w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all";

  return (
    <section id="contacto" className="section-pad" style={{ background: "var(--cream)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <div className="section-label justify-center" style={{ display: "inline-flex" }}>
            Estamos para ayudarle
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Contáctenos
          </h2>
          <div className="divider-teal" />
          <p className="text-gray-500 max-w-md mx-auto text-base">
            Complete el formulario y le redirigiremos a WhatsApp con su consulta lista para enviar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Info */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-card">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(45,212,191,0.1)" }}
                >
                  <Icon className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-medium tracking-wide uppercase">{label}</p>
                  <p className="text-gray-800 font-semibold text-sm mt-0.5">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Formulario */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-card p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Nombre completo *</label>
                  <input name="name" required value={form.name} onChange={handleChange} className={inputCls} placeholder="Su nombre" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Correo electrónico *</label>
                  <input name="email" type="email" required value={form.email} onChange={handleChange} className={inputCls} placeholder="correo@ejemplo.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Teléfono</label>
                  <input name="phone" value={form.phone} onChange={handleChange} className={inputCls} placeholder="+593 ..." />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Área de consulta</label>
                  <select name="subject" value={form.subject} onChange={handleChange} className={inputCls}>
                    <option value="">Seleccione...</option>
                    <option>Derecho Civil</option>
                    <option>Derecho Penal</option>
                    <option>Derecho Laboral</option>
                    <option>Derecho Familiar</option>
                    <option>Derecho Empresarial</option>
                    <option>Otro</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Su consulta *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputCls} resize-none`}
                  placeholder="Describa brevemente su situación..."
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                <Send className="w-4 h-4" />
                Enviar Consulta por WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}