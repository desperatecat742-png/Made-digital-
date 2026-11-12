import {
  Headphones,
  Layout,
  MessageSquare,
  Search,
  ShieldCheck,
  Sliders,
  Smartphone,
  Wallet,
  Wrench,
  Zap,
} from 'lucide-react';
import { WHY_CHOOSE_US, type WhyChooseUsItem } from '../data/agencyConfig';

function BenefitIcon({ iconKey }: { iconKey: WhyChooseUsItem['iconKey'] }) {
  const cls = 'h-5 w-5 text-blue-400';
  switch (iconKey) {
    case 'layout':
      return <Layout className={cls} />;
    case 'smartphone':
      return <Smartphone className={cls} />;
    case 'zap':
      return <Zap className={cls} />;
    case 'wallet':
      return <Wallet className={cls} />;
    case 'search':
      return <Search className={cls} />;
    case 'shield':
      return <ShieldCheck className={cls} />;
    case 'headphones':
      return <Headphones className={cls} />;
    case 'sliders':
      return <Sliders className={cls} />;
    case 'message':
      return <MessageSquare className={cls} />;
    case 'wrench':
      return <Wrench className={cls} />;
  }
}

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-[#050816] py-20 text-white sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-blue-600/15 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-violet-600/15 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
            Why Choose Us
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-4xl">
            WHY BUSINESSES TRUST US TO BUILD THEIR ONLINE PRESENCE.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-300">
            Every website we deliver balances strong visual presentation with speed, security, and
            clear conversion pathways.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition-all duration-200 hover:border-blue-400/40 hover:bg-white/[0.07]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10">
                <BenefitIcon iconKey={item.iconKey} />
              </div>
              <h3 className="mt-4 font-display text-base font-bold leading-snug text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
