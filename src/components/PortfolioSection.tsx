import { useMemo, useState } from 'react';
import { ArrowUpRight, Globe, Search } from 'lucide-react';
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_PROJECTS,
  type PortfolioCategory,
  type PortfolioProject,
} from '../data/agencyConfig';

const INITIAL_VISIBLE_COUNT = 9;

function BrowserPreviewGraphic({ project }: { project: PortfolioProject }) {
  const { preview, domain, name, category } = project;
  return (
    <div
      className="relative overflow-hidden rounded-t-2xl border-b border-slate-200/80 bg-[#070B1A] text-white"
      style={{
        background: `radial-gradient(circle at 85% 15%, ${preview.accentTo}40, transparent 55%), linear-gradient(155deg, ${preview.surfaceBg} 0%, #050816 100%)`,
      }}
    >
      {/* Browser Chrome */}
      <div className="flex items-center justify-between border-b border-white/10 bg-black/30 px-3.5 py-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
        </div>
        <div className="flex items-center gap-1.5 rounded bg-white/10 px-2.5 py-0.5 font-mono text-[10px] text-slate-200">
          <Globe className="h-2.5 w-2.5 text-blue-300 shrink-0" />
          <span className="truncate max-w-[175px]">{domain}</span>
        </div>
        <span className="font-mono text-[9px] text-slate-400">HTTPS</span>
      </div>

      {/* Browser Viewport Silhouette matching real site structure */}
      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between text-[10px] text-slate-300">
          <span className="font-display font-semibold truncate max-w-[170px] text-white">{name}</span>
          <span className="font-mono text-[9px] tracking-wide text-blue-300 uppercase">
            {category}
          </span>
        </div>

        <div className="mt-4">
          <p className="font-display text-sm font-bold leading-snug text-white line-clamp-1">
            {preview.headline}
          </p>
          <p className="mt-1 text-[11px] text-slate-300 line-clamp-1">{preview.subline}</p>
        </div>

        <div className="mt-4 flex items-center justify-between gap-2">
          <span
            className="inline-block rounded-md px-2.5 py-1 text-[10px] font-semibold text-white"
            style={{
              background: `linear-gradient(90deg, ${preview.accentFrom}, ${preview.accentTo})`,
            }}
          >
            {preview.primaryLabel}
          </span>

          {/* Minimal layout wireframe indicator */}
          <div className="flex items-center gap-1.5">
            <span className="h-5 w-8 rounded border border-white/15 bg-white/10" />
            <span className="h-5 w-8 rounded border border-white/15 bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  const categoryCounts = useMemo(() => {
    const counts: Record<PortfolioCategory, number> = {
      ALL: PORTFOLIO_PROJECTS.length,
      BUSINESS: 0,
      SCHOOL: 0,
      'E-COMMERCE': 0,
      HEALTHCARE: 0,
      ORGANIZATION: 0,
      TECHNOLOGY: 0,
      PORTFOLIO: 0,
    };
    for (const p of PORTFOLIO_PROJECTS) {
      counts[p.category] += 1;
    }
    return counts;
  }, []);

  const filteredProjects = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return PORTFOLIO_PROJECTS.filter((project) => {
      const matchesCat = activeCategory === 'ALL' || project.category === activeCategory;
      if (!matchesCat) return false;
      if (!q) return true;
      return (
        project.name.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.domain.toLowerCase().includes(q) ||
        project.category.toLowerCase().includes(q)
      );
    });
  }, [activeCategory, searchQuery]);

  const shouldCollapse = activeCategory === 'ALL' && !searchQuery.trim() && !showAll;
  const visibleProjects = shouldCollapse
    ? filteredProjects.slice(0, INITIAL_VISIBLE_COUNT)
    : filteredProjects;

  return (
    <section id="portfolio" className="border-t border-slate-200 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-wider text-blue-700 uppercase">
              Verified Client Portfolio
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 [text-wrap:balance] sm:text-4xl">
              REAL PROJECTS. REAL BUSINESSES. REAL DIGITAL IMPACT.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Explore some of the websites we&apos;ve created for businesses, schools, organizations,
              and brands. Your next website could be here.
            </p>
          </div>

          <div className="relative w-full lg:w-72 shrink-0">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search verified projects..."
              aria-label="Search verified portfolio projects"
              className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
        </div>

        {/* Category Filtering Buttons */}
        <div
          role="tablist"
          aria-label="Filter projects by industry category"
          className="mt-8 flex flex-wrap items-center gap-2"
        >
          {PORTFOLIO_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setActiveCategory(cat.id);
                  if (cat.id !== 'ALL') setShowAll(true);
                }}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'border border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-slate-900'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`font-mono text-[11px] tabular-nums ${
                    isActive ? 'text-blue-300' : 'text-slate-400'
                  }`}
                >
                  {categoryCounts[cat.id]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        {visibleProjects.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-10 text-center">
            <p className="text-sm font-medium text-slate-700">
              No verified projects match &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('ALL');
              }}
              className="mt-3 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/70 hover:shadow-lg hover:shadow-blue-950/5"
              >
                <div>
                  <BrowserPreviewGraphic project={project} />

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                      <span className="font-semibold text-blue-700">{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="truncate font-mono text-[11px] text-slate-400">
                        {project.domain}
                      </span>
                    </div>

                    <h3 className="mt-2 font-display text-lg font-bold tracking-tight text-slate-900">
                      {project.name}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-100 px-6 py-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-900 transition-all duration-150 hover:border-blue-600 hover:bg-blue-600 hover:text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <span>Visit Website</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* VIEW MORE PROJECTS Toggle */}
        {activeCategory === 'ALL' && !searchQuery.trim() && filteredProjects.length > INITIAL_VISIBLE_COUNT && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-3.5 text-xs font-bold tracking-wide text-white shadow-md shadow-blue-950/15 transition-all duration-150 hover:from-blue-500 hover:to-violet-500 whitespace-nowrap shrink-0 sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <span>
                {showAll
                  ? 'SHOW FEATURED PROJECTS'
                  : `VIEW MORE PROJECTS (${filteredProjects.length - INITIAL_VISIBLE_COUNT} MORE)`}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
