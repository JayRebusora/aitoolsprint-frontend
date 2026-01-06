import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://www.aitoolsprint.com";

function upsertMeta(name, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let link = document.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

export default function Seo({ title, description, canonicalPath }) {
  const location = useLocation();

  useEffect(() => {
    if (title) document.title = title;

    if (description) upsertMeta("description", description);
    const path = canonicalPath ?? location.pathname;
    const canonicalUrl = `${SITE_URL}${path === "/" ? "" : path}`;

    upsertLink("canonical", canonicalUrl);
  }, [title, description, canonicalPath, location.pathname]);

  return null;
}
