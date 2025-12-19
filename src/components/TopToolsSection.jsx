import React from "react";

export default function TopToolsSection({ tools = [] }) {
  // Optional: show featured tools first
  const sortedTools = [...tools].sort((a, b) => {
    const af = a.isFeatured ? 1 : 0;
    const bf = b.isFeatured ? 1 : 0;
    return bf - af;
  });

  return (
    <section className="mx-auto max-w-6xl px-4 py-10" id="reviews">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-900">
          Top AI Tools This Month
        </h2>
        <p className="mt-1 text-slate-600">
          Curated tools we actually recommend for creators, marketers, and founders.
        </p>
      </div>

      {sortedTools.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-600">
          No tools match your filters.
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-3">
          {sortedTools.map((tool) => {
            const isPick = !!tool.isFeatured;

            return (
              <div
                key={tool._id || tool.slug}
                className={`relative rounded-2xl border bg-white p-5 shadow-sm ${
                  isPick ? "border-blue-300 ring-1 ring-blue-200" : "border-slate-200"
                }`}
              >
                {/* Badge */}
                {isPick && (
                  <div className="absolute -top-3 left-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow">
                      ⭐ Editor’s Pick
                    </span>
                  </div>
                )}

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {tool.name}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 line-clamp-3">
                      {tool.description || "No description yet."}
                    </p>
                  </div>

                  {/* Placeholder for logo (optional later) */}
                  <div className="h-12 w-12 rounded-xl bg-slate-100 shadow-inner" />
                </div>

                {/* Meta */}
                <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                  {tool.rating ? (
                    <span className="rounded-full bg-amber-50 px-3 py-1 font-medium text-amber-700">
                      ⭐ {Number(tool.rating).toFixed(1)}
                    </span>
                  ) : null}

                  {tool.price ? (
                    <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700">
                      {tool.price}
                    </span>
                  ) : null}

                  {tool.tag ? (
                    <span className="rounded-full bg-blue-50 px-3 py-1 font-medium text-blue-700">
                      {tool.tag}
                    </span>
                  ) : null}
                </div>

                {/* Buttons */}
                <div className="mt-5 flex gap-2">
                  <a
                    href={tool.affiliateUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-white ${
                      tool.affiliateUrl
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-slate-300 cursor-not-allowed"
                    }`}
                    onClick={(e) => {
                      if (!tool.affiliateUrl) e.preventDefault();
                    }}
                  >
                    Visit Tool →
                  </a>

                  <a
                    href={tool.slug ? `/reviews/${tool.slug}` : "#"}
                    className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  >
                    Read Review
                  </a>
                </div>

                {/* Small note if no affiliate url (helps you during setup) */}
                {!tool.affiliateUrl ? (
                  <p className="mt-3 text-xs text-slate-400">
                    Add affiliateUrl to enable the button.
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
