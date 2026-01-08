"use client";

import { useEffect } from "react";

export default function ReviewsSection() {

  useEffect(() => {
    // carga el script solo en el cliente
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="max-w-5xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-sky-700 text-center">
        Opiniones de nuestros alumnos
      </h2>

      <div className="mt-8">
        <div
          className="elfsight-app-bb4d7e4c-95eb-4e0a-aece-5dfc814bcff3"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
}
