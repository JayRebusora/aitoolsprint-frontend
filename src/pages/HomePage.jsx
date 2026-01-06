import { useEffect, useState } from "react";
import PostCard from "../components/PostCard.jsx";
import API_BASE from "../apiConfig";

import Seo from "../components/Seo";
import Schema from "../components/Schema";
import TutorialsSection from "../components/TutorialsSection"; // ✅ ADD

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/api/posts`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setPosts([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="page-main">
      {/* SEO */}
      <Seo
        title="AI Tools Sprint – Discover the Best AI Tools"
        description="Discover the best AI tools with honest reviews, comparisons, and tutorials. Find the right AI tool faster with AI Tools Sprint."
        canonicalPath="/"
      />

      {/* Schema */}
      <Schema
        pageType="WebPage"
        name="AI Tools Sprint – Discover the Best AI Tools"
        description="Discover the best AI tools with honest reviews, comparisons, and tutorials."
      />

      {/* ✅ This is what the header /#tutorials will scroll to */}
      <TutorialsSection />

      {loading ? (
        <p className="text-center text-gray-500">Loading posts…</p>
      ) : !posts.length ? (
        <p className="text-center text-gray-500">No posts yet, parekoy…</p>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </main>
  );
}

export default HomePage;
