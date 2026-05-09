export default function ReviewSection() {
  const reviews = [
    {
      name: "Googleユーザー",
      rating: 5,
      date: "2026年",
      title: "ネギラーメン＋海苔増し最高",
      body: "先日稲田堤へ家系ラーメンを初めて食べに行きました。長ネギが好きなのでネギラーメン＋海苔増し＋ネギチャーシュー丼を注文！油だけ少なめにしました。濃厚なスープの旨味が広がりました。良質な海苔が大判でとても華やかです！長ネギは胡麻油とペッパーが入っているようでシャキシャキとして風味も最高でした！チャーシューは大判で食べごたえあり、甘味がありました。ルイボスティー飲み放題も嬉しいです。テーブル席もあるのでお子様連れ、家族、女性同士にもオススメです！",
      avatar: "G",
      avatarBg: "bg-blue-500",
    },
    {
      name: "Googleユーザー",
      rating: 4,
      date: "2026年",
      title: "どパンチ家系",
      body: "どパンチ家系ラーメン。麺は菅野製麺さんとのこと。卓上にあるニンニクが美味しいです。",
      avatar: "G",
      avatarBg: "bg-red-500",
    },
  ];

  return (
    <section className="bg-[#0f4224] py-14 px-5">
      <div className="max-w-lg mx-auto">
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

        <div className="space-y-4">
          {reviews.map((review, i) => (
            <div
              key={review.name + i}
              className="animate-on-scroll bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5"
            >
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

        <div className="animate-on-scroll mt-6 text-center">
          
            href="https://maps.google.com/?q=横浜家系ラーメン+藤真家+川崎市多摩区菅2-1-3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#4ade80] text-sm font-bold border border-[#4ade80]/40 px-5 py-2.5 rounded-full"
          >
            Googleで口コミをもっと見る
          </a>
        </div>
      </div>
    </section>
  );
}
