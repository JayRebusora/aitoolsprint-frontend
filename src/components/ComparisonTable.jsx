import React, { useMemo } from "react";

function safeNum(n) {
  const x = Number(n);
  return Number.isFinite(x) ? x : null;
}

export default function ComparisonTable({ tools = [] }) {
  const rows = useMemo(() => {
    // show best rated first; keep featured on top
    return [...tools]
      .sort((a, b) => {
        const af = a.isFeatured ? 1 : 0;
        const bf = b.isFeatured ? 1 : 0;
        if (bf !== af) return bf - af;

        const ar = safeNum(a.rating) ?? -1;
        const br = safeNum(b.rating) ?? -1;
        return br - ar;
      })
      .slice(0, 10); // top 10 for clean table
  }, [tools]);

  return (
    <section className="mx-auto max-w-6xl px-4 pb-12" id="compare">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-900">Compare AI Tools</h2>
        <p className="mt-1 text-slate-600">
          Quick side-by-side view to help you choose faster.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px] border-collapse">
            <thead className="bg-slate-50">
              <tr className="text-left text-sm text-slate-600">
                <th className="px-5 py-4 font-semibold">Tool</th>
                <th className="px-5 py-4 font-semibold">Category</th>
                <th className="px-5 py-4 font-semibold">Best For</th>
                <th className="px-5 py-4 font-semibold">Price</th>
                <th className="px-5 py-4 font-semibold">Rating</th>
                <th className="px-5 py-4 font-semibold text-right">Action</th>
              </tr>
            </thead>

            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td className="px-5 py-6 text-slate-600" colSpan={6}>
                    No tools available to compare.
                  </td>
                </tr>
              ) : (
                rows.map((t) => {
                  const rating = safeNum(t.rating);
                  const disabled = !t.affiliateUrl;

                  return (
                    <tr
                      key={t._id || t.slug}
                      className="border-t border-slate-200 text-sm"
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-9 rounded-xl bg-slate-100 shadow-inner" />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-slate-900">{t.name}</span>
                              {t.isFeatured && (
                                <span className="rounded-full bg-blue-600 px-2 py-0.5 text-xs font-semibold text-white">
                                  Editor’s Pick
                                </span>
                              )}
                            </div>
                            <div className="mt-0.5 text-xs text-slate-500">
                              {t.slug}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-5 py-4 text-slate-700">{t.category || "—"}</td>
                      <td className="px-5 py-4 text-slate-700">{t.tag || "—"}</td>
                      <td className="px-5 py-4 text-slate-700">{t.price || "—"}</td>

                      <td className="px-5 py-4">
                        {rating !== null ? (
                          <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-amber-700">
                            ⭐ {rating.toFixed(1)}
                          </span>
                        ) : (
                          <span className="text-slate-400">—</span>
                        )}
                      </td>

                      <td className="px-5 py-4 text-right">
                        <a
                          href={t.affiliateUrl || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center justify-center rounded-full px-4 py-2 font-medium ${
                            disabled
                              ? "bg-slate-200 text-slate-500 cursor-not-allowed"
                              : "bg-blue-600 text-white hover:bg-blue-700"
                          }`}
                          onClick={(e) => {
                            if (disabled) e.preventDefault();
                          }}
                        >
                          Visit →
                        </a>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* footer note */}
        <div className="border-t border-slate-200 bg-slate-50 px-5 py-3 text-xs text-slate-500">
          Tip: Add <b>affiliateUrl</b> in your database to enable the “Visit” button.
        </div>
      </div>
    </section>
  );
}
