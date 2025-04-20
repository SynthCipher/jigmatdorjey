import { useState, useEffect } from "react";
import { ArrowLeft, Search, Calendar, Clock, Tag, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { blogPosts } from "../assets/assets"; // Import blog posts from assets file

export default function Blogs() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [animatedPosts, setAnimatedPosts] = useState([]);
  const [expandedPost, setExpandedPost] = useState(null);

  // Extract unique categories from blog posts
  const categories = [
    "All",
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  // Filter blog posts based on category and search term
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = category === "All" || post.category === category;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.tags && post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    return matchesCategory && matchesSearch;
  });

  // Animation effect for blog posts appearing
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPosts(filteredPosts);
    }, 100);
    return () => clearTimeout(timer);
  }, [filteredPosts]);

  // Function to handle expanding a blog post
  const handleReadMore = (id) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  // Format reading time
  const formatReadingTime = (minutes) => {
    return minutes <= 1 ? "1 minute read" : `${minutes} minutes read`;
  };

  return (
    <div className="min-h-screen bg-white pt-24 py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header with back button */}
        <div className="flex items-center mb-12">
          <button
            onClick={() => navigate("/")}
            className="flex items-center text-gray-600 hover:text-gray-900 mr-4"
          >
            <ArrowLeft size={20} className="mr-1" /> Back
          </button>
          <h1 className="text-4xl font-bold text-gray-800">My Blog</h1>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-3 pl-12 pr-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search size={20} className="absolute left-4 top-3.5 text-gray-400" />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category === cat
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        {filteredPosts.length > 0 ? (
          <div className="space-y-12">
            {animatedPosts.map((post, index) => (
              <div
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 opacity-0 animate-fadeIn"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="md:flex">
                  {/* Image */}
                  <div className="md:w-1/3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="md:w-2/3 p-6">
                    {/* Categories and tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                        {post.category}
                      </span>
                      {post.tags && post.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full flex items-center"
                        >
                          <Tag size={12} className="mr-1" /> {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                      {post.title}
                    </h2>

                    {/* Meta information */}
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <span className="flex items-center mr-4">
                        <Calendar size={14} className="mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {formatReadingTime(post.readingTime)}
                      </span>
                    </div>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>

                    {/* Expanded Content */}
                    {expandedPost === post.id && (
                      <div className="mt-6 prose max-w-none">
                        {post.content.map((paragraph, idx) => (
                          <div key={idx} className="mb-4">
                            {paragraph.type === "paragraph" && <p>{paragraph.text}</p>}
                            {paragraph.type === "heading" && <h3 className="text-xl font-bold mt-6 mb-3">{paragraph.text}</h3>}
                            {paragraph.type === "image" && (
                              <div className="my-6">
                                <img
                                  src={paragraph.src}
                                  alt={paragraph.alt}
                                  className="rounded-lg w-full"
                                />
                                {paragraph.caption && (
                                  <p className="text-sm text-gray-500 text-center mt-2">
                                    {paragraph.caption}
                                  </p>
                                )}
                              </div>
                            )}
                            {paragraph.type === "list" && (
                              <ul className="list-disc pl-5 space-y-2">
                                {paragraph.items.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            )}
                            {paragraph.type === "code" && (
                              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                                <code>{paragraph.text}</code>
                              </pre>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Read more button */}
                    <button
                      onClick={() => handleReadMore(post.id)}
                      className="flex items-center text-blue-600 hover:text-blue-800 font-medium mt-4"
                    >
                      {expandedPost === post.id ? "Show less" : "Read more"}
                      <ChevronRight
                        size={16}
                        className={`ml-1 transition-transform ${
                          expandedPost === post.id ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-xl">
              No blog posts found matching your criteria.
            </p>
            <button
              onClick={() => {
                setCategory("All");
                setSearchTerm("");
              }}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}