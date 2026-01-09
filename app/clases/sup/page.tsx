"use client";

import Image from "next/image";

export default function ClasesSupPage() {
  return (
    <main className="bg-sky-50">

      {/* HERO */}
      <section className="relative h-[50vh] md:h-[70vh] flex items-center justify-center text-center text-white">
        <Image
          src="/clases-sup1.avif"
          alt="Clases de SUP"
          fill
          className="object-cover"
        />

        {/* oscurecer para que el título se lea bien */}
        <div className="absolute inset-0 bg-black/50" />

        <h1 className="relative text-4xl md:text-6xl font-extrabold px-4">
          CLASES DE SUP
        </h1>
      </section>

      {/* BLOQUE 1 – CLASES */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* FOTO */}
        <div className="relative w-full h-80 rounded-xl overflow-hidden shadow">
          <Image
            src="/clases-sup2.avif"
            alt="Clases de SUP"
            fill
            className="object-cover"
          />
        </div>

        {/* TEXTO */}
        <div>
          <h2 className="text-3xl font-bold text-sky-800 mb-4">Clases</h2>

          <p className="text-lg leading-relaxed text-sky-900">
            El Paddle Surf o SUP es un deporte que cada vez tiene más aficionados…
            ¿por qué será? ¡Descubrilo vos mismo! Vení a remar con nosotros.
            <br /><br />
            Podés intentar surfearte una olita o simplemente salir a remar mar
            adentro con tu profe; el desafío es personal… ¡animate!
          </p>
        </div>
      </section>

      {/* BLOQUE 2 – INICIACIÓN / NIVEL MEDIO */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* TEXTO */}
        <div>
          <h2 className="text-3xl font-bold text-sky-800 mb-4">
            Iniciación / Nivel Medio
          </h2>

          <ul className="space-y-2 text-sky-900 text-lg">
            <li>✔ Clase personalizada: un profe – un alumno</li>
            <li>✔ Acompañamiento permanente dentro y fuera del mar</li>
            <li>✔ Duración: 50′ aprox.</li>
            <li>✔ Traje de neoprene corto y tabla incluidos</li>
          </ul>
        </div>

        {/* FOTO */}
        <div className="relative w-full h-80 rounded-xl overflow-hidden shadow">
          <Image
            src="/clases-sup3.avif"
            alt="SUP nivel medio"
            fill
            className="object-cover"
          />
        </div>
      </section>
    </main>
  );
}
