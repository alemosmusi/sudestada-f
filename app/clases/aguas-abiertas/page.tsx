"use client";

import Image from "next/image";

export default function AguasAbiertasPage() {
  return (
    <main className="bg-sky-50">

      {/* HERO */}
      <section className="relative h-[50vh] md:h-[70vh] flex items-center justify-center text-center text-white">
        <Image
          src="/clases-aguas1.avif"
          alt="Aguas abiertas"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <h1 className="relative text-3xl md:text-5xl font-extrabold px-4">
          AGUAS ABIERTAS <br />
          <span className="text-lg md:text-2xl font-light">
            “nadar en el Mar es toda una aventura”
          </span>
        </h1>
      </section>

      {/* BLOQUE 1 – CLASES */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* FOTO */}
        <div className="relative w-full h-80 rounded-xl overflow-hidden shadow">
          <Image
            src="/clases-aguas2.avif"
            alt="Clases de aguas abiertas"
            fill
            className="object-cover"
          />
        </div>

        {/* TEXTO */}
        <div>
          <h2 className="text-3xl font-bold text-sky-800 mb-4">Clases</h2>

          <p className="text-lg leading-relaxed text-sky-900">
            Viví esta experiencia única de la mano de nuestro equipo de
            profesionales. Instructores y guardavidas te acompañarán durante
            todo el recorrido para que puedas lograr tu objetivo de la manera
            más segura.
          </p>
        </div>
      </section>

      {/* BLOQUE 2 – INICIACIÓN */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* TEXTO */}
        <div>
          <h2 className="text-3xl font-bold text-sky-800 mb-4">Iniciación</h2>

          <ul className="space-y-2 text-sky-900 text-lg">
            <li>✔ Programa especial de ambientación nivel 1 y 2</li>
            <li>✔ Ideal para quienes nunca nadaron en mar</li>
            <li>✔ Acompañamiento profesional permanente</li>
            <li>✔ Equipo de seguridad y traje de neoprene incluidos</li>
            <li>✔ Duración de la clase en base al objetivo</li>
          </ul>
        </div>

        {/* FOTO */}
        <div className="relative w-full h-80 rounded-xl overflow-hidden shadow">
          <Image
            src="/clases-aguas3.avif"
            alt="Iniciación aguas abiertas"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* BLOQUE 3 – NIVEL MEDIO Y AVANZADO */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* FOTO */}
        <div className="relative w-full h-80 rounded-xl overflow-hidden shadow">
          <Image
            src="/clases-aguas4.avif"
            alt="Nivel avanzado aguas abiertas"
            fill
            className="object-cover"
          />
        </div>

        {/* TEXTO */}
        <div>
          <h2 className="text-3xl font-bold text-sky-800 mb-4">
            Nivel Medio y Avanzado
          </h2>

          <ul className="space-y-2 text-sky-900 text-lg">
            <li>✔ Planes específicos según el objetivo</li>
            <li>✔ Carreras – entrenamientos – acondicionamiento</li>
            <li>✔ Acompañamiento profesional permanente</li>
            <li>✔ Equipo de seguridad y traje de neoprene incluidos</li>
            <li>✔ Duración de la clase en base al objetivo</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
