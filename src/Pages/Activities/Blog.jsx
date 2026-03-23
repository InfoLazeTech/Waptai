import React from "react";

const blogs = [
  {
    id: 1,
    title: "How to Learn React Faster",
    desc: "A complete guide to mastering React with practical tips.",
    image: "https://source.unsplash.com/600x400/?react,code",
    author: "Aryan",
    date: "March 20, 2026",
  },
  {
    id: 2,
    title: "Understanding JavaScript Closures",
    desc: "Deep dive into closures with real-world examples.",
    image: "https://source.unsplash.com/600x400/?javascript",
    author: "Aryan",
    date: "March 18, 2026",
  },
  {
    id: 3,
    title: "Tailwind CSS Tips & Tricks",
    desc: "Make your UI faster and cleaner with Tailwind.",
    image: "https://source.unsplash.com/600x400/?tailwind,ui",
    author: "Aryan",
    date: "March 15, 2026",
  },
];

function Blog() {
  return (
    <div className="bg-gray-100 py-14 h-screen">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Our Blog</h1>
        <p className="text-gray-600 mt-2">
          Latest articles, tutorials & updates
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">
                {blog.title}
              </h2>

              <p className="text-gray-600 text-sm mb-3">
                {blog.desc}
              </p>

              <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                <span>{blog.author}</span>
                <span>{blog.date}</span>
              </div>

              <button className="text-blue-600 font-medium hover:underline">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;