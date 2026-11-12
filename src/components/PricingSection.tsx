import { ArrowRight, Check, Clock, MessageCircle } from 'lucide-react';
import { PRICING_PACKAGES, buildWhatsAppUrl } from '../data/agencyConfig';

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-wider text-blue-700 uppercase">
            Website Packages
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 [text-wrap:balance] sm:text-4xl">
            Clear website packages tailored to your stage of growth.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            All prices in Nigerian Naira (₦) are configured as editable placeholders in{' '}
            <span className="font-mono text-sm text-slate-800">agencyConfig.ts</span>. Message us
            on WhatsApp for an exact quote based on your requirements.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PRICING_PACKAGES.map((pkg) => (
            <article
              key={pkg.id}
              className={`flex flex-col justify-between rounded-2xl p-7 transition-all duration-200 ${
                pkg.recommended
                  ? 'border border-blue-500/40 bg-[#070C1F] text-white shadow-xl shadow-blue-950/15'
                  : 'border border-slate-200 bg-slate-50/70 text-slate-900'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-lg font-bold tracking-tight">{pkg.name}</h3>
                  {pkg.recommended && (
                    <span className="font-mono text-[11px] font-semibold text-blue-300">
                      Most Popular
                    </span>
                  )}
                </div>

                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    pkg.recommended ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {pkg.subtitle}
                </p>

                <div
                  className={`mt-6 border-y py-5 ${
                    pkg.recommended ? 'border-white/10' : 'border-slate-200'
                  }`}
                >
                  <div className="font-display text-2xl font-extrabold tracking-tight tabular-nums sm:text-3xl">
                    {pkg.priceNgn}
                  </div>
                  <p
                    className={`mt-1 text-xs ${
                      pkg.recommended ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    {pkg.priceNote}
                  </p>
                  <div
                    className={`mt-3 inline-flex items-center gap-1.5 text-xs font-medium ${
                      pkg.recommended ? 'text-blue-300' : 'text-blue-700'
                    }`}
                  >
                    <Clock className="h-3.5 w-3.5" />
                    <span>Delivery: {pkg.deliveryTimeline}</span>
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          pkg.recommended ? 'text-blue-400' : 'text-blue-600'
                        }`}
                      />
                      <span className={pkg.recommended ? 'text-slate-200' : 'text-slate-700'}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href={buildWhatsAppUrl(pkg.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-bold tracking-wide transition-all duration-150 whitespace-nowrap shrink-0 sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    pkg.recommended
                      ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-blue-500 hover:to-violet-500'
                      : 'bg-slate-900 text-white hover:bg-blue-600'
                  }`}
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Custom Quote Strip */}
        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <h3 className="font-display text-lg font-bold text-slate-900">
              Need something different? We also build fully customized websites based on your
              requirements.
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Tell us about your custom web application, portal, or multi-branch platform and get a
              tailored scope.
            </p>
          </div>
          <a
            href={buildWhatsAppUrl(
              'Hello! I need a custom website quote tailored to my specific requirements. Can we discuss?'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 text-xs font-bold tracking-wide text-white shadow-sm transition-all duration-150 hover:from-blue-500 hover:to-violet-500 whitespace-nowrap shrink-0 sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <span>REQUEST A CUSTOM QUOTE</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
