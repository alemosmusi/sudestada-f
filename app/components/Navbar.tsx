"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-sky-900 shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-1 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/logo-sudestada.avif"
              alt="logo sudestada"
              width={120}
              height={120}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* HAMBURGUER MOBILE */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* LINKS DESKTOP */}
        <ul className="hidden md:flex gap-6 font-medium text-white">

          {/* NOSOTROS */}
          <li className="relative group cursor-pointer">
            <span>Nosotros</span>

            <ul className="absolute hidden group-hover:block bg-sky-800 text-white shadow rounded top-full left-0">

              <li>
                <Link className="block px-4 py-2 hover:bg-sky-700" href="/quienes-somos">
                  Quiénes somos
                </Link>
              </li>

              <li>
                <Link className="block px-4 py-2 hover:bg-sky-700" href="/los-profes">
                  Los profes
                </Link>
              </li>

            </ul>
          </li>

          {/* CLASES */}
          <li className="relative group cursor-pointer">
            <span>Clases</span>

            <ul className="absolute hidden group-hover:block bg-sky-800 text-white shadow rounded top-full left-0">

              <li><Link className="block px-4 py-2 hover:bg-sky-700" href="/clases/surf">Surf</Link></li>
              <li><Link className="block px-4 py-2 hover:bg-sky-700" href="/clases/sup">SUP</Link></li>
              <li><Link className="block px-4 py-2 hover:bg-sky-700" href="/clases/aguas-abiertas">Aguas abiertas</Link></li>
              <li><Link className="block px-4 py-2 hover:bg-sky-700" href="/clases/peque-surf">Peque surf</Link></li>

            </ul>
          </li>

          {/* CONTACTO */}
          <li>
            <Link href="/contacto" className="hover:text-sky-300">
              Contactanos
            </Link>
          </li>

        </ul>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-sky-800 text-white border-t">

          <div className="px-4 py-2 font-semibold">Nosotros</div>
          <Link className="block px-6 py-2" href="/quienes-somos">Quiénes somos</Link>
          <Link className="block px-6 py-2" href="/los-profes">Los profes</Link>

          <div className="px-4 py-2 font-semibold mt-2">Clases</div>
          <Link className="block px-6 py-2" href="/clases/surf">Surf</Link>
          <Link className="block px-6 py-2" href="/clases/sup">SUP</Link>
          <Link className="block px-6 py-2" href="/clases/aguas-abiertas">Aguas abiertas</Link>
          <Link className="block px-6 py-2" href="/clases/peque-surf">Peque surf</Link>

          <div className="px-4 py-2 font-semibold mt-2">
            <Link className="block px-2 py-2" href="/contacto">Contactanos</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
