import { useEffect, useState } from "react";
import PostCard from "../components/PostCard.jsx";
import API_BASE from "../apiConfig";

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/api/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  if (!posts.length) {
    return <p className="text-center text-gray-500">No posts yet, parekoy…</p>;
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}

export default HomePage;
