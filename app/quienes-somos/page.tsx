import Image from "next/image";

export default function QuienesSomosPage() {
  return (
    <main>

      {/* BLOQUE 1 — FOTO + TEXTO */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">

        {/* FOTO */}
        <div className="relative w-full h-80 rounded-xl overflow-hidden shadow">
          <Image
            src="/quienes-somos1.avif"
            alt="Surf Sudestada"
            fill
            className="object-cover"
          />
        </div>

        {/* TEXTO */}
        <div>
          <h2 className="text-3xl font-bold text-sky-800 mb-4 text-center md:text-left">
            Quiénes somos
          </h2>

          <p className="text-lg leading-relaxed">
            Todo arrancó en el verano del 2013 como una linda propuesta de temporada,
            un nuevo proyecto familiar. Desde siempre el MAR fue algo que nos unió como familia,
            pensar en la playa es hablar de los momentos más lindos que pasamos juntos.
            Así fue que surgió <strong>SUDESTADA</strong>, un espacio donde transmitir nuestro
            amor por el SURF, el MAR y las OLAS; un lugar para seguir creando “buenos momentos”,
            nuestra llamada <strong>“casita de playa”</strong>.
          </p>
        </div>
      </section>

      {/* BLOQUE 2 — FOTO + TEXTO + FOTO */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 items-center">

        {/* FOTO IZQUIERDA */}
        <div className="relative w-full h-72 rounded-xl overflow-hidden shadow order-1">
          <Image
            src="/quienes-somos2.avif"
            alt="Sudestada equipo"
            fill
            className="object-cover"
          />
        </div>

        {/* TEXTO CENTRO */}
        <div className="order-2">
          <p className="text-lg leading-relaxed text-center md:text-left">
            Con el tiempo se fueron sumando más integrantes al equipo, otros locos y
            locas como nosotrxs, amantes de las OLAS y de este estilo de vida tan lindo.
            Se fueron incorporando nuevas disciplinas, se agregaron propuestas,
            cambiamos de espacio, mejoramos “nuestra casita”, la llenamos de arte…
            Y así es que llegamos a ser lo que somos: una de las Escuelas más reconocidas
            de la zona y, sin duda, <strong>¡EL MEJOR EQUIPO!</strong>
          </p>
        </div>

        {/* FOTO DERECHA */}
        <div className="relative w-full h-72 rounded-xl overflow-hidden shadow order-3">
          <Image
            src="/quienes-somos3.avif"
            alt="Aguas abiertas Sudestada"
            fill
            className="object-cover"
          />
        </div>
      </section>
    </main>
  );
}
