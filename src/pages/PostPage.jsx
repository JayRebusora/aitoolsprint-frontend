import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function PostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/posts/${slug}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error("Error fetching post:", err));
  }, [slug]);

  if (!post) {
    return <p className="text-center text-gray-500">Loading post, parekoy…</p>;
  }

  return (
    <article className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <Link to="/" className="text-sm text-blue-600 hover:underline">
        ← Back to posts
      </Link>

      <h1 className="text-3xl font-bold mt-3 mb-2">{post.title}</h1>
      <p className="text-sm text-gray-400 mb-6">By {post.author}</p>

      <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-line">
        {post.content}
      </p>
    </article>
  );
}

export default PostPage;
