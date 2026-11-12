import { ArrowRight, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/agencyConfig';

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-20 text-white sm:py-24">
      {/* Glowing blue and purple gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/35 via-indigo-700/30 to-violet-700/35" />
        <div className="absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-500/30 blur-[120px]" />
        <div className="absolute -right-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-violet-500/30 blur-[120px]" />
        <div className="absolute inset-0 bg-agency-grid opacity-50" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-white [text-wrap:balance] sm:text-5xl">
          YOUR BUSINESS DESERVES TO BE SEEN ONLINE.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
          Stop losing opportunities because your business doesn&apos;t have a professional website.
          Let&apos;s build something amazing together.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs font-bold tracking-wide text-slate-950 shadow-lg transition-transform duration-150 hover:-translate-y-0.5 hover:bg-slate-100 whitespace-nowrap shrink-0 sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>START YOUR WEBSITE PROJECT</span>
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-xs font-bold tracking-wide text-white backdrop-blur-md transition-colors duration-150 hover:bg-white/20 whitespace-nowrap shrink-0 sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <MessageCircle className="h-4 w-4 text-emerald-300" />
            <span>CHAT WITH US NOW</span>
          </a>
        </div>
      </div>
    </section>
  );
}
