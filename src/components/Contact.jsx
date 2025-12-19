import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // For now: demo only. Later we can connect to backend/email.
    setSent(true);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold text-slate-900">Contact</h1>
      <p className="mt-3 text-slate-600">
        Send feedback, tool suggestions, or partnership inquiries.
      </p>

      {sent ? (
        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-700">
          ✅ Message received (demo). Next step: connect this to email/backend.
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <input
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-400"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          />
          <input
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-400"
            placeholder="Your email"
            type="email"
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
          />
          <textarea
            className="min-h-[140px] w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-400"
            placeholder="Your message"
            value={form.message}
            onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          />

          <button className="rounded-full bg-blue-600 px-6 py-3 text-white shadow hover:bg-blue-700">
            Send Message →
          </button>
        </form>
      )}
    </div>
  );
}
