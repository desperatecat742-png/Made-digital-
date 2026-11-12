import { useEffect, useState } from 'react';
import { ExternalLink, Pencil, RotateCcw, Save, Star, User, X } from 'lucide-react';
import { DEFAULT_TESTIMONIALS, type TestimonialItem } from '../data/agencyConfig';

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(DEFAULT_TESTIMONIALS);
  const [editorOpen, setEditorOpen] = useState(false);
  const [drafts, setDrafts] = useState<TestimonialItem[]>(DEFAULT_TESTIMONIALS);
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    fetch('/api/testimonials')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (active && data?.ok && Array.isArray(data.items) && data.items.length > 0) {
          setTestimonials(data.items);
          setDrafts(data.items);
        }
      })
      .catch(() => {
        // Fallback silently to default editable placeholders
      });
    return () => {
      active = false;
    };
  }, []);

  const handleOpenEditor = () => {
    setDrafts(testimonials.map((t) => ({ ...t })));
    setSaveMessage(null);
    setEditorOpen(true);
  };

  const updateDraft = (index: number, patch: Partial<TestimonialItem>) => {
    setDrafts((prev) =>
      prev.map((item, idx) => (idx === index ? { ...item, ...patch, isPlaceholder: false } : item))
    );
  };

  const handleSave = async () => {
    setSaving(true);
    setSaveMessage(null);
    try {
      const res = await fetch('/api/testimonials', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: drafts }),
      });
      const data = await res.json();
      if (!res.ok || !data?.ok) {
        setSaveMessage(data?.message || 'Could not save changes.');
      } else {
        setTestimonials(drafts);
        setSaveMessage('Testimonials updated successfully.');
        setTimeout(() => setEditorOpen(false), 650);
      }
    } catch {
      setSaveMessage('Network error while saving testimonials.');
    } finally {
      setSaving(false);
    }
  };

  const handleResetPlaceholders = async () => {
    setSaving(true);
    setSaveMessage(null);
    try {
      const res = await fetch('/api/testimonials', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: DEFAULT_TESTIMONIALS }),
      });
      if (res.ok) {
        setTestimonials(DEFAULT_TESTIMONIALS);
        setDrafts(DEFAULT_TESTIMONIALS);
        setSaveMessage('Restored default editable placeholder slots.');
      }
    } catch {
      setSaveMessage('Unable to reset right now.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <section id="testimonials" className="border-t border-slate-200 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-blue-700 uppercase">
              Client Feedback
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 [text-wrap:balance] sm:text-4xl">
              WHAT OUR CLIENTS SAY ABOUT WORKING WITH US.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              We believe great websites should come with great customer experiences.
            </p>
          </div>

          <button
            type="button"
            onClick={handleOpenEditor}
            className="inline-flex items-center gap-2 self-start rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-800 transition-colors hover:border-blue-500 hover:text-blue-700 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <Pencil className="h-3.5 w-3.5" />
            <span>Manage Testimonials</span>
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1" aria-label={`${item.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className={`h-4 w-4 ${
                          idx < item.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                  {item.isPlaceholder && (
                    <span className="font-mono text-[11px] text-slate-400">
                      Editable Slot
                    </span>
                  )}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.review}</p>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-4">
                <div className="flex items-center gap-3">
                  {item.avatarUrl ? (
                    <img
                      src={item.avatarUrl}
                      alt={item.clientName}
                      referrerPolicy="no-referrer"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                      <User className="h-4 w-4" />
                    </div>
                  )}

                  <div className="min-w-0">
                    <div className="truncate text-sm font-bold text-slate-900">
                      {item.clientName}
                    </div>
                    <div className="truncate text-xs text-slate-500">
                      {item.role} · {item.organization}
                    </div>
                  </div>
                </div>

                {item.projectUrl && (
                  <a
                    href={item.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-800"
                  >
                    <span>{item.projectLabel || 'View Live Project'}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Administrator Testimonial Editor Drawer/Modal */}
      {editorOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Update Client Testimonials"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
        >
          <div className="max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              <div>
                <h3 className="font-display text-lg font-bold text-slate-900">
                  Update Client Testimonials
                </h3>
                <p className="text-xs text-slate-500">
                  Replace sample placeholder slots with verified client reviews. Changes persist on
                  the server.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setEditorOpen(false)}
                aria-label="Close testimonial editor"
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 space-y-5 overflow-y-auto p-6">
              {drafts.map((item, idx) => (
                <div key={item.id} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-slate-600">
                      Slot {idx + 1}
                    </span>
                    <label className="flex items-center gap-2 text-xs text-slate-600">
                      <span>Rating</span>
                      <select
                        value={item.rating}
                        onChange={(e) => updateDraft(idx, { rating: Number(e.target.value) })}
                        className="rounded border border-slate-300 bg-white px-2 py-1 text-xs"
                      >
                        {[5, 4, 3, 2, 1].map((n) => (
                          <option key={n} value={n}>
                            {n} Stars
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <input
                      type="text"
                      value={item.clientName}
                      onChange={(e) => updateDraft(idx, { clientName: e.target.value })}
                      placeholder="Client Name"
                      className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900"
                    />
                    <input
                      type="text"
                      value={item.organization}
                      onChange={(e) => updateDraft(idx, { organization: e.target.value })}
                      placeholder="Business / Organization"
                      className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900"
                    />
                    <input
                      type="text"
                      value={item.role}
                      onChange={(e) => updateDraft(idx, { role: e.target.value })}
                      placeholder="Role / Title"
                      className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900"
                    />
                  </div>

                  <textarea
                    rows={2}
                    value={item.review}
                    onChange={(e) => updateDraft(idx, { review: e.target.value })}
                    placeholder="Verified client review..."
                    className="mt-3 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900"
                  />

                  <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <input
                      type="url"
                      value={item.projectUrl || ''}
                      onChange={(e) => updateDraft(idx, { projectUrl: e.target.value })}
                      placeholder="Project URL (https://...)"
                      className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900"
                    />
                    <input
                      type="text"
                      value={item.projectLabel || ''}
                      onChange={(e) => updateDraft(idx, { projectLabel: e.target.value })}
                      placeholder="Link Label (e.g. clientdomain.com)"
                      className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleResetPlaceholders}
                  disabled={saving}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-50"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Reset Placeholders</span>
                </button>
                {saveMessage && <span className="text-xs font-medium text-blue-700">{saveMessage}</span>}
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => setEditorOpen(false)}
                  className="rounded-lg px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200/70"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  disabled={saving}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
                >
                  <Save className="h-3.5 w-3.5" />
                  <span>{saving ? 'Saving...' : 'Save Testimonials'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
