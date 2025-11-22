import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#121018] via-[#171428] to-[#121018]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.04),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(255,200,150,0.04),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(255,150,150,0.04),transparent_30%)]" />
      <div className="relative">
        <header className="sticky top-0 z-20 backdrop-blur bg-black/20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="#" className="text-white font-extrabold text-xl">Sweet Shop</a>
            <nav className="hidden md:flex items-center gap-6 text-white/80">
              <a href="#menu" className="hover:text-white">Menu</a>
              <a href="#about" className="hover:text-white">About</a>
              <a href="#" className="hover:text-white">Cart</a>
            </nav>
          </div>
        </header>

        <main>
          <Hero />
          <ProductGrid />
          <section id="about" className="max-w-5xl mx-auto px-6 py-16 text-white/80">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Made with love</h3>
            <p className="mt-3">We craft every batch by hand using local dairy, fair-trade cacao, and time-honored techniques. We ship insulated to arrive perfectly chilled.</p>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
