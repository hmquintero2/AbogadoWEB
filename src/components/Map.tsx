"use client";

import { MapPin } from "lucide-react";

export default function Map() {
  return (
    <section className="relative">
      {/* Header sobre el mapa */}
      <div
        className="relative z-10 flex items-center justify-center gap-3 py-4 bg-dark"
        style={{ borderTop: "1px solid rgba(58, 201, 201, 0.21)" }}
      >
        <MapPin className="w-4 h-4 text-amber-500" />
        <p className="text-gray-400 text-sm">
          <span className="text-white font-medium">Ubicación:</span>{" "}
          Urbanización Casales Frutillar — Ecuador
        </p>
      </div>

      {/* Mapa */}
      <div className="relative w-full h-80 sm:h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.4503077197879!2d-78.32055363052012!3d-0.16769705888990888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d592ebbc5cecb9%3A0x506cba1b171c3408!2sUrbanizaci%C3%B3n%20Casales%20Frutillar!5e0!3m2!1ses!2sec!4v1781203058235!5m2!1ses!2sec"
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}