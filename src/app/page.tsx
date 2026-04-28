import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF8E7] text-[#2D1B0F]">
      {/* ── Nav ─────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 backdrop-blur-sm bg-[#FFF8E7]/95 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tight">
            🧀 Tu Queso
          </Link>
          <Link
            href={`https://wa.me/56956273260?text=${encodeURIComponent("Hola, quiero pedir queso 🧀")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFC93C] hover:bg-[#FFB800] text-[#2D1B0F] font-bold px-5 py-2.5 rounded-full transition-all hover:scale-105 shadow-lg shadow-[#FFC93C]/30"
          >
            Pedir ahora
          </Link>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#7CB342]/15 border border-[#7CB342]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="size-2 rounded-full bg-[#7CB342] animate-pulse" />
              <span className="text-sm font-semibold text-[#5a8330]">
                Despacho hoy en la zona oriente
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6">
              Queso artesanal{" "}
              <span className="bg-[#FFC93C] px-2 -rotate-1 inline-block">
                a tu puerta
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[#2D1B0F]/70 mb-8 max-w-lg">
              Sin lactosa. Sin gluten. Hecho a mano en Chile y entregado
              fresquito a tu casa.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={`https://wa.me/56956273260?text=${encodeURIComponent("Hola, quiero pedir queso 🧀")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF6B35] hover:bg-[#e85a25] text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-xl shadow-[#FF6B35]/30 text-center"
              >
                Pedir mi queso <span aria-hidden="true">🧀</span>
              </Link>
              <Link
                href="#suscripcion"
                className="border-2 border-[#2D1B0F] hover:bg-[#2D1B0F] hover:text-[#FFF8E7] font-bold px-8 py-4 rounded-full text-lg transition-all text-center"
              >
                Ver suscripciones
              </Link>
            </div>

            <div className="flex items-center gap-6 mt-10 text-sm text-[#2D1B0F]/60">
              <div className="flex items-center gap-2">
                <span className="text-2xl" aria-hidden="true">⭐</span>
                <span className="font-semibold">100% artesanal</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl" aria-hidden="true">🇨🇱</span>
                <span className="font-semibold">Made in Chile</span>
              </div>
            </div>
          </div>

          {/* Foto del queso (placeholder por ahora — reemplazar con imagen real) */}
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#FFC93C] to-[#FF6B35] shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center text-9xl" aria-hidden="true">
              🧀
            </div>
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-[#2D1B0F]/60">
                    Próxima entrega
                  </p>
                  <p className="font-black text-lg">Mañana antes de las 14h</p>
                </div>
                <span className="text-3xl" aria-hidden="true">🚚</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Beneficios ──────────────────────────────────────── */}
      <section className="bg-[#2D1B0F] text-[#FFF8E7] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            ¿Por qué <span className="text-[#FFC93C] whitespace-nowrap">Tu Queso</span>?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "🧀", title: "Hecho a mano", desc: "Cada queso es trabajado por nuestro equipo artesanal." },
              { icon: "🌱", title: "Sin lactosa", desc: "Apto para intolerantes y celíacos también." },
              { icon: "🚚", title: "Despacho fresco", desc: "Llegamos a la zona oriente todos los días." },
              { icon: "📦", title: "Suscripción flexible", desc: "Pausa, cambia o cancela cuando quieras." },
            ].map((b) => (
              <div key={b.title} className="text-center">
                <div className="text-6xl mb-4" aria-hidden="true">{b.icon}</div>
                <h3 className="text-xl font-black mb-2">{b.title}</h3>
                <p className="text-[#FFF8E7]/70">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Productos ───────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            Elige tu tamaño
          </h2>
          <p className="text-center text-xl text-[#2D1B0F]/60 mb-16">
            Pagas por gramo · el peso exacto se ajusta al despacho
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Pequeño", weight: "500–650g", price: "$6.500 – $8.450", color: "bg-[#FFC93C]" },
              { name: "Mediano", weight: "651–900g", price: "$8.463 – $11.700", color: "bg-[#7CB342]", popular: true },
              { name: "Grande", weight: "901g – 1.2kg", price: "$11.713 – $15.600", color: "bg-[#FF6B35]" },
            ].map((p) => (
              <div
                key={p.name}
                className={`relative rounded-3xl p-8 ${p.color} text-[#2D1B0F] shadow-xl transition-all hover:scale-105 hover:-rotate-1`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2D1B0F] text-[#FFC93C] text-xs font-black px-3 py-1 rounded-full">
                    MÁS POPULAR
                  </span>
                )}
                <div className="text-7xl mb-4" aria-hidden="true">🧀</div>
                <h3 className="text-3xl font-black mb-2">{p.name}</h3>
                <p className="text-sm font-semibold opacity-70 mb-3">{p.weight}</p>
                <p className="text-xl font-bold mb-6">{p.price} CLP</p>
                <Link
                  href={`https://wa.me/56956273260?text=${encodeURIComponent(`Hola, quiero un queso ${p.name.toLowerCase()} 🧀`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#2D1B0F] text-white font-bold py-3 rounded-full text-center hover:bg-[#1a0f08] transition-colors"
                >
                  Pedir {p.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo funciona ───────────────────────────────────── */}
      <section className="bg-[#FFC93C] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            Pedir es ridículamente fácil
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { n: "1", title: "Escríbenos", desc: "Por WhatsApp, en 1 minuto." },
              { n: "2", title: "Reservamos", desc: "Apartamos tu queso del día." },
              { n: "3", title: "Despachamos", desc: "Te avisamos cuando va en camino." },
              { n: "4", title: "Disfrutas", desc: "Tu queso fresco, listo para disfrutar." },
            ].map((s) => (
              <div key={s.n} className="text-center">
                <div className="text-6xl font-black text-[#2D1B0F]/20 mb-2">
                  {s.n}
                </div>
                <h3 className="text-xl font-black mb-2">{s.title}</h3>
                <p className="text-[#2D1B0F]/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Suscripción ─────────────────────────────────────── */}
      <section id="suscripcion" className="py-24 px-6 bg-[#2D1B0F] text-[#FFF8E7]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Suscríbete y <span className="text-[#FFC93C]">ahorra</span>
          </h2>
          <p className="text-xl text-[#FFF8E7]/70 mb-16">
            Hasta 7,5% off + queso gratis cada 8 entregas <span aria-hidden="true">🎁</span>
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Quincenal", desc: "2 quesos al mes", off: "5%", price: "Desde $16.000/mes", best: false },
              { name: "Semanal", desc: "4 quesos al mes", off: "7,5%", price: "Desde $30.000/mes", best: true },
            ].map((p) => (
              <div
                key={p.name}
                className={`rounded-3xl p-8 text-left ${
                  p.best
                    ? "bg-[#FFC93C] text-[#2D1B0F]"
                    : "bg-[#FFF8E7]/5 border border-[#FFF8E7]/10"
                }`}
              >
                <h3 className="text-3xl font-black mb-1">{p.name}</h3>
                <p className="text-lg opacity-70 mb-6">{p.desc}</p>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-5xl font-black">{p.off}</span>
                  <span className="text-lg font-semibold">descuento</span>
                </div>
                <p className="text-lg mb-6">{p.price}</p>
                <Link
                  href={`https://wa.me/56956273260?text=${encodeURIComponent(`Hola, me interesa la suscripción ${p.name} 🧀`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center font-bold py-3 rounded-full transition-all hover:scale-105 ${
                    p.best
                      ? "bg-[#2D1B0F] text-[#FFC93C]"
                      : "bg-[#FFC93C] text-[#2D1B0F]"
                  }`}
                >
                  Quiero esta
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            Preguntas frecuentes
          </h2>
          <div className="space-y-4">
            {[
              { q: "¿Es realmente sin lactosa?", a: "Sí, 100%. Apto para intolerantes y celíacos." },
              { q: "¿Cuándo llega mi pedido?", a: "Despachamos todos los días en la zona oriente. Te avisamos por WhatsApp cuando va en camino." },
              { q: "¿Puedo cancelar?", a: "Cuando quieras, sin compromiso. Tienes un portal personal para pausar, cambiar fecha o cancelar tu suscripción." },
              { q: "¿En qué zonas despachan?", a: "Lo Barnechea, Las Condes y Vitacura. Para otras zonas escríbenos y coordinamos." },
              { q: "¿Cómo pago?", a: "Transferencia anticipada, pago al recibir o efectivo. Tú eliges." },
            ].map((f) => (
              <details
                key={f.q}
                className="group bg-[#FFC93C]/10 border border-[#FFC93C]/30 rounded-2xl p-6 cursor-pointer hover:bg-[#FFC93C]/20 transition-colors"
              >
                <summary className="flex justify-between items-center font-bold text-lg list-none">
                  {f.q}
                  <span className="text-2xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[#2D1B0F]/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="bg-[#2D1B0F] text-[#FFF8E7] py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-2xl font-black">🧀 Tu Queso</p>
            <p className="text-[#FFF8E7]/60 text-sm">
              Queso artesanal hecho en Chile
            </p>
          </div>
          <Link
            href={`https://wa.me/56956273260?text=${encodeURIComponent("Hola, quiero pedir queso 🧀")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#7CB342] hover:bg-[#6aa030] text-white font-bold px-6 py-3 rounded-full transition-all hover:scale-105"
          >
            <span aria-hidden="true">💬</span> Escríbenos por WhatsApp
          </Link>
        </div>
        <p className="text-center text-[#FFF8E7]/40 text-sm mt-8">
          © {new Date().getFullYear()} Tu Queso · Todos los derechos reservados
        </p>
      </footer>
    </div>
  );
}
