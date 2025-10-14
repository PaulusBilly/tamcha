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
    <div className="min-h-screen bg-[#E3E2C7]">
      {/* Header with Logo and Navigation */}
      <header className="px-9 py-8 flex items-center justify-between mb-12">
        {/* Logo */}
        <h1
          className="font-times text-[64px] leading-none text-[#267A18]"
          style={{ letterSpacing: "-0.04em" }}
        >
          Tamcha
        </h1>

        {/* Navigation Bar with Icon */}
        <div className="flex items-center gap-8">
          <nav className="bg-[#D8D7C4] px-10 py-4 flex items-center gap-16">
            <a
              href="#"
              className="font-times text-[20px] tracking-wide text-[#267A18] hover:opacity-70 transition-opacity"
            >
              MENU
            </a>
            <a
              href="#"
              className="font-times text-[20px] tracking-wide text-[#267A18] hover:opacity-70 transition-opacity"
            >
              LOCATION
            </a>
            <a
              href="#"
              className="font-times text-[20px] tracking-wide text-[#267A18] hover:opacity-70 transition-opacity"
            >
              ABOUT US
            </a>
            <a
              href="#"
              className="font-times text-[20px] tracking-wide text-[#267A18] hover:opacity-70 transition-opacity"
            >
              MEMBERSHIP
            </a>
          </nav>
          <button className="w-16 h-16 flex items-center justify-center hover:opacity-70 transition-opacity">
            <img
              src="/Tamcha-Icon.svg"
              alt="Tamcha Icon"
              className="w-full h-full"
            />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-9 pb-16">
        {/* Filter Buttons */}

        <div className="flex gap-3 mb-8">
          <button className="px-8 py-2.5 bg-[#9BBE8D] font-times text-[16px] tracking-widest text-white hover:bg-[#267A18] transition-colors">
            FILTER
          </button>
          <button className="px-8 py-2.5 border-2 border-[#267A18] bg-[#F5F4E8] font-times text-[16px] tracking-widest text-[#267A18] hover:bg-[#267A18] hover:text-white transition-colors">
            ALL
          </button>
          <button className="px-8 py-2.5 border-2 border-[#267A18] bg-[#F5F4E8] font-times text-[16px] tracking-widest text-[#267A18] hover:bg-[#267A18] hover:text-white transition-colors">
            MILK
          </button>
          <button className="px-8 py-2.5 border-2 border-[#267A18] bg-[#F5F4E8] font-times text-[16px] tracking-widest text-[#267A18] hover:bg-[#267A18] hover:text-white transition-colors">
            COFFEE
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-4 gap-5">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col gap-2">
              {/* Product Image Placeholder */}
              <div className="aspect-square bg-[#D4D8C5] rounded-sm"></div>
              {/* Product Name */}
              <div className="bg-[#D8D7C4] py-3 text-center">
                <p className="font-times text-[20px] tracking-wide text-[#267A18]">
                  {product.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
