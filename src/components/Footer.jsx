import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-lg font-bold text-white">
              A
            </span>
            <span className="text-lg font-extrabold text-white">APG Recycling Pte Ltd</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
            Our core business is buying and selling all types of scrap materials. We are dedicated
            to an ethical, transparent and honest business model, offering quality recycling
            services across Singapore.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.facebook.com/APG-Recycling-Pte-Ltd-822604331109018/"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-600"
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" />
              </svg>
            </a>
            <a
              href="http://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-600"
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.7 11.7 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4a4.1 4.1 0 0 1-1.9.1 4.1 4.1 0 0 0 3.8 2.8A8.2 8.2 0 0 1 2 18.4a11.6 11.6 0 0 0 6.3 1.9c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.2z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/60">
            <li><Link to="/" className="hover:text-brand-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-brand-400">About Us</Link></li>
            <li><Link to="/products" className="hover:text-brand-400">Products</Link></li>
            <li><Link to="/services" className="hover:text-brand-400">Services</Link></li>
            <li><Link to="/contact" className="hover:text-brand-400">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Get in Touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li className="flex gap-2.5">
              <span className="mt-0.5 text-brand-500">&#9679;</span>
              No 1 Soon Lee Street, #01-11 Pioneer Centre, Singapore 627605
            </li>
            <li className="flex gap-2.5">
              <span className="mt-0.5 text-brand-500">&#9679;</span>
              <a href="mailto:info@apgrecycling.com.sg" className="hover:text-brand-400">
                info@apgrecycling.com.sg
              </a>
            </li>
            <li className="flex gap-2.5">
              <span className="mt-0.5 text-brand-500">&#9679;</span>
              <a href="tel:+6560000000" className="hover:text-brand-400">+65 6000 0000</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-center text-xs text-white/40 sm:px-8">
        © {new Date().getFullYear()} APG Recycling Pte Limited. All rights reserved.
      </div>
    </footer>
  )
}
