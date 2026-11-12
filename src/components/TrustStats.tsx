import { TRUST_STATS } from '../data/agencyConfig';

export default function TrustStats() {
  return (
    <section aria-label="Trust and Credibility" className="border-b border-slate-200 bg-slate-50 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-blue-700 uppercase">
              Proven Track Record
            </p>
            <h2 className="mt-1.5 font-display text-2xl font-bold tracking-tight text-slate-900 [text-wrap:balance] sm:text-3xl">
              From small businesses to established organizations, we help brands establish a
              powerful online presence.
            </h2>
          </div>
          <p className="text-xs text-slate-500">
            Configurable agency metrics · Updated in <span className="font-mono">agencyConfig.ts</span>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_STATS.map((stat) => (
            <div
              key={stat.id}
              className="rounded-2xl border border-slate-200/90 bg-white p-6 transition-colors duration-150 hover:border-blue-300"
            >
              <div className="font-display text-3xl font-extrabold tracking-tight text-slate-900 tabular-nums sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-semibold text-slate-800">{stat.label}</div>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">{stat.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
