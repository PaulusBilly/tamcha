export default function MenuPage() {
  const products = [
    { id: 1, name: "PRODUCT 1" },
    { id: 2, name: "PRODUCT 2" },
    { id: 3, name: "PRODUCT 3" },
    { id: 4, name: "PRODUCT 4" },
    { id: 5, name: "PRODUCT 1" },
    { id: 6, name: "PRODUCT 2" },
    { id: 7, name: "PRODUCT 3" },
    { id: 8, name: "PRODUCT 4" },
  ];

  return (
    <div className="min-h-screen bg-[#E8E3DC] px-9 py-8">
      {/* Header */}
      <header className="flex items-center justify-between mb-16">
        <h1 className="font-times text-[64px] leading-none tracking-tight">
          Tamcha
        </h1>

        <nav className="flex items-center gap-12">
          <a
            href="#"
            className="font-times text-[20px] tracking-wide hover:opacity-70 transition-opacity"
          >
            MENU
          </a>
          <a
            href="#"
            className="font-times text-[20px] tracking-wide hover:opacity-70 transition-opacity"
          >
            LOCATION
          </a>
          <a
            href="#"
            className="font-times text-[20px] tracking-wide hover:opacity-70 transition-opacity"
          >
            ABOUT US
          </a>
          <a
            href="#"
            className="font-times text-[20px] tracking-wide hover:opacity-70 transition-opacity"
          >
            MEMBERSHIP
          </a>
          <button className="w-12 h-12 flex items-center justify-center hover:opacity-70 transition-opacity">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="23" stroke="black" strokeWidth="2" />
              <path d="M24 12 L32 20 L24 28 L16 20 Z" fill="black" />
              <path d="M24 20 L32 28 L24 36 L16 28 Z" fill="black" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-8">
        <button className="px-6 py-2 bg-[#B8AFA3] font-times text-[16px] tracking-widest hover:bg-[#A89E92] transition-colors">
          FILTER
        </button>
        <button className="px-6 py-2 border border-black font-times text-[16px] tracking-widest hover:bg-black hover:text-white transition-colors">
          ALL
        </button>
        <button className="px-6 py-2 border border-black font-times text-[16px] tracking-widest hover:bg-black hover:text-white transition-colors">
          MILK
        </button>
        <button className="px-6 py-2 border border-black font-times text-[16px] tracking-widest hover:bg-black hover:text-white transition-colors">
          COFFEE
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-4 gap-5">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col gap-2">
            {/* Product Image Placeholder */}
            <div className="aspect-square bg-[#C4C4C4] rounded-sm"></div>
            {/* Product Name */}
            <div className="bg-[#C4C4C4] py-3 text-center">
              <p className="font-times text-[20px] tracking-wide">
                {product.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
