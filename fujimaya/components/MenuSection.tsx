export default function MenuSection() {
  const menus = [
    {
      name: "ラーメン",
      price: "¥880",
      desc: "濃厚豚骨スープに中太麺。家系の基本にして完成形。",
      tag: "定番",
      tagColor: "bg-[#1a6b3a] text-white",
      img: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&q=80",
    },
    {
      name: "ラーメン上",
      price: "¥1,080",
      desc: "燻製焼豚2枚・海苔5枚・味玉・ほうれん草の豪華仕様。",
      tag: "人気No.1",
      tagColor: "bg-[#c9922a] text-white",
      img: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=400&q=80",
    },
    {
      name: "特上ラーメン",
      price: "¥1,280",
      desc: "全トッピング全部乗せ。一杯で大満足のスペシャル丼。",
      tag: "ガチ勢向け",
      tagColor: "bg-[#3d2b1f] text-white",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
    },
    {
      name: "ネギチャーシュ",
      price: "¥1,180",
      desc: "大量の白ネギとチャーシューが豚骨スープと絶妙に絡む。",
      tag: "口コミ注目",
      tagColor: "bg-[#1a6b3a] text-white",
      img: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?w=400&q=80",
    },
  ];

  const toppings = [
    "味玉 +100円",
    "のり増(5枚) +100円",
    "ほうれん草 +100円",
    "キャベチャー +100円",
    "バター +100円",
    "ライス 無料",
  ];

  return (
    <section className="bg-[#faf7f0] py-14 px-5">
      <div className="max-w-lg mx-auto">
        {/* Section header */}
        <div className="animate-on-scroll mb-8">
          <span className="text-[#1a6b3a] text-xs font-bold tracking-[0.3em] uppercase">
            Menu
          </span>
          <h2 className="text-[#3d2b1f] font-black text-3xl mt-1 leading-tight">
            人気メニュー
          </h2>
          <p className="text-[#3d2b1f]/60 text-sm mt-2">
            毎日店内で炊き出すスープは、その日限りの一杯。
          </p>
        </div>

        {/* Menu cards */}
        <div className="space-y-4">
          {menus.map((item, i) => (
            <div
              key={item.name}
              className="animate-on-scroll bg-white rounded-2xl overflow-hidden shadow-sm flex"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-28 h-28 flex-shrink-0 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.tagColor}`}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-black text-[#3d2b1f] text-base leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-[#3d2b1f]/60 text-xs mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <p className="font-black text-[#c9922a] text-lg mt-2">
                  {item.price}
                  <span className="text-xs font-normal text-[#3d2b1f]/50 ml-1">
                    (税込)
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Toppings */}
        <div className="animate-on-scroll mt-8 bg-[#e8f5ed] rounded-2xl p-5">
          <h3 className="font-black text-[#1a6b3a] text-base mb-3">
            🥢 トッピング / カスタム
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {toppings.map((t) => (
              <div
                key={t}
                className="text-[#3d2b1f] text-sm bg-white rounded-lg px-3 py-2 font-medium"
              >
                {t}
              </div>
            ))}
          </div>
          <p className="text-[#1a6b3a] text-xs mt-3 font-bold">
            ※ 麺の硬さ・スープの濃さ・油の量はお好みで調整できます
          </p>
        </div>
      </div>
    </section>
  );
}
