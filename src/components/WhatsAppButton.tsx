"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/593961802045?text=Hola%2C%20quisiera%20solicitar%20una%20consulta%20legal."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full px-5 py-3 text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
      style={{
        background: "#25d366",
        boxShadow: "0 4px 24px rgba(37, 211, 102, 0.45)",
      }}
    >
      {/* Ping animado */}
      <span
        className="absolute inset-0 rounded-full animate-ping"
        style={{ backgroundColor: "rgba(37, 211, 102, 0.3)" }}
      />

      {/* Ícono en círculo */}
      <span className="relative z-10 w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: "rgba(255,255,255,0.2)" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-white"
        >
          <path d="M12.001 2C6.477 2 2 6.477 2 12c0 1.89.524 3.655 1.435 5.163L2 22l4.978-1.417A9.953 9.953 0 0 0 12.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 1.8A8.2 8.2 0 1 1 3.8 12a8.173 8.173 0 0 1 1.07-4.05l.222-.375-.64-2.303 2.358.627.36-.205A8.17 8.17 0 0 1 12.001 3.8zM8.937 7.2c-.196 0-.513.073-.783.368C7.885 7.86 7.1 8.6 7.1 10.1s1.04 3.063 1.185 3.275c.146.211 2.016 3.2 4.948 4.362 2.453.968 2.934.776 3.463.727.528-.049 1.703-.696 1.944-1.368.24-.672.24-1.248.168-1.368-.073-.12-.267-.193-.56-.34-.292-.145-1.703-.84-1.967-.936-.263-.097-.454-.145-.645.146-.192.29-.74.935-.907 1.127-.168.193-.336.218-.627.073-.292-.145-1.232-.454-2.348-1.449-.867-.773-1.452-1.727-1.621-2.019-.17-.293-.018-.45.127-.595.13-.13.292-.34.437-.51.146-.17.195-.29.292-.483.098-.193.05-.363-.024-.51-.073-.146-.638-1.562-.882-2.135-.22-.52-.45-.52-.627-.528l-.53-.01z" />
        </svg>
      </span>

      {/* Texto */}
      <span className="relative z-10 flex flex-col leading-tight">
        <span className="text-xs" style={{ color: "rgba(255,255,255,0.85)" }}>
          Escríbenos
        </span>
        <span className="text-sm font-semibold text-white">WhatsApp</span>
      </span>
    </a>
  );
}