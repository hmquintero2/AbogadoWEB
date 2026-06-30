"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Scale } from "lucide-react";

const navLinks = [
  { label: "Inicio",    href: "#inicio" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Servicios",href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled]   = useState(false);
  const [isMenuOpen, setIsMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/97 backdrop-blur-xl shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div
              className="w-9 h-9 flex items-center justify-center rounded"
              style={{ background: "var(--teal)", boxShadow: "0 4px 16px rgba(45,212,191,0.3)" }}
            >
              <Scale className="w-4 h-4 text-slate-900" />
            </div>
            <div className="hidden sm:block">
              <p
                className="font-serif font-bold text-base leading-tight"
                style={{ color: isScrolled ? "#0d1117" : "#fff" }}
              >
                Abg. John Eriquez
              </p>
              <p
                className="text-[9px] font-semibold tracking-[0.22em] uppercase"
                style={{ color: isScrolled ? "var(--teal)" : "rgba(45,212,191,0.85)" }}
              >
                Abogado & Consultor Legal
              </p>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleAnchor(e, l.href)}
                className={`text-[13px] font-medium tracking-wide transition-colors hover:text-teal-400 relative group ${
                  isScrolled ? "text-gray-600" : "text-white/80"
                }`}
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-teal-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <a href="#contacto" onClick={(e) => handleAnchor(e, "#contacto")} className="btn-primary text-sm">
              Agendar Consulta
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen
              ? <X className={`w-6 h-6 ${isScrolled ? "text-gray-800" : "text-white"}`} />
              : <Menu className={`w-6 h-6 ${isScrolled ? "text-gray-800" : "text-white"}`} />
            }
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-6 py-5 space-y-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleAnchor(e, l.href)}
                className="flex items-center gap-3 py-3 text-gray-700 font-medium text-sm border-b border-gray-50 hover:text-teal-500 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                {l.label}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#contacto"
                onClick={(e) => handleAnchor(e, "#contacto")}
                className="btn-primary w-full justify-center"
              >
                Agendar Consulta
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}