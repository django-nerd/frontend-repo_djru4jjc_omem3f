import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Aura Lens — Camera Logo System',
    category: 'Logo · Branding',
    cover: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop',
    description: 'A modular logo system built around aperture shapes, adaptable across product, app icon, and packaging.'
  },
  {
    title: 'Neon Frame — Poster Series',
    category: 'Poster · Campaign',
    cover: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1600&auto=format&fit=crop',
    description: 'Vibrant kinetic posters exploring color, motion blur, and typographic rhythm for a music festival.'
  },
  {
    title: 'PixelBloom — Social Content Pack',
    category: 'Social · Content',
    cover: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop',
    description: 'A bold set of Instagram carousels and story templates with punchy gradients and clean grids.'
  },
  {
    title: 'FocusGrid — Web Banner Suite',
    category: 'Banner · Web',
    cover: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1600&auto=format&fit=crop',
    description: 'Responsive banner designs with crisp hierarchy, optimized for conversion and brand recall.'
  },
  {
    title: 'Monogram Lab — Logo Exploration',
    category: 'Logo · Identity',
    cover: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1600&auto=format&fit=crop',
    description: 'A series of minimal monograms balancing geometry and personality for tech-forward brands.'
  },
  {
    title: 'Analog Motion — Poster Experiments',
    category: 'Poster · Print',
    cover: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1600&auto=format&fit=crop',
    description: 'Typographic posters mixing grid systems with expressive color and texture.'
  },
]

export default function WorkGrid() {
  return (
    <section id="work" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Selected Work</h2>
            <p className="text-gray-600 mt-2">Logo, poster, banner, and social content crafted for impact.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex text-sm font-medium text-gray-900 hover:underline">Request full case studies →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article key={p.title} className="group rounded-2xl overflow-hidden border border-black/5 bg-white shadow-sm hover:shadow-md transition-shadow" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.cover} alt={p.title} className="h-full w-full object-cover group-hover:scale-[1.04] transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-4">
                <span className="text-xs uppercase tracking-wide text-gray-500">{p.category}</span>
                <h3 className="mt-1 font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
