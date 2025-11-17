import { Layers, PenTool, Image as ImageIcon, BadgePercent, Palette, Megaphone } from 'lucide-react'

const services = [
  {
    icon: PenTool,
    title: 'Logo & Identity',
    description: 'Unique, scalable marks and identity systems that look sharp on every touchpoint.'
  },
  {
    icon: Palette,
    title: 'Brand Art Direction',
    description: 'Cohesive color, typography, and composition that make your brand unmistakable.'
  },
  {
    icon: Layers,
    title: 'Poster & Print',
    description: 'Striking posters and editorial layouts built on strong grids and typography.'
  },
  {
    icon: ImageIcon,
    title: 'Web & Social Banners',
    description: 'High-converting banners and social content with crisp hierarchy and motion-friendly assets.'
  },
  {
    icon: Megaphone,
    title: 'Campaign Visuals',
    description: 'Launch visuals and ad creative that feel fresh and on-brand across channels.'
  },
  {
    icon: BadgePercent,
    title: 'Creative Retainers',
    description: 'Monthly design support for fast-moving teams that need consistent quality.'
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Services</h2>
        <p className="text-gray-600 mt-2 max-w-2xl">Purpose-driven design across brand, print, and digital. Clean, modern, and crafted to perform.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-gray-900 text-white inline-flex items-center justify-center">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
