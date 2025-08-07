// /Users/apichet/Desktop/portfolio/src/components/BlogList.jsx
// /Users/apichet/Desktop/portfolio/src/components/BlogList.jsx
// ✅ /src/components/BlogList.jsx

import blogData from "../data/blogPosts";
import { useState } from "react";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [lang, setLang] = useState("th"); // ภาษาเริ่มต้น
  const posts = blogData[lang] || []; // ดึงโพสต์ตามภาษา

  return (
    <section id="blogs" className="py-5">
      <div className="container">
        <h2 className="mb-4 text-center">📝 Blog Posts</h2>

        {/* Language Selector */}
        <div className="mb-3 text-end">
          <select value={lang} onChange={e => setLang(e.target.value)}>
            <option value="th">ภาษาไทย</option>
            <option value="en">English</option>
          </select>
        </div>

        {/* Blog Cards */}
        <div className="row">
          {posts.map(post => (
            <div className="col-md-6 mb-4" key={post.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text text-muted">{post.summary}</p>
                  <p className="card-subtitle small text-secondary mb-2">
                    {post.date} • {post.author}
                  </p>
                  <Link
                    to={`/blog/${lang}/${post.id}`}
                    className="btn btn-outline-primary btn-sm"
                  >
                    อ่านต่อ / Read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogList;
