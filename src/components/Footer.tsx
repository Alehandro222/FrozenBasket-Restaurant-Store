export default function Footer() {
  return (
    <footer className="bg-red-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-lg font-semibold mb-2">Frozen Basket</p>
        <p className="text-red-200 text-sm mb-4">123 San Fabian, Pangasinan, Philippines</p>
        <p className="text-red-300 text-sm">
          © {new Date().getFullYear()} Frozen Basket. All rights reserved.
        </p>
      </div>
    </footer>
  )
}