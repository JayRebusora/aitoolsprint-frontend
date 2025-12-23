import React from "react";

export default function Hero({ featuredTool }) {
  const tool = featuredTool;

  return (
    <section className="relative w-full overflow-hidden">
      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute top-28 right-10 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-10 pb-6 md:pt-14">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-sm text-slate-600 shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-blue-500" />
              AI Tools Sprint
            </div>

            <h1 className="mt-5 text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
              Find the best <span className="text-blue-600">AI tools</span> <br />
              for your next sprint.
            </h1>

            <p className="mt-4 max-w-xl text-slate-600">
              Discover curated reviews, comparisons, and tutorials on AI tools that actually boost productivity,
              automate your workflow, and help you earn more online.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#reviews"
                className="rounded-full bg-blue-600 px-6 py-3 text-white shadow hover:bg-blue-700"
              >
                View Top AI Tools
              </a>

              <a
                href="#compare"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 text-slate-700 shadow-sm hover:bg-slate-50"
              >
                Compare Tools
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-blue-50 text-blue-600">✓</span>
                Hand-picked & tested tools
              </div>
              <div className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-blue-50 text-blue-600">✓</span>
                Trusted by 10,000+ creators
              </div>
              <div className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-blue-50 text-blue-600">✓</span>
                Updated weekly
              </div>
            </div>
          </div>

          {/* RIGHT: Featured Tool Card */}
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg backdrop-blur">
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold tracking-widest text-slate-500">
                FEATURED TOOL
              </div>

              {tool?.price ? (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  {tool.price}
                </span>
              ) : null}
            </div>

            {tool ? (
              <>
                <div className="mt-3 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900">{tool.name}</h3>
                    <p className="mt-2 text-slate-600">
                      {tool.description || "Featured tool of the week."}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-slate-600">
                      {typeof tool.rating === "number" ? (
                        <>
                          <span className="text-amber-500">★★★★★</span>
                          <span className="font-semibold text-slate-800">
                            {tool.rating.toFixed(1)}
                          </span>
                        </>
                      ) : null}

                      {tool.tag ? (
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                          {tool.tag}
                        </span>
                      ) : null}
                    </div>
                  </div>

                  {/* Placeholder logo box (later we can add tool.logoUrl field) */}
                  <div className="h-20 w-20 rounded-2xl bg-slate-100 shadow-inner" />
                </div>

                <div className="mt-6">
                  <a
                    href={tool.affiliateUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full rounded-full px-5 py-3 text-center text-white shadow ${
                      tool.affiliateUrl ? "bg-blue-600 hover:bg-blue-700" : "bg-slate-300 cursor-not-allowed"
                    }`}
                    onClick={(e) => {
                      if (!tool.affiliateUrl) e.preventDefault();
                    }}
                  >
                    Use Tool →
                  </a>
                </div>
              </>
            ) : (
              <div className="mt-4 rounded-2xl border border-dashed border-slate-200 bg-white p-5 text-slate-600">
                No featured tool yet. 
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
