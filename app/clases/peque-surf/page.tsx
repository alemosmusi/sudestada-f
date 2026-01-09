"use client";

import Image from "next/image";

export default function PequeSurfPage() {
  return (
    <main className="bg-orange-50">

      {/* HERO */}
      <section className="relative h-[50vh] md:h-[70vh] flex items-center justify-center text-center text-white">
        <Image
          src="/clases-peque1.avif"
          alt="Peque surf"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <h1 className="relative text-3xl md:text-5xl font-extrabold px-4">
          PEQUE SURF
        </h1>
      </section>

      {/* BLOQUE 1 – CLASES */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* FOTO */}
        <div className="relative w-full h-80 rounded-xl overflow-hidden shadow">
          <Image
            src="/clases-peque2.avif"
            alt="Clases Peque Surf"
            fill
            className="object-cover"
          />
        </div>

        {/* TEXTO */}
        <div>
          <h2 className="text-3xl font-bold text-sky-900 mb-4">Clases</h2>

          <p className="text-lg leading-relaxed text-sky-900">
            El programa “Peque Surf” es una propuesta de ambientación al medio
            acuático diseñada para los más chiquitos. A través del juego y el
            surf aprenderán técnicas y ejercicios que les permitirán moverse con
            mayor autonomía y seguridad dentro del mar.
          </p>
        </div>
      </section>

      {/* BLOQUE 2 – DETALLES */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* TEXTO */}
        <div>
          <h2 className="text-3xl font-bold text-sky-900 mb-4">
            Información
          </h2>

          <ul className="space-y-2 text-sky-900 text-lg">
            <li>✔ Edad: 4 a 7 años</li>
            <li>✔ Requisitos: ninguno</li>
            <li>✔ Duración de la clase: 40 minutos aprox</li>
            <li>✔ Equipo de surf y materiales didácticos incluidos</li>
            <li>✔ Acompañamiento permanente dentro del agua</li>
            <li>✔ Profesores titulados y guardavidas a cargo</li>
          </ul>
        </div>

        {/* FOTO */}
        <div className="relative w-full h-80 rounded-xl overflow-hidden shadow">
          <Image
            src="/clases-peque3.avif"
            alt="Niños surf"
            fill
            className="object-cover"
          />
        </div>
      </section>
    </main>
  );
}
