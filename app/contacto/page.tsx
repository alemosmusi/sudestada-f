"use client";

import Image from "next/image";
import Link from "next/link";

export default function ContactoPage() {
  return (
    <main className="bg-sky-50 min-h-screen">

      {/* HERO */}
      <section className="relative h-[45vh] md:h-[65vh] flex items-center justify-center text-white text-center">
      <Image
  src="/contacto.avif"
  alt="Contacto Sudestada"
  fill
  className="object-cover object-[center_20%]"
/>
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative text-4xl md:text-6xl font-extrabold">
          CONTACTANOS
        </h1>
      </section>

      {/* CONTENIDO */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-sky-800 text-center mb-6">
          Estamos online todos los días 🌊
        </h2>

        <p className="text-lg text-sky-900 text-center max-w-3xl mx-auto mb-12">
          Escribinos por WhatsApp o Instagram para reservas, clases o consultas.
        </p>

        {/* ICONOS */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">

          {/* WhatsApp */}
          <Link
            href="https://wa.me/5492254587288"
            target="_blank"
            className="flex flex-col items-center gap-3 hover:scale-105 transition"
          >
            <Image
              src="/whatsapp.png"
              alt="WhatsApp"
              width={110}
              height={110}
            />
            <span className="text-xl font-semibold text-sky-800">
              WhatsApp
            </span>
          </Link>

          {/* Instagram */}
          <Link
            href="https://www.instagram.com/sudestadapinamar/"
            target="_blank"
            className="flex flex-col items-center gap-3 hover:scale-105 transition"
          >
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={110}
              height={110}
            />
            <span className="text-xl font-semibold text-sky-800">
              Instagram
            </span>
          </Link>
        </div>

        {/* MAPA */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-sky-800 text-center mb-6">
            ¿Dónde estamos?
          </h3>

          <div className="w-full h-96 rounded-2xl overflow-hidden shadow border">
            <iframe
              src="https://maps.google.com/maps?q=Sudestada%20Pinamar&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0 }}
            />
          </div>

          <p className="mt-4 text-center text-sky-900 text-lg">
            Pinamar – Buenos Aires – Argentina
          </p>
        </div>
      </section>
    </main>
  );
}
