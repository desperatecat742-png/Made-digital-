import { MessageCircle } from 'lucide-react';
import { AGENCY_CONFIG, SERVICES, buildWhatsAppUrl } from '../data/agencyConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#050816] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Agency Brand Column */}
          <div className="lg:col-span-4">
            <a href="#top" className="font-display text-xl font-bold tracking-tight text-white">
              {AGENCY_CONFIG.brandName}
            </a>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {AGENCY_CONFIG.shortDescription}
            </p>
            <p className="mt-4 text-xs font-semibold text-blue-300">
              {AGENCY_CONFIG.shortTagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold tracking-wider text-white uppercase">Navigation</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#top" className="transition-colors hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="transition-colors hover:text-white">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#process" className="transition-colors hover:text-white">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#pricing" className="transition-colors hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="transition-colors hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold tracking-wider text-white uppercase">Our Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a href="#services" className="transition-colors hover:text-white">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold tracking-wider text-white uppercase">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>{AGENCY_CONFIG.locationLabel}</li>
              <li>
                <a
                  href={`mailto:${AGENCY_CONFIG.contactEmailPlaceholder}`}
                  className="transition-colors hover:text-white"
                >
                  {AGENCY_CONFIG.contactEmailPlaceholder}
                </a>
              </li>
              <li className="font-mono text-xs text-slate-300">
                {AGENCY_CONFIG.contactPhonePlaceholder}
              </li>
            </ul>

            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-emerald-500"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <div className="mt-5 flex flex-wrap gap-3 text-xs">
              {AGENCY_CONFIG.socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>
            &copy; {currentYear} {AGENCY_CONFIG.brandName}. All rights reserved.
          </p>
          <p>Website Design &amp; Development Agency · Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
