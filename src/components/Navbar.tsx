export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-red-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-800 tracking-tight">Frozen Basket</h1>
        <div className="space-x-6">
          <a href="#menu" className="text-red-900 hover:text-red-600 font-medium transition">Menu</a>
          <a href="#hours" className="text-red-900 hover:text-red-600 font-medium transition">Hours</a>
          <a href="#contact" className="text-red-900 hover:text-red-600 font-medium transition">Contact</a>
        </div>
      </div>
    </nav>
  )
}