import React from "react";
import "../../styles/BlogStyle.css";

const blogs = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-photo/food-blogger-young-fitness-cook-recording-video-social-media-making-salad_140725-166774.jpg?t=st=1744265653~exp=1744269253~hmac=d34914d5e72569c8e0f5a925731c0cdee3a1ff6696f984e11978cbd70698a6a0&w=740",
    date: "February 22, 2025",
    author: "Ethan Brooks",
    title: "From My Kitchen to Yours: Recipes That Warm the Soul",
    description: "Made with heart, shared with you — kitchen love always.",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-photo/food-blogger-young-girl-pink-apron-recording-video-social-media-cutting-lettuce_140725-166784.jpg?t=st=1744265660~exp=1744269260~hmac=d76de31467970cc355acd21a493fd1d85fca014c92466a13470e8c62d497539e&w=740",
    date: "March 27, 2025",
    author: "Lily Thompson",
    title: "Budget Bites: Big Flavor Without Burning Your Wallet",
    description:
      "Tasty, easy, affordable meals that keep both belly and budget happy",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/free-photo/food-blogger-pretty-cute-healthy-chef-recording-video-social-media-holding-parsley_140725-166760.jpg?t=st=1744265676~exp=1744269276~hmac=c9be882c4b97bb8e2094c391d72ba601e462490fc94b6297b78c11610104b9af&w=740",
    date: "April 3, 2025",
    author: "Oliver Davis",
    title: "Midnight Cravings? Quick Bites in Under 15 Minutes",
    description: "Late-night hunger hits? Whip up something fast and delicious.",
  },
  {
    id: 4,
    image:
      "https://img.freepik.com/free-photo/food-blogger-cute-lovely-chef-pink-apron-recording-video-social-media-covering-mouth-happy_140725-166708.jpg?t=st=1744265670~exp=1744269270~hmac=27e5033c1ebb66d44f31c831ffffdd32582a11d113f089d3bdb6bc59b102d815&w=740",
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
