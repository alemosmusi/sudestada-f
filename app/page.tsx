import Link from "next/link";
import ReviewsSection from "./components/ReviewsSection";

export default function Home() {

  const mensaje = encodeURIComponent("Hola Sudestada! Quiero reservar una clase 🌊");
  const whatsapp = `https://wa.me/5492254587288?text=${mensaje}`;







  return (
    <main className="min-h-screen bg-sky-50">

      {/* HERO */}
      <section
        className="h-[90vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/fotohome.avif')"
        }}
      >
        <div className="backdrop-brightness-75 p-6 rounded-xl">

          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
            Sudestada Escuela de Surf
          </h1>

          <p className="mt-4 text-xl text-white">
            Todo el mundo puede surfear… ¡Animate!
          </p>

          <a href={whatsapp} target="_blank" rel="noopener noreferrer">
            <button className="mt-6 px-8 py-3 text-lg font-semibold rounded-full shadow-xl bg-cyan-400 hover:bg-cyan-300 transition">
              Reservar por WhatsApp
            </button>
          </a>

        </div>
      </section>

      {/* SERVICIOS */}
{/* SERVICIOS */}
<section className="max-w-5xl mx-auto py-16 px-6">

  <h2 className="text-3xl font-bold text-sky-700 text-center">
    Clases que ofrecemos
  </h2>

  <div className="grid md:grid-cols-2 gap-6 mt-8">

    {/* SURF */}
    <Link
      href="/clases/surf"
      className="relative h-56 rounded-xl overflow-hidden shadow group cursor-pointer"
    >
      <div
        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition"
        style={{ backgroundImage: "url('/surffotohome.avif')" }}
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h3 className="text-2xl font-bold">Surf</h3>
        <p className="text-sm opacity-90">
          Iniciación • Nivel medio • Perfeccionamiento
        </p>
      </div>
    </Link>

    {/* SUP */}
    <Link
      href="/clases/sup"
      className="relative h-56 rounded-xl overflow-hidden shadow group cursor-pointer"
    >
      <div
        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition"
        style={{ backgroundImage: "url('/supfotohome.avif')" }}
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h3 className="text-2xl font-bold">Paddle Surf (SUP)</h3>
        <p className="text-sm opacity-90">
          Remá, disfrutá y conectá con el mar
        </p>
      </div>
    </Link>

    {/* AGUAS ABIERTAS */}
    <Link
      href="/clases/aguas-abiertas"
      className="relative h-56 rounded-xl overflow-hidden shadow group cursor-pointer"
    >
      <div
        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition"
        style={{ backgroundImage: "url('/aguasfotohome.avif')" }}
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h3 className="text-2xl font-bold">Aguas abiertas</h3>
        <p className="text-sm opacity-90">
          Técnica, seguridad y disfrute en el mar
        </p>
      </div>
    </Link>

    {/* PEQUE SURF */}
    <Link
      href="/clases/peque-surf"
      className="relative h-56 rounded-xl overflow-hidden shadow group cursor-pointer"
    >
      <div
        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition"
        style={{ backgroundImage: "url('/pequefotohome.avif')" }}
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h3 className="text-2xl font-bold">Peque Surf</h3>
        <p className="text-sm opacity-90">
          Para los más chicos, jugando y aprendiendo
        </p>
      </div>
    </Link>

  </div>

</section>

<ReviewsSection />


    </main>
  );
}
