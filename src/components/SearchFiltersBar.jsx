import React, { useMemo } from "react";

function normalize(str = "") {
  return String(str).toLowerCase().trim();
}

export default function SearchFiltersBar({ tools = [], filters, setFilters }) {
  const categories = useMemo(() => {
    const set = new Set(tools.map((t) => t.category).filter(Boolean));
    return ["All", ...Array.from(set).sort()];
  }, [tools]);

  const pricingOptions = useMemo(() => {
    const set = new Set(tools.map((t) => t.price).filter(Boolean));
    return ["All", ...Array.from(set).sort()];
  }, [tools]);

  const useCases = useMemo(() => {
    // Using "tag" as Use Case (as per your schema)
    const set = new Set(tools.map((t) => t.tag).filter(Boolean));
    return ["All", ...Array.from(set).sort()];
  }, [tools]);

  const onReset = () => {
    setFilters({
      q: "",
      category: "All",
      pricing: "All",
      useCase: "All",
    });
  };

  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white/80 p-3 shadow-sm backdrop-blur">
        <div className="grid gap-3 md:grid-cols-12 md:items-center">
          {/* Search */}
          <div className="md:col-span-5">
            <input
              value={filters.q}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, q: e.target.value }))
              }
              placeholder="Search tools..."
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-400"
            />
          </div>

          {/* Category */}
          <div className="md:col-span-2">
            <select
              value={filters.category}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, category: e.target.value }))
              }
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-400"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Pricing */}
          <div className="md:col-span-2">
            <select
              value={filters.pricing}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, pricing: e.target.value }))
              }
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-400"
            >
              {pricingOptions.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          {/* Use Case (Tag) */}
          <div className="md:col-span-2">
            <select
              value={filters.useCase}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, useCase: e.target.value }))
              }
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-400"
            >
              {useCases.map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
            </select>
          </div>

          {/* Reset button */}
          <div className="md:col-span-1">
            <button
              onClick={onReset}
              className="w-full rounded-xl bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Optional small hint text under bar (looks premium) */}
        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <span className="rounded-full bg-slate-100 px-2 py-1">
            Tip: Search checks name, description, and tag
          </span>
          <span className="rounded-full bg-slate-100 px-2 py-1">
            Filters come from your database automatically
          </span>
        </div>
      </div>
    </div>
  );
}

// Export normalize if you want to reuse it elsewhere
export { normalize };
