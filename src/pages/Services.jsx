import React from "react";
import Categories from "./Categories";
import Seo from "../components/Seo";
import Schema from "../components/Schema";

export default function Services() {
  return (
    <>
      {/* ✅ SEO */}
      <Seo
        title="AI Tool Categories & Services | AI Tools Sprint"
        description="Browse AI tool categories and services to find the best AI tools for productivity, writing, design, and automation."
        canonicalPath="/services"
      />

      {/* ✅ Schema */}
      <Schema
        pageType="CollectionPage"
        name="AI Tool Categories & Services | AI Tools Sprint"
        description="Browse AI tool categories and services to discover the right AI tools faster."
      />

      <Categories />
    </>
  );
}
