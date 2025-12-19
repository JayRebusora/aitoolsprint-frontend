import React, { useMemo } from "react";

export default function CategoriesSection({ tools = [], setFilters }) {
  const categories = useMemo(() => {
    const map = new Map();

    tools.forEach((t) => {
      const cat = t.category?.trim();
      if (!cat) return;
      map.set(cat, (map.get(cat) || 0) + 1);
    });

    // convert to array and sort by count desc
    return Array.from(map.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }, [tools]);

  return (
    <section className="mx-auto max-w-6xl px-4 pb-14">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-900">
          Browse by Category
        </h2>
        <p className="mt-1 text-slate-600">
          Click a category to filter tools instantly.
        </p>
      </div>

      {categories.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-600">
          No categories found yet.
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <button
              key={c.name}
              type="button"
              onClick={() => {
                if (!setFilters) return;
                setFilters((prev) => ({
                  ...prev,
                  category: c.name,
                }));
                // optional: scroll back to tools list
                const el = document.getElementById("reviews");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group text-left rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-blue-300 hover:ring-1 hover:ring-blue-200"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-700">
                    {c.name}
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    {c.count} tool{c.count > 1 ? "s" : ""}
                  </div>
                </div>

                <div className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100 text-sm font-semibold text-slate-700 shadow-inner">
                  {c.count}
                </div>
              </div>

              <div className="mt-4 text-sm font-medium text-blue-600">
                View tools →
              </div>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
