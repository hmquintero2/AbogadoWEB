import Link from "next/link";
import { Scale, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 flex items-center justify-center rounded"
                style={{ background: "var(--teal)" }}
              >
                <Scale className="w-4 h-4 text-slate-900" />
              </div>
              <div>
                <p className="font-serif font-bold text-white text-sm">Abg. John Eriquez</p>
                <p className="text-teal-400/70 text-[9px] tracking-[0.2em] uppercase">Despacho Jurídico</p>
              </div>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
              Despacho jurídico de alto nivel especializado en diversas ramas del derecho.
              Más de 15 años defendiendo sus derechos con ética y compromiso.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Navegación</h4>
            <ul className="space-y-3">
              {[
                { label: "Inicio",     href: "#inicio" },
                { label: "Sobre Mí",  href: "#sobre-mi" },
                { label: "Servicios", href: "#servicios" },
                { label: "Contacto",  href: "#contacto" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-gray-400 text-sm hover:text-teal-400 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Contacto</h4>
            <ul className="space-y-3">
              {[
                { icon: Phone,  text: "+593 96 180 2045" },
                { icon: Mail,   text: "johneriquez@abogado.com" },
                { icon: MapPin, text: "Yaruqui - Quito , Ecuador" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2 text-gray-400 text-sm">
                  <Icon className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-600 text-xs">
          <p>© {year} Abg. John Eriquez. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <Link href="/privacidad" className="hover:text-gray-400 transition-colors">Privacidad</Link>
            <Link href="/terminos" className="hover:text-gray-400 transition-colors">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}