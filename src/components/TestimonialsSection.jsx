import React from "react";

const TESTIMONIALS = [
  {
    quote:
      "I found the right AI tool in minutes. The comparisons saved me money and time.",
    name: "Alyssa",
    role: "Content Creator",
    stars: 5,
  },
  {
    quote:
      "Clean UI, straight-to-the-point reviews. I love the category filters!",
    name: "Mark",
    role: "Freelancer",
    stars: 5,
  },
  {
    quote:
      "Finally a site that doesn’t overwhelm me—just the tools I need for my workflow.",
    name: "Jenna",
    role: "Student",
    stars: 5,
  },
];

function Stars({ n = 5 }) {
  return (
    <div className="text-amber-300 text-sm">
      {"★".repeat(Math.max(0, Math.min(5, n)))}
      <span className="text-slate-600 ml-2 text-xs">({n}.0)</span>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-14">
      <div className="rounded-3xl bg-slate-900 px-6 py-10 shadow-lg md:px-10">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              What creators are saying
            </h2>
            <p className="mt-1 text-slate-300">
              Social proof that boosts trust—perfect for affiliate conversions.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
              ⭐ Rated by users
            </span>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <Stars n={t.stars} />
              <p className="mt-3 text-slate-200 leading-relaxed">“{t.quote}”</p>

              <div className="mt-5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/10" />
                <div>
                  <div className="text-sm font-semibold text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-300">
            Want your review featured here? Email us or send feedback.
          </p>

          <a
            href="#reviews"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Explore Top Tools →
          </a>
        </div>
      </div>
    </section>
  );
}
