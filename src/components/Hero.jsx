import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-wide uppercase text-gray-700 bg-white/70 backdrop-blur px-3 py-1 rounded-full border border-black/5">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" /> Available for projects
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold leading-tight text-gray-900">
            Crafting bold visuals for brands that want to stand out
          </h1>
          <p className="mt-4 text-gray-700 text-base sm:text-lg">
            I’m a multidisciplinary visual designer specializing in logo systems, brand identity, posters, and social content that turn heads and drive results.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="bg-gray-900 text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-black">View Portfolio</a>
            <a href="#contact" className="bg-white/80 backdrop-blur border border-black/10 text-gray-900 px-5 py-3 rounded-full text-sm font-medium hover:bg-white">Get a Quote</a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/40 to-white pointer-events-none" />
    </section>
  )
}
