export default function InstagramSection() {
  // Dummy ramen food photos from Unsplash
  const photos = [
    "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&q=80",
    "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=300&q=80",
    "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=300&q=80",
    "https://images.unsplash.com/photo-1623341214825-9f4f963727da?w=300&q=80",
    "https://images.unsplash.com/photo-1530469912745-a215c6b256ea?w=300&q=80",
    "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=300&q=80",
  ];

  return (
    <section className="bg-[#faf7f0] py-14 px-5">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="animate-on-scroll mb-6">
          <span className="text-[#1a6b3a] text-xs font-bold tracking-[0.3em] uppercase">
            Instagram
          </span>
          <h2 className="text-[#3d2b1f] font-black text-3xl mt-1">
            SNSで見る藤真家
          </h2>
          <p className="text-[#3d2b1f]/60 text-sm mt-2">
            食べた人の投稿がどんどん集まっています。
          </p>
        </div>

        {/* Instagram handle card */}
        <div className="animate-on-scroll bg-gradient-to-br from-[#1a6b3a] to-[#0f4224] rounded-2xl p-5 mb-5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center">
              <span className="text-white font-black text-xl">藤</span>
            </div>
            <div>
              <p className="text-white font-black text-base">@iekei_fujimaya</p>
              <p className="text-white/70 text-sm">横浜家系ラーメン 藤真家</p>
              <p className="text-[#4ade80] text-xs mt-0.5">稲田堤 / 深夜0時まで</p>
            </div>
          </div>
          <a
            href="https://twitter.com/iekei_fujimaya"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 bg-white text-[#1a6b3a] font-black text-sm py-3 rounded-xl active:scale-95 transition-transform"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.631L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            X(旧Twitter)をフォロー
          </a>
        </div>

        {/* Photo grid */}
        <div className="animate-on-scroll grid grid-cols-3 gap-1.5 rounded-2xl overflow-hidden mb-5">
          {photos.map((url, i) => (
            <div key={i} className="aspect-square overflow-hidden bg-gray-200">
              <img
                src={url}
                alt={`ラーメン写真 ${i + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Hashtag */}
        <div className="animate-on-scroll text-center">
          <p className="text-[#1a6b3a] font-bold text-sm">
            #藤真家 #横浜家系 #稲田堤ラーメン で投稿しよう
          </p>
        </div>
      </div>
    </section>
  );
}
