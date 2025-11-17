import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkGrid from './components/WorkGrid'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <WorkGrid />
        <About />
        <Services />
        <Contact />
        <footer className="py-10 bg-white border-t border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Ava Carter — Visual Designer</p>
            <p>Logo • Poster • Banner • Social Content</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
