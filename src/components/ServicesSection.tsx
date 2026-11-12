import {
  ArrowUpRight,
  Building2,
  Code2,
  Globe2,
  GraduationCap,
  HeartPulse,
  Home,
  ShoppingCart,
  Truck,
  UserCheck,
  UtensilsCrossed,
} from 'lucide-react';
import { SERVICES, type ServiceItem, buildWhatsAppUrl } from '../data/agencyConfig';

function ServiceIcon({ iconKey }: { iconKey: ServiceItem['iconKey'] }) {
  const cls = 'h-5 w-5 text-blue-600';
  switch (iconKey) {
    case 'building':
      return <Building2 className={cls} />;
    case 'graduation':
      return <GraduationCap className={cls} />;
    case 'cart':
      return <ShoppingCart className={cls} />;
    case 'heart':
      return <HeartPulse className={cls} />;
    case 'globe':
      return <Globe2 className={cls} />;
    case 'utensils':
      return <UtensilsCrossed className={cls} />;
    case 'user':
      return <UserCheck className={cls} />;
    case 'truck':
      return <Truck className={cls} />;
    case 'home':
      return <Home className={cls} />;
    case 'code':
      return <Code2 className={cls} />;
  }
}

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-wider text-blue-700 uppercase">
            Website Development Services
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 [text-wrap:balance] sm:text-4xl">
            Tailored websites built for conversion, credibility, and growth across every sector.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Select the website solution that fits your organization and chat with us directly on
            WhatsApp to discuss your goals.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, idx) => {
            const isFeaturedWide = idx === 9;
            return (
              <article
                key={service.id}
                className={`group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/70 hover:shadow-lg hover:shadow-blue-950/5 ${
                  isFeaturedWide ? 'md:col-span-2 lg:col-span-3 lg:flex-row lg:items-center lg:gap-10' : ''
                }`}
              >
                <div className={isFeaturedWide ? 'lg:flex-1' : ''}>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-blue-50/80 transition-colors group-hover:bg-blue-100/80">
                      <ServiceIcon iconKey={service.iconKey} />
                    </div>
                    <span className="font-mono text-xs font-medium text-slate-400 tabular-nums">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500">
                    {service.highlights.map((h, i) => (
                      <span key={h} className="inline-flex items-center gap-2">
                        {i > 0 && <span aria-hidden="true">·</span>}
                        <span>{h}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className={isFeaturedWide ? 'mt-6 shrink-0 lg:mt-0' : 'mt-6 pt-5 border-t border-slate-100'}>
                  <a
                    href={buildWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white transition-all duration-150 hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 whitespace-nowrap shrink-0 lg:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <span>Get This Website</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
