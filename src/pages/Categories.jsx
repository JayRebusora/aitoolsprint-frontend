import React, { useEffect, useMemo, useState } from "react";
import SearchFiltersBar, { normalize } from "../components/SearchFiltersBar";
import CategoriesSection from "../components/CategoriesSection";
import TopToolsSection from "../components/TopToolsSection";

const API_URL = import.meta.env.VITE_API_URL;

export default function Categories() {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [filters, setFilters] = useState({
    q: "",
    category: "All",
    pricing: "All",
    useCase: "All",
  });

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const res = await fetch(`${API_URL}/api/tools`);
        if (!res.ok) throw new Error("Failed to fetch tools");
        const data = await res.json();
        setTools(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
        setError("Could not load categories right now.");
      } finally {
        setLoading(false);
      }
    };

    fetchTools();
  }, []);

  const filteredTools = useMemo(() => {
    const q = normalize(filters.q);

    return tools.filter((t) => {
      const name = normalize(t.name);
      const desc = normalize(t.description);
      const tag = normalize(t.tag);

      const matchesQuery =
        !q || name.includes(q) || desc.includes(q) || tag.includes(q);

      const matchesCategory =
        filters.category === "All" || t.category === filters.category;

      const matchesPricing =
        filters.pricing === "All" || t.price === filters.pricing;

      const matchesUseCase =
        filters.useCase === "All" || t.tag === filters.useCase;

      return matchesQuery && matchesCategory && matchesPricing && matchesUseCase;
    });
  }, [tools, filters]);

  return (
    <main className="page-main">
      {/* ✅ React 19 native metadata */}
      <title>AI Tool Categories | AI Tools Sprint</title>
      <meta
        name="description"
        content="Explore AI tool categories and discover the best tools for productivity, writing, design, automation, and more."
      />

      {/* Page header */}
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-4">
        <h1 className="text-3xl font-bold text-slate-900">
          AI Tool Categories
        </h1>
        <p className="mt-2 text-slate-600">
          Browse AI tools by category and find the right solution for your
          workflow.
        </p>
      </div>

      {loading ? (
        <p className="mx-auto max-w-6xl px-4 py-6 text-slate-600">
          Loading categories...
        </p>
      ) : error ? (
        <p className="mx-auto max-w-6xl px-4 py-6 text-red-600">
          {error}
        </p>
      ) : (
        <>
          {/* Filters */}
          <SearchFiltersBar
            tools={tools}
            filters={filters}
            setFilters={setFilters}
          />

          {/* Category cards */}
          <CategoriesSection tools={tools} setFilters={setFilters} />

          {/* Tools list under selected category */}
          <TopToolsSection tools={filteredTools} />
        </>
      )}
    </main>
  );
}
