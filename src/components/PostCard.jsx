import { Link } from "react-router-dom";

function PostCard({ post }) {
  const hasAffiliate = !!post.affiliateUrl;

  return (
    <article className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
      <h2 className="text-2xl font-semibold mb-1">{post.title}</h2>
      <p className="text-sm text-gray-400 mb-3">By {post.author}</p>

      <p className="text-gray-700 mb-4">
        {post.content?.slice(0, 150)}...
      </p>

      <div className="flex flex-wrap items-center gap-3">
        {/* Internal blog link */}
        <Link
          to={`/post/${post.slug}`}
          className="text-blue-600 font-medium hover:underline"
        >
          Read More →
        </Link>

        {/* Optional affiliate button */}
        {hasAffiliate && (
          <a
            href={post.affiliateUrl}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Try Tool →
          </a>
        )}
      </div>

      {/* Micro-disclosure */}
      {hasAffiliate && (
        <p className="mt-3 text-xs text-gray-400">
          Some links are affiliate links. We may earn a commission at no extra cost to you.
        </p>
      )}
    </article>
  );
}

export default PostCard;
