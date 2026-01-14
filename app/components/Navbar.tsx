"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  // 🔒 cerrar al scrollear
  useEffect(() => {
    const onScroll = () => setOpen(false);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="w-full bg-sky-900 shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-1 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" onClick={closeMenu}>
          <Image
            src="/logo-sudestada.avif"
            alt="logo sudestada"
            width={120}
            height={120}
            className="cursor-pointer"
          />
        </Link>

        {/* HAMBURGER */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* DESKTOP */}
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

      {/* MOBILE */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="bg-sky-800 text-white border-t flex flex-col"
          onClick={closeMenu}
        >
          <div className="px-4 py-2 font-semibold">Nosotros</div>
          <Link className="block px-6 py-2" href="/quienes-somos">Quiénes somos</Link>
          <Link className="block px-6 py-2" href="/los-profes">Los profes</Link>

          <div className="px-4 py-2 font-semibold mt-2">Clases</div>
          <Link className="block px-6 py-2" href="/clases/surf">Surf</Link>
          <Link className="block px-6 py-2" href="/clases/sup">SUP</Link>
          <Link className="block px-6 py-2" href="/clases/aguas-abiertas">Aguas abiertas</Link>
          <Link className="block px-6 py-2" href="/clases/peque-surf">Peque surf</Link>

          <Link className="block px-6 py-2 font-semibold mt-2" href="/contacto">
            Contactanos
          </Link>
        </div>
      </div>
    </nav>
  );
}
