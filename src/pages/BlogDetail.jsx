// ✅ /Users/apichet/Desktop/portfolio/src/pages/BlogDetail.jsx
// ✅ /Users/apichet/Desktop/portfolio/src/pages/BlogDetail.jsx

import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../data/blogPosts";

const BlogDetail = () => {
  const { lang = "th", id } = useParams(); // รองรับ path: /blog/:lang/:id

  const posts = blogData[lang] || [];
  const post = posts.find(p => p.id === id);

  if (!post) {
    return (
      <section className="py-5" style={{ marginTop: "5rem" }}>
        <div className="container text-center">
          <h4>บทความไม่พบ 😢</h4>
          <p>ตรวจสอบลิงก์หรือเลือกภาษาที่ถูกต้อง</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-5" style={{ marginTop: "5rem" }}>
      <div className="container">
        <h2 className="mb-3">{post.title}</h2>
        <p className="text-muted">{post.date} • {post.author}</p>
        <hr />
        <div className="blog-content">{post.content}</div>
      </div>
    </section>
  );
};

export default BlogDetail;
