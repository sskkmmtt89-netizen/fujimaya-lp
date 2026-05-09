"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80')",
        }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e17] via-[#0a2e17]/60 to-transparent" />

      {/* Green tint strip at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#1a6b3a]" />

      {/* Content */}
      <div className="relative z-10 px-5 pb-12 pt-16">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 bg-[#1a6b3a] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "0.1s" }}
        >
          <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse-slow inline-block" />
          稲田堤駅 徒歩1分 ・ 深夜0時まで営業
        </div>

        {/* Main heading */}
        <h1
          className={`text-white text-shadow-lg leading-tight transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          <span className="block text-[13px] font-medium tracking-[0.25em] text-[#4ade80] mb-1">
            横浜家系ラーメン
          </span>
          <span
            className="block font-black"
            style={{ fontSize: "clamp(3rem, 14vw, 5rem)", lineHeight: 1.0 }}
          >
            藤真家
          </span>
          <span className="block text-[13px] font-medium tracking-[0.3em] text-white/70 mt-1">
            と う し ん や
          </span>
        </h1>

        {/* Tagline */}
        <p
          className={`text-white/90 text-base mt-4 mb-6 leading-relaxed font-medium transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.35s" }}
        >
          骨の髄まで炊き出した<br />
          <span className="text-[#fbbf24] font-black text-xl">濃厚豚骨スープ</span>が、<br />
          あなたを待っている。
        </p>

        {/* Rating bar */}
        <div
          className={`flex items-center gap-3 mb-6 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.45s" }}
        >
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${i <= 4 ? "text-[#fbbf24]" : "text-[#fbbf24]/50"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-white font-bold text-sm">Google口コミ 多数</span>
          <span className="text-white/50 text-xs">2026年3月オープン</span>
        </div>

        {/* CTA buttons */}
        <div
          className={`flex flex-col gap-3 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.55s" }}
        >
          <a
            href="tel:044-712-5155"
            className="flex items-center justify-center gap-2 bg-[#1a6b3a] text-white font-black text-lg py-4 rounded-xl shadow-lg active:scale-95 transition-transform"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            今すぐ電話する
          </a>
          <a
            href="https://maps.google.com/?q=横浜家系ラーメン+藤真家+川崎市多摩区菅2-1-3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white font-bold text-base py-3.5 rounded-xl active:scale-95 transition-transform"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            GoogleMapで場所を確認
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex flex-col items-center gap-1 text-white/40">
            <span className="text-[10px] tracking-widest uppercase">scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
