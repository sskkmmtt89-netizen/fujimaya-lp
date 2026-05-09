export default function MapCTA() {
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.7!2d139.5345182!3d35.6335671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f154363578eb%3A0x35b19372626d8880!2z5qiq5rWc5a6257O744Op44O844Oh44OzIOiXpOecn-Wutg!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp";

  return (
    <section className="bg-[#3d2b1f] py-14 px-5">
      <div className="max-w-lg mx-auto">
        <div className="animate-on-scroll mb-6">
          <span className="text-[#c9922a] text-xs font-bold tracking-[0.3em] uppercase">
            Map
          </span>
          <h2 className="text-white font-black text-3xl mt-1">
            場所をチェック
          </h2>
          <p className="text-white/60 text-sm mt-2">
            稲田堤駅から歩いてすぐ。緑の看板が目印。
          </p>
        </div>

        {/* Map embed placeholder */}
        <div className="animate-on-scroll rounded-2xl overflow-hidden mb-5 bg-[#2a1f16] h-52 relative">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="藤真家 地図"
            className="w-full h-full"
          />
        </div>

        {/* Access info strip */}
        <div className="animate-on-scroll grid grid-cols-2 gap-3 mb-5">
          <div className="bg-white/10 rounded-xl p-4 text-center">
            <p className="text-[#4ade80] font-black text-2xl">1</p>
            <p className="text-white text-xs mt-1">稲田堤駅から<br />徒歩1分</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4 text-center">
            <p className="text-[#4ade80] font-black text-2xl">0</p>
            <p className="text-white text-xs mt-1">深夜まで<br />24:00閉店</p>
          </div>
        </div>

        {/* Main CTA */}
        <div className="animate-on-scroll">
          <a
            href="https://maps.google.com/?q=横浜家系ラーメン+藤真家+川崎市多摩区菅2-1-3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-white text-[#3d2b1f] font-black text-lg py-4 rounded-2xl shadow-lg active:scale-95 transition-transform w-full"
          >
            <svg className="w-6 h-6 text-[#1a6b3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            Google Mapで開く
          </a>
          <p className="text-white/40 text-xs text-center mt-3">
            川崎市多摩区菅2-1-3
          </p>
        </div>
      </div>
    </section>
  );
}
