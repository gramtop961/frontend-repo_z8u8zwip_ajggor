import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(255,200,150,0.08),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(255,150,150,0.08),transparent_30%)]" />
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            Handcrafted sweets, delivered fresh
          </motion.h1>
          <p className="mt-5 text-lg text-white/80 max-w-prose">
            Small-batch ice cream, rich chocolates, pralines, and crunchy brittles. Treat yourself or send a gift that melts hearts.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="px-5 py-3 rounded-xl bg-pink-500 text-white font-semibold shadow hover:bg-pink-600 transition">Shop bestsellers</a>
            <a href="#about" className="px-5 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition">About us</a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-pink-300/30 via-pink-200/10 to-purple-200/10 border border-white/10 backdrop-blur-md p-6">
            <div className="grid grid-cols-3 gap-3 h-full">
              {['/ice-cream.jpg','/chocolate.jpg','/pralines.jpg','/brittle.jpg','/scoop.jpg','/box.jpg'].map((src,i)=> (
                <div key={i} className="rounded-xl bg-white/10 border border-white/10 backdrop-blur overflow-hidden">
                  <img src={src} alt="treat" className="w-full h-full object-cover"/>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
