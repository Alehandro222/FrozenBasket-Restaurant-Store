import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Hours from './components/Hours'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-red-50">
      <Navbar />
      <Hero />
      <Menu />
      <Hours />
      <Contact />
      <Footer />
    </div>
  )
}