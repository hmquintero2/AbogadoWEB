import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de Privacidad | Dr. Carlos Mendoza",
  description: "Aviso de privacidad del Despacho Jurídico Dr. Carlos Mendoza.",
};

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div
        className="py-24 text-center"
        style={{
          background: "linear-gradient(135deg, #0f1729 0%, #1e2a4a 100%)",
        }}
      >
        <h1 className="font-serif text-4xl font-bold text-white">Aviso de Privacidad</h1>
        <p className="text-gray-400 mt-2 text-sm">Última actualización: noviembre 2024</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 prose prose-gray max-w-none">
          <h2 className="font-serif text-2xl font-bold text-gray-900">1. Responsable del Tratamiento</h2>
          <p className="text-gray-600 leading-relaxed">
            El Dr. Carlos Mendoza, con domicilio en Av. Reforma 222, Torre Platinum, Piso 18,
            Ciudad de Guatemala, es responsable del tratamiento de sus datos personales.
          </p>

          <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">2. Datos Recabados</h2>
          <p className="text-gray-600 leading-relaxed">
            Recabamos datos de identificación (nombre, correo electrónico, teléfono) y datos
            relacionados con su consulta jurídica, con la finalidad de brindarle asesoría legal.
          </p>

          <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">3. Uso de la Información</h2>
          <p className="text-gray-600 leading-relaxed">
            Sus datos serán utilizados exclusivamente para contactarle, gestionar su consulta
            y proveer los servicios jurídicos solicitados. No compartimos su información con terceros.
          </p>

          <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">4. Derechos ARCO</h2>
          <p className="text-gray-600 leading-relaxed">
            Puede ejercer sus derechos de Acceso, Rectificación, Cancelación y Oposición
            enviando una solicitud a: contacto@carlosmendozaabogado.com
          </p>

          <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">5. Seguridad</h2>
          <p className="text-gray-600 leading-relaxed">
            Implementamos medidas de seguridad técnicas y organizativas para proteger
            sus datos contra acceso no autorizado, pérdida o destrucción.
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