import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/agencyConfig';

export default function FloatingWhatsApp() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 480);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Back-to-top button cleanly positioned bottom-left */}
      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-5 left-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white/90 text-slate-800 shadow-lg backdrop-blur-md transition-all duration-150 hover:border-blue-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}

      {/* Fixed Floating WhatsApp Button at bottom-right */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5">
        <span className="hidden rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-md sm:inline-block">
          Chat with us
        </span>

        <a
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          title="Chat with us"
          className="group relative flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-950/30 transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 sm:h-14 sm:w-14"
        >
          {/* Subtle WhatsApp ring pulse */}
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 motion-safe:animate-ping"
          />
          {/* Official WhatsApp glyph */}
          <svg
            viewBox="0 0 32 32"
            fill="currentColor"
            aria-hidden="true"
            className="relative h-7 w-7"
          >
            <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.348.613 4.642 1.778 6.663L2.55 29.45l6.949-1.822A13.28 13.28 0 0 0 16.004 29.333C23.368 29.333 29.333 23.36 29.333 16S23.368 2.667 16.004 2.667Zm7.768 18.887c-.324.91-1.908 1.74-2.633 1.845-.682.099-1.546.141-2.495-.16-.576-.183-1.314-.426-2.256-.834-3.972-1.714-6.566-5.733-6.765-5.998-.199-.265-1.615-2.148-1.615-4.097 0-1.949 1.022-2.908 1.384-3.304.362-.396.79-.495 1.054-.495.263 0 .527.002.758.014.243.012.569-.092.89.68.324.78 1.103 2.695 1.2 2.893.099.198.165.429.033.694-.132.265-.198.429-.396.66-.198.231-.416.517-.594.694-.198.198-.404.413-.174.81.231.396 1.026 1.693 2.203 2.742 1.514 1.351 2.79 1.77 3.186 1.968.396.198.627.165.858-.099.231-.265.989-1.155 1.253-1.551.263-.396.527-.33.89-.198.362.132 2.307 1.088 2.703 1.286.396.198.659.297.758.462.099.165.099.957-.225 1.867Z" />
          </svg>
        </a>
      </div>
    </>
  );
}
