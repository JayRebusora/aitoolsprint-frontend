import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <article className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
      <h2 className="text-2xl font-semibold mb-1">{post.title}</h2>
      <p className="text-sm text-gray-400 mb-3">By {post.author}</p>
      <p className="text-gray-700 mb-4">
        {post.content?.slice(0, 150)}...
      </p>

      <Link
        to={`/post/${post.slug}`}
        className="text-blue-600 font-medium hover:underline"
      >
        Read More →
      </Link>
    </article>
  );
}

export default PostCard;
