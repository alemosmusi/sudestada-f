"use client";

import Image from "next/image";

export default function ClasesSurfPage() {
  return (
    <main className="bg-sky-50">

      {/* HERO */}
      <section className="relative h-[50vh] md:h-[70vh] flex items-center justify-center text-center text-white">
        <Image
          src="/clases-surf1.avif"
          alt="Clases de surf"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <h1 className="relative text-4xl md:text-6xl font-extrabold px-4">
          CLASES DE SURF <br />
          <span className="text-sky-200">TODOS LOS NIVELES- TODAS LAS EDADES</span>
        </h1>
      </section>

      {/* SECTION 1 – CLASES */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* FOTO */}
        <div className="relative w-full h-80 rounded-xl overflow-hidden shadow">
          <Image
            src="/clases_surf2.jpg"
            alt="Clases de surf"
            fill
            className="object-cover"
          />
        </div>

        {/* TEXTO */}
        <div>
          <h2 className="text-3xl font-bold text-sky-800 mb-4">Clases</h2>

          <p className="text-lg leading-relaxed text-sky-900">
            Nuestras clases de Surf son personalizadas, por lo que nos adaptamos a
            todos los niveles y a todas las edades. No importa si es tu primera vez,
            si tenés experiencia, si se te dan bien los deportes o si simplemente querés
            experimentar el deslizarte en una ola: lo importante es tener ganas de
            conectar con el mar y divertirte.
          </p>
        </div>
      </section>

      {/* SECTION 2 – INICIACIÓN Y NIVEL MEDIO */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* TEXTO */}
        <div>
          <h2 className="text-3xl font-bold text-sky-800 mb-4">Iniciación y nivel medio</h2>

          <p className="text-lg leading-relaxed text-sky-900 mb-4">
            Viví tus primeras experiencias de la mano de los mejores profes.
          </p>

          <ul className="space-y-2 text-sky-900">
            <li>✔ Clase personalizada: un profe – un alumno</li>
            <li>✔ Acompañamiento permanente dentro y fuera del mar</li>
            <li>✔ Todas las edades, a partir de los 4 años </li>
            <li>✔ Duración: 50 minutos aprox.</li>
            <li>✔ Traje de neoprene y tabla incluidos</li>
          </ul>
        </div>

        {/* FOTO */}
        <div className="relative w-full h-80 rounded-xl overflow-hidden shadow">
          <Image
            src="/clases-surf3.avif"
            alt="Iniciación surf"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* SECTION 3 – PERFECCIONAMIENTO */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* FOTO */}
        <div className="relative w-full h-80 rounded-xl overflow-hidden shadow">
          <Image
            src="/clases-surf4.avif"
            alt="Perfeccionamiento surf"
            fill
            className="object-cover"
          />
        </div>

        {/* TEXTO */}
        <div>
          <h2 className="text-3xl font-bold text-sky-800 mb-4">Perfeccionamiento</h2>

          <p className="text-lg leading-relaxed text-sky-900 mb-4">
            Perfeccioná tu técnica, animate a nuevos desafíos.
          </p>

          <ul className="space-y-2 text-sky-900">
            <li>✔ Clase personalizada</li>
            <li>✔ Objetivos específicos</li>
            <li>✔ Duración: 1 hora aprox.</li>
            <li>✔ Traje de neoprene incluido</li>
          </ul>
        </div>
      </section>

      {/* SECTION 4 – SURF EN FAMILIA */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* TEXTO */}
        <div>
          <h2 className="text-3xl font-bold text-sky-800 mb-4">Surf en familia</h2>

          <p className="text-lg leading-relaxed text-sky-900 mb-4">
            Compartí un momento distinto, disfrutá del mar y divertite en familia.
          </p>

          <ul className="space-y-2 text-sky-900">
            <li>✔ Clase grupal, acompañamiento personalizado permanente</li>
            <li>✔ Mínimo 4 integrantes – edad mínima 6 años</li>
            <li>✔ Duración: 50′ a 1h 30′</li>
            <li>✔ Tablas y neoprene incluidos</li>
          </ul>
        </div>

        {/* FOTO */}
        <div className="relative w-full h-80 rounded-xl overflow-hidden shadow">
          <Image
            src="/clases-surf5.jpg"
            alt="Surf en familia"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* SECTION 5 – SURF EN GRUPO */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* FOTO */}
        <div className="relative w-full h-80 rounded-xl overflow-hidden shadow">
          <Image
            src="/clases-surf6.avif"
            alt="Surf en grupo"
            fill
            className="object-cover"
          />
        </div>

        {/* TEXTO */}
        <div>
          <h2 className="text-3xl font-bold text-sky-800 mb-4">Surf en grupo</h2>

          <p className="text-lg leading-relaxed text-sky-900 mb-4">
            Divertite surfeando con amigos/as, compañeros/as de colegio, o grupo de trabajo. Armamos propuestas especiales para escuelas, universidades, egresados, 15 años, despedidas, festejos, team building empresariales, asociaciones deportivas, gimnasios, etc.
          </p>

          <ul className="space-y-2 text-sky-900">
            <li>✔ Clase grupal con acompañamiento permanente</li>
            <li>✔ Mínimo 8 integrantes</li>
            <li>✔ Duración de la clase: dependiendo de la propuesta</li>
            <li>✔ Tablas y neoprene incluidos</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
