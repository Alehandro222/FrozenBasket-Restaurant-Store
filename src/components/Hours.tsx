export default function Hours() {
  return (
    <section id="hours" className="bg-gradient-to-r from-red-100 to-orange-100 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold mb-8 text-red-950">Hours & Location</h2>
            <div className="space-y-3 text-red-900">
              <div className="flex justify-between max-w-xs font-medium">
                <span>Monday – Friday</span>
                <span>7:00 AM – 8:00 PM</span>
              </div>
              <div className="flex justify-between max-w-xs font-medium">
                <span>Sunday</span>
                <span>8:00 AM – 6:00 PM</span>
              </div>
            </div>
            <p className="mt-6 text-red-700 font-bold">Closed on major holidays</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-red-950">Find Us</h3>
            <p className="text-red-900 mb-1 font-medium">123 Main Street</p>
            <p className="text-red-900 mb-6 font-medium">[City, State ZIP]</p>
            <p className="text-red-800 font-bold text-lg">(+63) 0949 300 8720</p>
            
            <div className="mt-6 bg-red-100 h-48 rounded-lg flex items-center justify-center text-red-400 font-medium">
              [Map Embed]
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}