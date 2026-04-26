export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-red-100 via-orange-50 to-red-50 py-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-red-950 mb-4 drop-shadow-sm">
          Frozen Basket
        </h2>
        <p className="text-xl text-red-800 mb-2 font-medium">
          Fresh sold beef and other frozen goods!
        </p>
        <p className="text-lg text-red-700 mb-10 font-semibold">
          Est. 2026 • Pangasinan, Mabilao, San Fabian
        </p>
        <div className="flex justify-center gap-4">
          <a 
            href="#menu" 
            className="bg-red-700 text-white px-8 py-3 rounded-lg hover:bg-red-800 transition shadow-lg shadow-red-200"
          >
            View Menu
          </a>
          <a 
            href="#contact" 
            className="bg-white text-red-700 border-2 border-red-700 px-8 py-3 rounded-lg hover:bg-red-50 transition font-medium"
          >
            Order Now
          </a>
        </div>
      </div>
    </section>
  )
}