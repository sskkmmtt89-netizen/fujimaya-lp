export default function ReviewSection() {
  const reviews = [
    {
      name: "おそ松ボーイ",
      rating: 5,
      date: "2026年3月",
      title: "想像超えて美味い",
      body: "食べログ評価3.02を見て「まあ普通かな」と思いながら入ったけど、これは本気で旨い。スープの濃度が他の家系とは全然違う。骨粉感がしっかりあって、重心の低いガチな一杯。また来ます。",
      avatar: "お",
      avatarBg: "bg-orange-500",
    },
    {
      name: "マコラーメン",
      rating: 5,
      date: "2026年3月",
      title: "名店「流川」の家系挑戦、本気度が伝わる",
      body: "「中華そば流川」の新ブランド。圧力釜でしっかり炊き出したスープは、ライト家系とは一線を画す本格派。稲田堤の家系シーンに新たな選択肢が加わった。",
      avatar: "マ",
      avatarBg: "bg-[#1a6b3a]",
    },
    {
      name: "IKKO'S FILMS",
      rating: 4,
      date: "2026年3月",
      title: "濃度と骨粉感に振り切った家系",
      body: "スープは圧力釜で数種の豚ガラ・鶏ガラを合わせた本格仕様。濃度・骨粉感にこだわった、重心低めのガチな家系。緑の看板と深夜0時まで営業というスタイルも◎",
      avatar: "I",
      avatarBg: "bg-gray-700",
    },
    {
      name: "けん18172",
      rating: 5,
      date: "2026年3月",
      title: "新店とは思えないクオリティ",
      body: "オープンしたばかりなのに、スープの完成度が高い。清潔感のある店内で気持ちよく食べられました。ネギチャーシューが特に美味しかった！",
      avatar: "け",
      avatarBg: "bg-blue-600",
    },
  ];

  return (
    <section className="bg-[#0f4224] py-14 px-5">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="animate-on-scroll mb-8 text-center">
          <span className="text-[#4ade80] text-xs font-bold tracking-[0.3em] uppercase">
            Reviews
          </span>
          <h2 className="text-white font-black text-3xl mt-1">
            来た人の声
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-[#fbbf24]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white font-bold">Google口コミ 高評価続々</span>
          </div>
        </div>

        {/* Review cards */}
        <div className="space-y-4">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className="animate-on-scroll bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Top row */}
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`w-10 h-10 rounded-full ${review.avatarBg} flex items-center justify-center text-white font-black text-base flex-shrink-0`}
                >
                  {review.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-bold text-sm truncate">{review.name}</p>
                  <p className="text-white/50 text-xs">{review.date}</p>
                </div>
                <div className="flex gap-0.5 flex-shrink-0">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-[#fbbf24]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-[#4ade80] font-bold text-sm mb-1.5">{review.title}</p>
              <p className="text-white/80 text-sm leading-relaxed">{review.body}</p>
            </div>
          ))}
        </div>

        {/* Google review link */}
        <div className="animate-on-scroll mt-6 text-center">
          <a
            href="https://maps.google.com/?q=横浜家系ラーメン+藤真家+川崎市多摩区菅2-1-3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#4ade80] text-sm font-bold border border-[#4ade80]/40 px-5 py-2.5 rounded-full"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Googleで口コミをもっと見る
          </a>
        </div>
      </div>
    </section>
  );
}
