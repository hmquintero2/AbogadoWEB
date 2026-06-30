import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Dr. Jhon Enriquez",
  description: "Términos y condiciones de uso del Despacho Jurídico Dr. Carlos Mendoza.",
};

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div
        className="py-24 text-center"
        style={{ background: "linear-gradient(135deg, #0f1729 0%, #1e2a4a 100%)" }}
      >
        <h1 className="font-serif text-4xl font-bold text-white">Términos y Condiciones</h1>
        <p className="text-gray-400 mt-2 text-sm">Última actualización: noviembre 2024</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 prose prose-gray max-w-none">
          <h2 className="font-serif text-2xl font-bold text-gray-900">1. Aceptación</h2>
          <p className="text-gray-600 leading-relaxed">
            El acceso y uso de este sitio web implica la aceptación plena de los presentes
            términos y condiciones de uso. Si no está de acuerdo, le rogamos que no utilice
            este sitio web.
          </p>

          <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">
            2. Propiedad Intelectual
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Todos los contenidos de este sitio web (textos, imágenes, diseño, código)
            son propiedad del Dr. Carlos Mendoza y están protegidos por derechos de autor.
            Queda prohibida su reproducción sin autorización expresa.
          </p>

          <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">
            3. Limitación de Responsabilidad
          </h2>
          <p className="text-gray-600 leading-relaxed">
            La información contenida en este sitio web tiene carácter informativo y no
            constituye asesoría jurídica. Para recibir asesoría legal, es necesario
            contratar los servicios profesionales del despacho.
          </p>

          <h2 className="font-serif text-2xl font-bold text-gray-900 mt-8">
            4. Legislación Aplicable
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Estos términos se rigen por la legislación Ecuatoriana. Cualquier controversia
            se someterá a la jurisdicción de los tribunales competentes de la Ciudad de Quito.
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