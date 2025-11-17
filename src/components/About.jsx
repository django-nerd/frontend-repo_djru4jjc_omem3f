export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <img src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1600&auto=format&fit=crop" alt="Studio" className="rounded-2xl border border-black/5 shadow-sm" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Designer with a love for minimal, modern visuals</h2>
          <p className="mt-4 text-gray-700">Hi, I’m Ava — a visual designer focused on crisp composition, color, and type. I design logo systems, brand identities, posters, banners, and content that feel modern and memorable.</p>
          <p className="mt-3 text-gray-700">My process blends research, sketching, and iteration to build design that performs without noise. I’m currently available for freelance and collaborations.</p>
          <ul className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-700">
            <li className="rounded-xl border border-black/5 p-4 bg-gray-50">• 6+ years experience</li>
            <li className="rounded-xl border border-black/5 p-4 bg-gray-50">• Branding & campaigns</li>
            <li className="rounded-xl border border-black/5 p-4 bg-gray-50">• Motion-ready assets</li>
            <li className="rounded-xl border border-black/5 p-4 bg-gray-50">• Print & digital</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
