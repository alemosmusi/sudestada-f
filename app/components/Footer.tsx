"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-sky-600 text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* LOGO CENTRADO */}
        <div className="flex flex-col items-center justify-center text-center">
          <Image
            src="/logofondotransp320.png"
            alt="Sudestada Escuela de Surf"
            width={160}
            height={160}
            className="w-40 h-auto"
          />
        </div>

        {/* LINKS RÁPIDOS */}
        <div>
          <h4 className="font-semibold mb-2">Navegación</h4>
          <ul className="space-y-1">
            <li><Link href="/" className="hover:underline">Inicio</Link></li>
            <li><Link href="/quienes-somos" className="hover:underline">Quiénes somos</Link></li>
            <li><Link href="/los-profes" className="hover:underline">Los profes</Link></li>
            <li><Link href="/contacto" className="hover:underline">Contacto</Link></li>
          </ul>
        </div>

        {/* CONTACTO */}
        <div>
          <h4 className="font-semibold mb-2">Contacto</h4>

          
          <p>📍
            <a
            href="https://maps.app.goo.gl/C6p6ncHirta16EpG8"
            target="_blank"
              className="underline"
            >
               Pinamar – Buenos Aires
            </a>
            </p>
          <p>
            📞{" "}
            <a
              href="https://wa.me/5492254587288"
              target="_blank"
              className="underline"
            >
              +54 9 2254 587288
            </a>
          </p>

          <p>
            📸{" "}
            <a
              href="https://www.instagram.com/sudestadapinamar?igsh=MTNudTVhbzM1cTJueQ=="
              target="_blank"
              className="underline"
            >
              Seguinos en Instagram
            </a>
          </p>
        </div>
      </div>

      <div className="bg-sky-800 text-center py-3 text-sm">
        © {new Date().getFullYear()} Sudestada Escuela de Surf – Todos los derechos reservados
      </div>
    </footer>
  );
}
