import React from "react";
import Seo from "../components/Seo";
import Schema from "../components/Schema";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <main className="page-main">
      <Seo
        title="Services | AI Tools Sprint"
        description="Learn what AI Tools Sprint offers—curated AI tool recommendations, comparisons, and category-based discovery to help you choose faster."
        canonicalPath="/services"
      />

      <Schema
        pageType="WebPage"
        name="Services | AI Tools Sprint"
        description="Curated AI tool discovery, comparisons, and category-based recommendations."
      />

      <div className="mx-auto max-w-6xl px-4 pt-10 pb-6">
        <h1 className="text-3xl font-bold text-slate-900">Services</h1>
        <p className="mt-2 text-slate-600">
          We help you find the right AI tools faster—without the overwhelm.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">
              Curated Tool Lists
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Hand-picked AI tools by category and real use-cases—so you don’t
              waste hours testing everything.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">
              Comparisons & Short Reviews
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Simple pros/cons, pricing notes, and best-for tags to help you
              choose quickly.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">
              Recommendations by Goal
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Find tools for writing, design, study, marketing, automation, and
              productivity—based on outcomes.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/categories"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Browse Categories
          </Link>

          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          >
            View Top Tools
          </Link>
        </div>
      </div>
    </main>
  );
}
