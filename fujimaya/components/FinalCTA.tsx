export default function FinalCTA() {
  return (
    <section className="relative bg-[#0f4224] py-16 px-5 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#1a6b3a]/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#1a6b3a]/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="relative z-10 max-w-lg mx-auto text-center">
        <div className="animate-on-scroll">
          <div className="inline-block bg-[#c9922a] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-widest">
            LIMITED — 毎日炊き立て
          </div>

          <h2 className="text-white font-black leading-tight mb-4" style={{ fontSize: "clamp(2rem, 8vw, 3rem)" }}>
            今夜、
            <span className="text-[#fbbf24]">本物の</span><br />
            家系を食べに来い。
          </h2>

          <p className="text-white/70 text-base leading-relaxed mb-8">
            圧力釜で炊き出した濃厚豚骨スープ。<br />
            毎日仕込む、その日限りの一杯。<br />
            稲田堤で、本気の家系と出会う。
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col gap-3">
            <a
              href="tel:044-712-5155"
              className="flex items-center justify-center gap-3 bg-[#c9922a] text-white font-black text-xl py-5 rounded-2xl shadow-xl active:scale-95 transition-transform"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              044-712-5155 に電話
            </a>

            <a
              href="https://maps.google.com/?q=横浜家系ラーメン+藤真家+川崎市多摩区菅2-1-3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-[#0f4224] font-black text-base py-4 rounded-2xl active:scale-95 transition-transform"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Google Mapでルート確認
            </a>
          </div>

          {/* Hours reminder */}
          <div className="mt-8 bg-white/10 rounded-xl px-5 py-4">
            <p className="text-white/60 text-xs mb-1">営業時間</p>
            <p className="text-white font-black text-lg">11:00 〜 24:00</p>
            <p className="text-[#4ade80] text-xs mt-1">稲田堤駅 徒歩1分 / 深夜0時まで</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-10 text-center">
        <p className="text-white/20 text-xs">
          © 2026 横浜家系ラーメン 藤真家 (とうしんや)
        </p>
        <p className="text-white/20 text-xs mt-1">
          神奈川県川崎市多摩区菅2-1-3
        </p>
      </div>
    </section>
  );
}
