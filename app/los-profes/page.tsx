"use client";

import Image from "next/image";
import { useState } from "react";

export default function LosProfesPage() {
  const profes = [
    { nombre: "PATO", foto: "/profe_pato.jpeg" },
    { nombre: "PAO", foto: "/profe_pao.jpg" },
    { nombre: "COTI", foto: "/profe_coti.jpg" },
    { nombre: "JONI", foto: "/profe_joni.jpeg" },
    { nombre: "LUCAS", foto: "/profe_lucas.jpeg" },
    { nombre: "NICO", foto: "/profe_nico.jpg" },
    { nombre: "NICO", foto: "/profe_nico2.jpeg" },
    { nombre: "CAMI", foto: "/profe_cami.jpg" },
    { nombre: "LICHA", foto: "/profe_lichaa.jpg" },
    { nombre: "MAX", foto: "/profe_max.jpg" },
    { nombre: "LA NEGRA", foto: "/profe_lanegra.jpg" },
  ];

  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? profes.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i + 1) % profes.length);

  return (
    <main className="bg-sky-50">

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center text-white
                          bg-sky-900
                          h-[40vh] md:h-[60vh]">

        <Image
          src="/los-profes1.avif"
          alt="ola"
          fill
          className="object-cover opacity-70"
        />

        {/* overlay para legibilidad */}
        <div className="absolute inset-0 bg-black/40" />

        <h1 className="relative text-4xl md:text-5xl font-extrabold tracking-wider z-10">
          NUESTROS PROFES
        </h1>
      </section>

      {/* FOTO + TEXTO */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">

        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow">
          <Image
            src="/los-profes2.jpg"
            alt="Los profes Sudestada"
            fill
            className="object-contain bg-black"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-sky-800 mb-4">
            LOS PROFES
          </h2>

          <p className="text-lg leading-relaxed text-sky-900">
            No son los mejores simplemente porque clase a clase logran trasmitir ese amor por lo que hacen, o por darte seguridad y apoyo en todo momento sin dejar de lado la diversión en el agua; lo son también por su profesionalidad. 
 
            <br /><br />
            Instructores de Surf, Profesores/as de Educación Física, Instructores de Natación y Guardavidas; son quienes te acompañaran en todas tus clases, brindándote un aprendizaje seguro y significativo. Quedas en las manos de quienes mejor conocen el mar, para que vos solo te ocupes de disfrutarlo!
          </p>
        </div>
      </section>

      {/* CARRUSEL */}
      <section className="bg-white py-16">
        <h3 className="text-center text-2xl font-bold text-sky-800 mb-8">
          Conocé al equipo
        </h3>

        <div className="max-w-xl mx-auto flex flex-col items-center">

          <div className="relative w-72 h-72 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={profes[index].foto}
              alt={profes[index].nombre}
              fill
              className="object-cover"
            />
          </div>

          <p className="mt-4 text-xl font-semibold text-sky-900">
            {profes[index].nombre}
          </p>

          <div className="mt-6 flex gap-6">
            <button
              onClick={prev}
              className="px-4 py-2 bg-sky-800 text-white rounded-lg"
            >
              ◀
            </button>

            <button
              onClick={next}
              className="px-4 py-2 bg-sky-800 text-white rounded-lg"
            >
              ▶
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
