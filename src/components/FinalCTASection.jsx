import React from "react";

export default function FinalCTASection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-14">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        {/* background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-20 left-10 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
              🚀 Ready to level up?
            </div>

            <h2 className="mt-4 text-3xl font-semibold text-slate-900">
              Choose the right AI tool—faster.
            </h2>

            <p className="mt-2 max-w-xl text-slate-600">
              Browse top-rated tools, compare pricing, and pick what fits your workflow.
              Perfect for creators, students, freelancers, and business owners.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#reviews"
                className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700"
              >
                View Top AI Tools →
              </a>

              <a
                href="#compare"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
              >
                Compare Tools
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-blue-50 text-blue-600">
                  ✓
                </span>
                No fluff reviews
              </div>
              <div className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-blue-50 text-blue-600">
                  ✓
                </span>
                Updated weekly
              </div>
              <div className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-blue-50 text-blue-600">
                  ✓
                </span>
                Best picks for beginners
              </div>
            </div>
          </div>

          {/* right card */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="text-sm font-semibold text-slate-900">
              Quick actions
            </div>

            <div className="mt-4 grid gap-3">
              <a
                href="#reviews"
                className="flex items-center justify-between rounded-xl bg-white px-4 py-3 text-slate-800 shadow-sm hover:bg-slate-50"
              >
                <span>⭐ See top-rated tools</span>
                <span className="text-slate-400">→</span>
              </a>

              <a
                href="#compare"
                className="flex items-center justify-between rounded-xl bg-white px-4 py-3 text-slate-800 shadow-sm hover:bg-slate-50"
              >
                <span>📊 Compare pricing</span>
                <span className="text-slate-400">→</span>
              </a>

              <a
                href="#"
                className="flex items-center justify-between rounded-xl bg-white px-4 py-3 text-slate-400 shadow-sm cursor-not-allowed"
                onClick={(e) => e.preventDefault()}
                title="We can make this page next"
              >
                <span>🧠 Read tool reviews</span>
                <span>→</span>
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Tip: Add affiliate links per tool to enable “Visit →” buttons.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
