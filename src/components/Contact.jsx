import { Mail, Send, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const submit = (e) => {
    e.preventDefault()
    setStatus('Thanks! I will get back to you shortly.')
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Let’s build something great</h2>
          <p className="text-gray-600 mt-2">Share a few details about your project. I’ll reply within 24 hours.</p>
        </div>

        <form onSubmit={submit} className="mt-10 grid grid-cols-1 gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="rounded-xl border border-black/10 p-3" placeholder="Your name" required />
            <input type="email" className="rounded-xl border border-black/10 p-3" placeholder="Email address" required />
          </div>
          <input className="rounded-xl border border-black/10 p-3" placeholder="Company / Brand (optional)" />
          <select className="rounded-xl border border-black/10 p-3">
            <option>Logo & Identity</option>
            <option>Poster / Print</option>
            <option>Web & Social Banners</option>
            <option>Campaign Visuals</option>
            <option>Other</option>
          </select>
          <textarea className="rounded-xl border border-black/10 p-3" rows="5" placeholder="Project details" />
          <button className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white rounded-full px-5 py-3 text-sm font-medium w-max">
            <Send size={16} /> Send Inquiry
          </button>
          {status && <p className="text-green-600 text-sm mt-2">{status}</p>}
        </form>

        <div className="mt-10 grid sm:grid-cols-3 gap-4 text-sm text-gray-700">
          <div className="rounded-xl border border-black/5 p-4 bg-gray-50 flex items-center gap-3"><Mail size={16}/> ava@studio.com</div>
          <div className="rounded-xl border border-black/5 p-4 bg-gray-50 flex items-center gap-3"><Phone size={16}/> +1 (555) 015-887</div>
          <div className="rounded-xl border border-black/5 p-4 bg-gray-50 flex items-center gap-3"><MapPin size={16}/> Remote • GMT-5</div>
        </div>
      </div>
    </section>
  )
}
