import { Menu, Camera, Mail, Instagram, Dribbble, Twitter } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/60 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight text-gray-900">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-600 to-blue-500 text-white shadow-sm">
            <Camera size={18} />
          </span>
          <span className="text-sm sm:text-base">Ava Carter • Visual Designer</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-gray-900 transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm hover:bg-black transition-colors">
            <Mail size={16} /> Hire Me
          </a>
        </nav>

        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-black/5" onClick={() => setOpen((s) => !s)} aria-label="Toggle menu">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/90 backdrop-blur px-4 py-3">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="py-2" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full w-max">
              <Mail size={16} /> Hire Me
            </a>
            <div className="flex items-center gap-3 pt-2 text-gray-600">
              <a href="#" aria-label="Instagram" className="hover:text-gray-900"><Instagram size={18} /></a>
              <a href="#" aria-label="Dribbble" className="hover:text-gray-900"><Dribbble size={18} /></a>
              <a href="#" aria-label="Twitter" className="hover:text-gray-900"><Twitter size={18} /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
