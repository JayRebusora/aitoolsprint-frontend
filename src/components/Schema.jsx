import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://www.aitoolsprint.com";

function setJsonLd(id, data) {
  const scriptId = `jsonld-${id}`;
  let el = document.getElementById(scriptId);

  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = scriptId;
    document.head.appendChild(el);
  }

  el.text = JSON.stringify(data);
}

export default function Schema({ pageType = "WebPage", name, description }) {
  const location = useLocation();
  const url = `${SITE_URL}${location.pathname === "/" ? "" : location.pathname}`;

  useEffect(() => {
    // Organization
    setJsonLd("org", {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "AI Tools Sprint",
      url: SITE_URL,
      logo: `${SITE_URL}/favicon-32x32.png`
    });

    // Website
    setJsonLd("website", {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "AI Tools Sprint",
      url: SITE_URL,
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    });

    // WebPage (per route)
    setJsonLd("page", {
      "@context": "https://schema.org",
      "@type": pageType,
      name: name || "AI Tools Sprint",
      description:
        description ||
        "Discover the best AI tools with reviews, comparisons, and tutorials.",
      url
    });
  }, [url, pageType, name, description]);

  return null;
}
