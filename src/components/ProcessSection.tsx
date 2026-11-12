import { WORKING_PROCESS } from '../data/agencyConfig';

export default function ProcessSection() {
  return (
    <section id="process" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-blue-700 uppercase">
            Our Working Process
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 [text-wrap:balance] sm:text-4xl">
            From your initial idea to a live, high-converting website in four clear steps.
          </h2>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="relative mt-12">
          {/* Desktop horizontal connector line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-blue-600/30 via-violet-500/40 to-blue-600/30 lg:block"
          />

          <div className="relative space-y-6 border-l border-slate-200 pl-6 lg:grid lg:grid-cols-4 lg:gap-6 lg:space-y-0 lg:border-l-0 lg:pl-0">
            {WORKING_PROCESS.map((item, idx) => (
              <div key={item.step} className="relative lg:pt-0">
                {/* Mobile timeline node */}
                <span
                  aria-hidden="true"
                  className="absolute -left-[31px] top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-blue-600 bg-white lg:hidden"
                />

                {/* Desktop timeline node */}
                <div className="hidden lg:flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 font-mono text-sm font-bold text-white shadow-sm tabular-nums">
                    0{idx + 1}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 lg:mt-5">
                  <p className="font-mono text-xs font-semibold tracking-wide text-blue-700">
                    {item.step}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg font-bold tracking-tight text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
