import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Protección de Datos | Dr. Carlos Mendoza",
  description: "Política de protección de datos del Despacho Jurídico Dr. Carlos Mendoza.",
};

export default function ProteccionDatosPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div
        className="py-24 text-center"
        style={{ background: "linear-gradient(135deg, #0f1729 0%, #1e2a4a 100%)" }}
      >
        <h1 className="font-serif text-4xl font-bold text-white">
          Política de Protección de Datos
        </h1>
        <p className="text-gray-400 mt-2 text-sm">Última actualización: noviembre 2024</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 prose prose-gray max-w-none">
          <h2 className="font-serif text-2xl font-bold text-gray-900">1. Base Legal</h2>
          <p className="text-gray-600 leading-relaxed">
            El tratamiento de datos personales se realiza bajo las bases legales de
            consentimiento informado y cumplimiento de obligaciones contractuales,
            conforme a la legislación aplicable en materia de protección de datos.
          </p>

          <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">
            2. Período de Conservación
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Los datos se conservan durante el tiempo necesario para prestar el servicio
            jurídico contratado y durante los plazos legales de prescripción aplicables,
            con un máximo de 5 años salvo obligación legal contraria.
          </p>

          <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">
            3. Transferencias Internacionales
          </h2>
          <p className="text-gray-600 leading-relaxed">
            No realizamos transferencias internacionales de datos personales. Toda la
            información se procesa en servidores seguros ubicados en territorio nacional.
          </p>

          <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">
            4. Cookies
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Este sitio web utiliza cookies técnicas esenciales para su funcionamiento.
            No utilizamos cookies de seguimiento o publicidad sin su consentimiento previo.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-semibold rounded-lg"
            style={{ background: "linear-gradient(135deg, #b45309, #f59e0b)" }}
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}