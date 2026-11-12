import { useState, type FormEvent } from 'react';
import { CheckCircle2, Mail, MessageCircle, Phone, Send } from 'lucide-react';
import { AGENCY_CONFIG, SERVICES, buildWhatsAppUrl } from '../data/agencyConfig';

interface FormState {
  fullName: string;
  businessName: string;
  email: string;
  whatsappNumber: string;
  websiteType: string;
  description: string;
}

const INITIAL_FORM: FormState = {
  fullName: '',
  businessName: '',
  email: '',
  whatsappNumber: '',
  websiteType: 'Business Website',
  description: '',
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submittedRecord, setSubmittedRecord] = useState<{
    inquiryId: string;
    whatsappSummaryUrl: string;
  } | null>(null);

  const validateClient = (values: FormState): Record<string, string> => {
    const errors: Record<string, string> = {};
    if (values.fullName.trim().length < 2) errors.fullName = 'Please enter your full name.';
    if (values.businessName.trim().length < 2) {
      errors.businessName = 'Please enter your business or organization name.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }
    if (values.whatsappNumber.replace(/[^\d]/g, '').length < 7) {
      errors.whatsappNumber = 'Please enter a valid WhatsApp number.';
    }
    if (!values.websiteType.trim()) errors.websiteType = 'Please choose a website type.';
    if (values.description.trim().length < 15) {
      errors.description = 'Please write at least 15 characters describing your project.';
    }
    return errors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setServerError(null);

    const errors = validateClient(form);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setSubmitting(true);

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || !data?.ok) {
        if (data?.errors) setFieldErrors(data.errors);
        setServerError(
          data?.message || 'Unable to submit your request. Please contact us on WhatsApp.'
        );
        return;
      }

      const summaryMessage = `Hello! I just submitted a website request (${data.inquiryId}).\nName: ${form.fullName}\nBusiness/Org: ${form.businessName}\nType: ${form.websiteType}\nDetails: ${form.description}`;
      setSubmittedRecord({
        inquiryId: data.inquiryId,
        whatsappSummaryUrl: buildWhatsAppUrl(summaryMessage),
      });
      setForm(INITIAL_FORM);
    } catch {
      setServerError(
        'Connection error while sending your request. Please try again or reach us directly on WhatsApp.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-wider text-blue-700 uppercase">
              Contact Our Team
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 [text-wrap:balance] sm:text-4xl">
              Ready to launch your website? Let&apos;s talk about your project.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Send your website requirements using the form or start a direct WhatsApp conversation
              for immediate assistance.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 transition-colors hover:border-emerald-400 hover:bg-emerald-50"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Chat on WhatsApp</div>
                    <div className="text-xs text-slate-600">Fastest response · Direct consultation</div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-emerald-700">Open Chat</span>
              </a>

              <div className="flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-medium text-slate-500">Business Email (Editable Placeholder)</div>
                  <a
                    href={`mailto:${AGENCY_CONFIG.contactEmailPlaceholder}`}
                    className="block truncate text-sm font-semibold text-slate-900 hover:text-blue-700"
                  >
                    {AGENCY_CONFIG.contactEmailPlaceholder}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500">Phone / WhatsApp Line</div>
                  <div className="font-mono text-sm font-semibold text-slate-900">
                    {AGENCY_CONFIG.contactPhonePlaceholder}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                Connect With Us
              </p>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {AGENCY_CONFIG.socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-blue-500 hover:text-blue-700"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Validated Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8">
              {submittedRecord ? (
                <div className="rounded-xl border border-emerald-200 bg-white p-6 text-center sm:p-8">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-slate-900">
                    Website Request Received
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Reference ID:{' '}
                    <span className="font-mono font-semibold text-slate-900">
                      {submittedRecord.inquiryId}
                    </span>
                    . Your project brief has been saved on our server.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={submittedRecord.whatsappSummaryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-xs font-bold text-white hover:bg-emerald-700"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Send Summary on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmittedRecord(null)}
                      className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-slate-800">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        placeholder="e.g. Adebayo Ogunleye"
                        className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                      />
                      {fieldErrors.fullName && (
                        <p className="mt-1 text-xs font-medium text-red-600">{fieldErrors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="businessName" className="block text-xs font-semibold text-slate-800">
                        Business / Organization Name *
                      </label>
                      <input
                        id="businessName"
                        type="text"
                        required
                        value={form.businessName}
                        onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                        placeholder="e.g. Crestview Academy"
                        className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                      />
                      {fieldErrors.businessName && (
                        <p className="mt-1 text-xs font-medium text-red-600">
                          {fieldErrors.businessName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-800">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@company.com"
                        className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                      />
                      {fieldErrors.email && (
                        <p className="mt-1 text-xs font-medium text-red-600">{fieldErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="whatsappNumber" className="block text-xs font-semibold text-slate-800">
                        WhatsApp Number *
                      </label>
                      <input
                        id="whatsappNumber"
                        type="tel"
                        required
                        value={form.whatsappNumber}
                        onChange={(e) => setForm({ ...form, whatsappNumber: e.target.value })}
                        placeholder="e.g. 0801 234 5678"
                        className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                      />
                      {fieldErrors.whatsappNumber && (
                        <p className="mt-1 text-xs font-medium text-red-600">
                          {fieldErrors.whatsappNumber}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="websiteType" className="block text-xs font-semibold text-slate-800">
                      Type of Website Required *
                    </label>
                    <select
                      id="websiteType"
                      value={form.websiteType}
                      onChange={(e) => setForm({ ...form, websiteType: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Website Redesign">Website Redesign</option>
                      <option value="Other Custom Solution">Other Custom Solution</option>
                    </select>
                    {fieldErrors.websiteType && (
                      <p className="mt-1 text-xs font-medium text-red-600">
                        {fieldErrors.websiteType}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-xs font-semibold text-slate-800">
                      Brief Project Description *
                    </label>
                    <textarea
                      id="description"
                      rows={4}
                      required
                      value={form.description}
                      onChange={(e) => setForm({ ...form, description: e.target.value })}
                      placeholder="Tell us about your business, key pages or features needed, and your preferred timeline..."
                      className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                    />
                    {fieldErrors.description && (
                      <p className="mt-1 text-xs font-medium text-red-600">
                        {fieldErrors.description}
                      </p>
                    )}
                  </div>

                  {serverError && (
                    <div
                      role="alert"
                      className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs font-medium text-red-700"
                    >
                      {serverError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3.5 text-xs font-bold tracking-wide text-white shadow-md transition-all duration-150 hover:from-blue-500 hover:to-violet-500 disabled:opacity-60 sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <Send className="h-4 w-4" />
                    <span>{submitting ? 'SENDING REQUEST...' : 'SEND WEBSITE REQUEST'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
