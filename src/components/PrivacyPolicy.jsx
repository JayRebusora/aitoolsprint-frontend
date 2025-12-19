import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold text-slate-900">Privacy Policy</h1>

      <p className="mt-4 text-slate-600">
        We respect your privacy. This page explains what we collect and how we use it.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-slate-900">Information we collect</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li>Basic analytics (page visits, clicks, device type) to improve the site.</li>
        <li>Information you submit via contact forms (name/email/message).</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold text-slate-900">How we use it</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
        <li>Improve content, layout, and recommendations.</li>
        <li>Respond to your messages and support requests.</li>
      </ul>

      <p className="mt-8 text-slate-600">
        This policy may be updated from time to time.
      </p>
    </div>
  );
}
