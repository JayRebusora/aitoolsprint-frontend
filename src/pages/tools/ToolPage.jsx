import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Seo from "../../components/Seo";
import Schema from "../../components/Schema";

const API_URL = import.meta.env.VITE_API_URL;

export default function ToolPage() {
  const { slug } = useParams();

  const [tool, setTool] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTool = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(`${API_URL}/api/tools/${slug}`);

        if (!res.ok) {
          throw new Error(`Tool not found (status ${res.status})`);
        }

        const data = await res.json();
        setTool(data);
      } catch (err) {
        console.error("Error fetching tool:", err);
        setError("Tool not found");
      } finally {
        setLoading(false);
      }
    };

    fetchTool();
  }, [slug]);

  if (loading) {
    return (
      <main className="page-main">
        <div className="mx-auto max-w-4xl px-4 py-10 text-slate-600">
          Loading tool...
        </div>
      </main>
    );
  }

  if (error || !tool) {
    return (
      <main className="page-main">
        <div className="mx-auto max-w-4xl px-4 py-10">
          <h1 className="text-3xl font-bold text-slate-900">Tool not found</h1>
          <p className="mt-2 text-slate-600">
            We don’t have a review for this tool yet.
          </p>

          <Link
            to="/"
            className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Back to Home
          </Link>

          <p className="mt-4 text-xs text-slate-500">
            Debug tip: Check your VITE_API_URL and make sure the backend is running.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="page-main">
      <Seo
        title={`${tool.name} Review | AI Tools Sprint`}
        description={`${tool.name} review: features, pricing, pros, cons, and who it’s best for.`}
        canonicalPath={`/tools/${tool.slug}`}
      />

      <Schema
        pageType="WebPage"
        name={`${tool.name} Review`}
        description={tool.description}
      />

      <div className="mx-auto max-w-4xl px-4 py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h1 className="text-3xl font-bold text-slate-900">{tool.name} Review</h1>
          <p className="mt-2 text-slate-600">{tool.description}</p>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
            {tool.rating ? (
              <span className="rounded-full bg-amber-50 px-3 py-1 font-medium text-amber-700">
                ⭐ {Number(tool.rating).toFixed(1)} / 5
              </span>
            ) : null}

            {tool.price ? (
              <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700">
                {tool.price}
              </span>
            ) : null}

            {tool.category ? (
              <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700">
                {tool.category}
              </span>
            ) : null}

            {tool.tag ? (
              <span className="rounded-full bg-blue-50 px-3 py-1 font-medium text-blue-700">
                {tool.tag}
              </span>
            ) : null}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={tool.affiliateUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white ${
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

            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Back to Home
            </Link>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Note: This rating is based on our editorial evaluation and public information.
          </p>
        </div>
      </div>
    </main>
  );
}
