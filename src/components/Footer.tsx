export default function Footer() {
  return (
    <footer className="bg-red-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-lg font-semibold mb-2">[Restaurant Name]</p>
        <p className="text-red-200 text-sm mb-4">123 Main Street, [City, State]</p>
        <p className="text-red-300 text-sm">
          © {new Date().getFullYear()} [Restaurant Name]. All rights reserved.
        </p>
      </div>
    </footer>
  )
}