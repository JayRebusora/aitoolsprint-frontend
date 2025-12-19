import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-blue-600" />
              <div>
                <div className="text-lg font-semibold text-slate-900">
                  AI Tools Sprint
                </div>
                <div className="text-sm text-slate-500">
                  Curated AI tools, reviews, and comparisons.
                </div>
              </div>
            </div>

            <p className="mt-4 max-w-xl text-sm text-slate-600">
              We help creators, students, freelancers, and business owners choose the right AI tools faster
              through honest comparisons and simple recommendations.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="text-sm font-semibold text-slate-900">Explore</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="#reviews" className="text-slate-600 hover:text-blue-700">
                  Top Tools
                </a>
              </li>
              <li>
                <a href="#compare" className="text-slate-600 hover:text-blue-700">
                  Compare Tools
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-blue-700" onClick={(e) => e.preventDefault()}>
                  Reviews (coming soon)
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="text-sm font-semibold text-slate-900">Legal</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="/affiliate-disclosure" className="text-slate-600 hover:text-blue-700">
                  Affiliate Disclosure
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-slate-600 hover:text-blue-700">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-slate-600 hover:text-blue-700">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/contact" className="text-slate-600 hover:text-blue-700">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclosure */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
          <span className="font-semibold text-slate-800">Affiliate disclosure:</span>{" "}
          Some links on this site are affiliate links. If you click and make a purchase, we may earn a
          commission at no extra cost to you. This helps support the site and keeps content free.
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-2 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} AI Tools Sprint. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-700" onClick={(e) => e.preventDefault()}>
              Facebook
            </a>
            <a href="#" className="hover:text-blue-700" onClick={(e) => e.preventDefault()}>
              YouTube
            </a>
            <a href="#" className="hover:text-blue-700" onClick={(e) => e.preventDefault()}>
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
