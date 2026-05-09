export default function InfoSection() {
  const hours = [
    { day: "月〜金", time: "11:00 〜 24:00", note: "" },
    { day: "土・日・祝", time: "11:00 〜 24:00", note: "" },
    { day: "定休日", time: "不定休", note: "※SNSで確認" },
  ];

  return (
    <section className="bg-[#faf7f0] py-14 px-5">
      <div className="max-w-lg mx-auto">
        <div className="animate-on-scroll mb-8">
          <span className="text-[#1a6b3a] text-xs font-bold tracking-[0.3em] uppercase">
            Info
          </span>
          <h2 className="text-[#3d2b1f] font-black text-3xl mt-1">
            店舗情報
          </h2>
        </div>

        <div className="animate-on-scroll bg-white rounded-2xl p-5 shadow-sm mb-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-[#e8f5ed] rounded-xl flex items-center justify-center">
              <svg className="w-4 h-4 text-[#1a6b3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-black text-[#3d2b1f] text-base">営業時間</h3>
          </div>
          <div className="space-y-3">
            {hours.map((h) => (
              <div key={h.day} className="flex items-center justify-between">
                <span className="text-[#3d2b1f]/60 text-sm w-20">{h.day}</span>
                <span className="font-bold text-[#3d2b1f] text-sm">
                  {h.time}
                  {h.note && (
                    <span className="text-[#c9922a] text-xs ml-2">{h.note}</span>
                  )}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-[#e8f5ed] rounded-xl px-4 py-3">
            <p className="text-[#1a6b3a] text-xs font-bold">
              🌙 深夜0時まで営業！仕事帰りにも立ち寄れます
            </p>
          </div>
        </div>

        <div className="animate-on-scroll bg-white rounded-2xl p-5 shadow-sm mb-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-[#e8f5ed] rounded-xl flex items-center justify-center">
              <svg className="w-4 h-4 text-[#1a6b3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-black text-[#3d2b1f] text-base">アクセス</h3>
          </div>
          <p className="text-[#3d2b1f] font-bold text-sm mb-1">
            神奈川県川崎市多摩区菅2-1-3
          </p>
          <p className="text-[#3d2b1f]/60 text-sm mb-3">
            JR南武線 稲田堤駅 徒歩1分<br />
            京王稲田堤駅 徒歩3分
          </p>
          <p className="text-[#3d2b1f]/50 text-xs">
            ※ 緑の大きな看板が目印です
          </p>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-[#3d2b1f]/50 text-xs mb-2">お電話</p>
            
              href="tel:044-712-5155"
              className="flex items-center justify-between p-3 bg-[#f5f5f5] rounded-xl"
            >
              <span className="font-black text-[#3d2b1f] text-xl tracking-wide">
                044-712-5155
              </span>
              <div className="bg-[#1a6b3a] text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                タップで発信
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
