import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, Globe, Laptop, MessageCircle, ShieldCheck, Smartphone } from 'lucide-react';
import heroBackdrop from '../assets/images/hero_agency_backdrop_1794510087455.jpg';
import { AGENCY_CONFIG, PORTFOLIO_PROJECTS, buildWhatsAppUrl } from '../data/agencyConfig';

const SHOWCASE_IDS = ['destiny-fountain', 'glozen', 'mardeeyah-hospital', 'lionshead-africa', 'taxidpdf'];
const SHOWCASE_PROJECTS = PORTFOLIO_PROJECTS.filter((p) => SHOWCASE_IDS.includes(p.id));

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = SHOWCASE_PROJECTS[activeIndex] ?? PORTFOLIO_PROJECTS[0];

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#050816] text-white"
    >
      {/* Atmospheric architectural backdrop + blue/purple glow */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src={heroBackdrop}
          alt="Modern digital agency design environment"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover opacity-25 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/85 via-[#050816]/80 to-[#050816]" />
        <div className="absolute inset-0 bg-agency-grid opacity-70" />
        <div className="absolute -left-24 top-12 h-96 w-96 rounded-full bg-blue-600/25 blur-[120px]" />
        <div className="absolute right-0 top-24 h-[28rem] w-[28rem] rounded-full bg-violet-600/20 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Core Value Proposition & 3 Primary Actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <p className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-blue-300 sm:text-sm">
              <ShieldCheck className="h-4 w-4 shrink-0 text-blue-400" />
              <span>{AGENCY_CONFIG.heroTrustIndicator}</span>
            </p>

            <h1 className="mt-4 font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-white [text-wrap:balance] sm:text-5xl lg:text-[3.35rem]">
              WE BUILD{' '}
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
                POWERFUL WEBSITES
              </span>{' '}
              THAT GROW YOUR BUSINESS.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Your business deserves more than just a website. Get a beautiful, professional,
              mobile-friendly website designed to attract customers, build trust, and grow your
              brand online.
            </p>

            {/* Three Prominent Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3.5 text-xs font-bold tracking-wide text-white shadow-lg shadow-blue-950/50 transition-all duration-150 hover:from-blue-500 hover:to-violet-500 whitespace-nowrap shrink-0 sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>GET YOUR WEBSITE NOW</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 text-xs font-bold tracking-wide text-white backdrop-blur-md transition-colors duration-150 hover:border-blue-400/50 hover:bg-white/10 whitespace-nowrap shrink-0 sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>EXPLORE OUR PORTFOLIO</span>
              </a>

              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-500/15 px-5 py-3.5 text-xs font-bold tracking-wide text-emerald-200 backdrop-blur-md transition-colors duration-150 hover:border-emerald-400/60 hover:bg-emerald-500/25 whitespace-nowrap shrink-0 sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                <span>CHAT WITH US ON WHATSAPP</span>
              </a>
            </div>

            {/* Interactive Showcase Selector for Device Mockup */}
            <div className="mt-9 border-t border-white/10 pt-6">
              <p className="text-xs font-medium text-slate-400">
                Preview live client websites in the interactive showcase:
              </p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {SHOWCASE_PROJECTS.map((proj, idx) => (
                  <button
                    key={proj.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                      idx === activeIndex
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {proj.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Laptop + Smartphone Mockup & Floating Glass Preview Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-6"
          >
            <div className="perspective-device relative mx-auto max-w-xl pb-10 sm:pb-6">
              {/* 3D Tilted Laptop Mockup */}
              <div className="laptop-tilt relative rounded-2xl border border-white/15 bg-[#0A1026]/90 p-2.5 shadow-2xl shadow-blue-950/60 backdrop-blur-xl">
                {/* Laptop Screen */}
                <div className="overflow-hidden rounded-xl border border-white/10 bg-[#060B19]">
                  {/* Browser Top Bar */}
                  <div className="flex items-center justify-between border-b border-white/10 bg-slate-950/90 px-3.5 py-2">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                    </div>
                    <div className="flex items-center gap-1.5 rounded-md bg-white/5 px-3 py-1 font-mono text-[11px] text-slate-300">
                      <Globe className="h-3 w-3 text-blue-400" />
                      <span className="truncate max-w-[180px] sm:max-w-[240px]">
                        {activeProject.domain}
                      </span>
                    </div>
                    <a
                      href={activeProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${activeProject.name}`}
                      className="text-slate-400 transition-colors hover:text-white"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  {/* Dynamic Client Site Screen Inside Laptop */}
                  <div
                    className="relative p-5 sm:p-7"
                    style={{
                      background: `radial-gradient(circle at top right, ${activeProject.preview.accentTo}33, transparent 55%), linear-gradient(145deg, ${activeProject.preview.surfaceBg}, #050816)`,
                    }}
                  >
                    <div className="flex items-center justify-between text-[11px] text-slate-300">
                      <span className="font-display font-semibold tracking-tight text-white">
                        {activeProject.name}
                      </span>
                      <span className="font-mono text-[10px] text-blue-300">
                        {activeProject.category}
                      </span>
                    </div>

                    <div className="mt-5 max-w-md">
                      <h2 className="font-display text-lg font-bold leading-snug text-white sm:text-xl">
                        {activeProject.preview.headline}
                      </h2>
                      <p className="mt-1.5 text-xs text-slate-300">
                        {activeProject.preview.subline}
                      </p>
                      <div className="mt-4 flex items-center gap-2.5">
                        <a
                          href={activeProject.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
                          style={{
                            background: `linear-gradient(90deg, ${activeProject.preview.accentFrom}, ${activeProject.preview.accentTo})`,
                          }}
                        >
                          <span>{activeProject.preview.primaryLabel}</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>

                    {/* Crisp UI Feature Strip inside laptop */}
                    <div className="mt-6 grid grid-cols-3 gap-2.5">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-2.5">
                        <div className="h-1.5 w-10 rounded bg-blue-400/70" />
                        <div className="mt-2 h-2 w-full rounded bg-white/20" />
                        <div className="mt-1 h-2 w-2/3 rounded bg-white/10" />
                      </div>
                      <div className="rounded-lg border border-white/10 bg-white/5 p-2.5">
                        <div className="h-1.5 w-10 rounded bg-violet-400/70" />
                        <div className="mt-2 h-2 w-full rounded bg-white/20" />
                        <div className="mt-1 h-2 w-3/4 rounded bg-white/10" />
                      </div>
                      <div className="rounded-lg border border-white/10 bg-white/5 p-2.5">
                        <div className="h-1.5 w-10 rounded bg-sky-400/70" />
                        <div className="mt-2 h-2 w-full rounded bg-white/20" />
                        <div className="mt-1 h-2 w-1/2 rounded bg-white/10" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laptop Base Bezel */}
                <div className="mx-auto mt-2 h-1.5 w-24 rounded-full bg-white/15" />
              </div>

              {/* Overlapping 3D Smartphone Mockup */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-2 right-2 w-40 rounded-[1.5rem] border border-white/20 bg-[#080D21]/95 p-2 shadow-2xl shadow-black/70 backdrop-blur-xl sm:right-4 sm:w-44"
              >
                <div className="mx-auto mb-1.5 h-1 w-10 rounded-full bg-white/20" />
                <div
                  className="rounded-[1.1rem] border border-white/10 p-3"
                  style={{
                    background: `linear-gradient(160deg, ${activeProject.preview.accentFrom}44, #060B19 65%)`,
                  }}
                >
                  <div className="flex items-center justify-between text-[9px] text-slate-300">
                    <span className="truncate font-semibold text-white">{activeProject.name}</span>
                    <Smartphone className="h-3 w-3 shrink-0 text-blue-300" />
                  </div>
                  <p className="mt-2.5 font-display text-xs font-bold leading-tight text-white">
                    {activeProject.preview.headline}
                  </p>
                  <p className="mt-1 text-[10px] leading-snug text-slate-300 line-clamp-2">
                    Mobile-ready experience built for fast browsing.
                  </p>
                  <a
                    href={activeProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 block w-full rounded-md bg-white/15 py-1.5 text-center text-[10px] font-semibold text-white hover:bg-white/25"
                  >
                    Open Live Site
                  </a>
                </div>
              </motion.div>

              {/* Floating Glassmorphic Agency Preview Card */}
              <div className="mt-4 inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-2.5 backdrop-blur-lg sm:absolute sm:-left-6 sm:bottom-8 sm:mt-0">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 text-white">
                  <Laptop className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Desktop & Mobile Tested</p>
                  <p className="text-[11px] text-slate-300">
                    Live verification · {PORTFOLIO_PROJECTS.length} active client sites
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
