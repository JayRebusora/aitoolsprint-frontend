// src/App.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchFiltersBar, { normalize } from "./components/SearchFiltersBar";
import TopToolsSection from "./components/TopToolsSection";
import ComparisonTable from "./components/ComparisonTable";
import CategoriesSection from "./components/CategoriesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FinalCTASection from "./components/FinalCTASection";
import Footer from "./components/Footer";

// ✅ SEO + Schema helpers
import Seo from "./components/Seo";
import Schema from "./components/Schema";

// ✅ Pages
import Categories from "./pages/Categories";
import Services from "./pages/Services";
import ToolPage from "./pages/tools/ToolPage";

import AffiliateDisclosure from "./components/AffiliateDisclosure";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import Contact from "./components/Contact";

import "./App.css";

const API_URL = import.meta.env.VITE_API_URL;

function HomePage() {
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
        setError("Could not load tools right now.");
      } finally {
        setLoading(false);
      }
    };

    fetchTools();
  }, []);

  const featuredTool = useMemo(() => {
    return tools.find((t) => t.isFeatured) || null;
  }, [tools]);

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
      {/* ✅ Canonical + SEO for HOME */}
      <Seo
        title="AI Tools Sprint – Discover the Best AI Tools"
        description="Discover the best AI tools with honest reviews, comparisons, and tutorials. Find the right AI tool faster with AI Tools Sprint."
        canonicalPath="/"
      />

      {/* ✅ Schema for HOME */}
      <Schema
        pageType="WebPage"
        name="AI Tools Sprint – Discover the Best AI Tools"
        description="Discover the best AI tools with honest reviews, comparisons, and tutorials."
      />

      <Hero featuredTool={featuredTool} />

      {loading ? (
        <p className="mx-auto max-w-6xl px-4 py-6 text-slate-600">
          Loading tools...
        </p>
      ) : error ? (
        <p className="mx-auto max-w-6xl px-4 py-6 text-red-600">{error}</p>
      ) : (
        <>
          <SearchFiltersBar
            tools={tools}
            filters={filters}
            setFilters={setFilters}
          />

          <TopToolsSection tools={filteredTools} />

          <ComparisonTable tools={filteredTools} />

          <CategoriesSection tools={tools} setFilters={setFilters} />

          <TestimonialsSection />

          <FinalCTASection />
        </>
      )}
    </main>
  );
}

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* ✅ Main */}
        <Route path="/" element={<HomePage />} />

        {/* ✅ Tools (first tool review page) */}
        <Route path="/tools/:slug" element={<ToolPage />} />

        {/* ✅ Pages */}
        <Route path="/categories" element={<Categories />} />
        <Route path="/services" element={<Services />} />

        {/* ✅ Legal / Contact */}
        <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}
