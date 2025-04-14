import React from "react";
import "../../styles/BlogStyle.css";

const blogs = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-photo/young-blogger-showing-decor-diy-tutorial_23-2148538791.jpg?t=st=1744625675~exp=1744629275~hmac=8b0274001e3ec1d8075c3f64ba3d32ad79a96abb601130fc46d976d7ce4f1a5b&w=1380",
    date: "February 22, 2025",
    author: "Ethan Brooks",
    title: "From My Kitchen to Yours: Recipes That Warm the Soul",
    description: "Made with heart, shared with you — kitchen love always.",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-photo/happy-blogger-showing-decor-diy-tutorial_23-2148538792.jpg?t=st=1744625783~exp=1744629383~hmac=b526336faad6e70329c870a5fc58479347b8b2087138bd9113579ea271398dde&w=1380",
    date: "March 27, 2025",
    author: "Lily Thompson",
    title: "Budget Bites: Big Flavor Without Burning Your Wallet",
    description:    
      "Tasty, easy, affordable meals that keep both belly and budget happy",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/free-photo/young-blogger-showing-decor-diy-tutorial-camera_23-2148538793.jpg?t=st=1744625948~exp=1744629548~hmac=ec261b8a77b48510b6ac608070bae0d3ff4f6e30ec14808db8fab5396bd890fc&w=1380",
    date: "April 3, 2025",
    author: "Oliver Davis",
    title: "Midnight Cravings? Quick Bites in Under 15 Minutes",
    description: "Late-night hunger hits? Whip up something fast and delicious.",
  },
  {
    id: 4,
    image:
      "https://img.freepik.com/free-photo/young-blogger-smiling-holding-shopping-bag_23-2148538787.jpg?t=st=1744626008~exp=1744629608~hmac=d06123f7d19ae193debc8b433ceb7f9cd86718ee3f6b5c0d57fce2b85adfede3&w=1380",
    date: "December 5, 2024",
    author: "Ava Bennett",
    title: "Fusion Feasts: When East Meets West on Your Plate",
    description: "East and West unite, creating magic with every flavorful bite",
  },
];

const BlogSection = () => {
  return (
    <>
      {/* 🔥 Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-content">
          <h1 className="blog-hero-title">Welcome to Our Blog</h1>
          <p className="blog-hero-subtitle">Fresh insights, delicious moments, and stories worth sharing.</p>
        </div>
      </section>

      {/* 🔽 Blog Section */}
      <section className="blog-section">
        <video autoPlay loop muted playsInline className="blog-video">
          <source
            src="https://videos.pexels.com/video-files/7102292/7102292-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <h2 className="blog-heading">Scented stories for every mood</h2>
        <div className="blog-grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <div className="blog-content">
                <p className="blog-meta">
                  {blog.date} • {blog.author}
                </p>
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-description">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="view-more">View more articles →</button>
      </section>
    </>
  );
};

export default BlogSection;
