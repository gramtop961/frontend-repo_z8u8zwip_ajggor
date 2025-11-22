import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

const categories = [
  { key: 'ice-cream', label: 'Ice Cream' },
  { key: 'chocolate', label: 'Chocolates' },
  { key: 'praline', label: 'Pralines' },
  { key: 'brittle', label: 'Brittles' },
]

export default function ProductGrid() {
  const [active, setActive] = useState('')
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const url = active ? `${API}/products?category=${active}` : `${API}/products`
    fetch(url)
      .then(r => r.json())
      .then(data => setItems(data))
      .catch(() => setItems([]))
      .finally(() => setLoading(false))
  }, [active])

  return (
    <section id="menu" className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Our menu</h2>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setActive('')} className={`px-3 py-1.5 rounded-full text-sm ${active===''? 'bg-pink-500 text-white' : 'bg-white/10 text-white/80'}`}>All</button>
          {categories.map(c => (
            <button key={c.key} onClick={() => setActive(c.key)} className={`px-3 py-1.5 rounded-full text-sm ${active===c.key? 'bg-pink-500 text-white' : 'bg-white/10 text-white/80'}`}>{c.label}</button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="text-white/70">Loading...</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p,i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-white/10 to-transparent">
                <img src={p.image || '/placeholder.jpg'} alt={p.title} className="w-full h-full object-cover"/>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">{p.title}</h3>
                  <span className="text-pink-300 font-bold">${p.price.toFixed(2)}</span>
                </div>
                <p className="text-white/70 text-sm mt-1 line-clamp-2">{p.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-white/60 text-xs capitalize">{p.category}</span>
                  <button className="px-3 py-1.5 rounded-lg bg-pink-500 text-white text-sm">Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
