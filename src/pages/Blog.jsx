import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";

function Blog() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Nep CSS Framework",
      excerpt: "Learn how to quickly set up and start using Nep CSS Framework in your projects. This comprehensive guide covers installation, basic components, and best practices for building modern web interfaces.",
      date: "Jan 15, 2024",
      readTime: "5 min read",
      category: "Tutorial",
      link: "/getting-started-with-nep-css-framework"
    },
    {
      id: 2,
      title: "Mastering CSS Flexbox Layouts",
      excerpt: "Discover the power of CSS Flexbox for creating responsive layouts. Learn practical techniques and common patterns that will help you build flexible, mobile-first designs without complex grid systems.",
      date: "Jan 12, 2024",
      readTime: "8 min read",
      category: "CSS Guide",
      link: "/mastering-css-flexbox-layouts"
    },
    {
      id: 3,
      title: "Essential Web Accessibility Principles",
      excerpt: "Understanding web accessibility is crucial for creating inclusive digital experiences. Learn fundamental accessibility principles, WCAG guidelines, and practical implementation techniques for semantic HTML and ARIA attributes.",
      date: "Jan 10, 2024",
      readTime: "6 min read",
      category: "Accessibility",
      link: "/blog"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Nep CSS Framework | Web Development Tutorials & Tips</title>
        <meta name="description" content="Comprehensive blog about Nep CSS Framework, web development tutorials, CSS best practices, and frontend development tips. Stay updated with the latest guides and resources." />
        <meta name="keywords" content="Nep CSS blog, CSS tutorials, web development tips, frontend news, CSS framework guides, responsive design, utility-first CSS, web development resources" />
        <meta name="author" content="Abhaya Bikram Shahi" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog - Nep CSS Framework | Web Development Tutorials" />
        <meta property="og:description" content="Comprehensive blog about Nep CSS Framework, web development tutorials, CSS best practices, and frontend development tips." />
        <meta property="og:url" content="https://nepcss.abhayabikramshahi.xyz/blog" />
        <meta property="og:site_name" content="Nep CSS Framework" />
        <meta property="og:image" content="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg" />
        <meta property="og:image:alt" content="Nep CSS Framework Logo" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Blog - Nep CSS Framework | Web Development Tutorials" />
        <meta property="twitter:description" content="Comprehensive blog about Nep CSS Framework and web development tutorials." />
        <meta property="twitter:image" content="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://nepcss.abhayabikramshahi.xyz/blog" />
        
        {/* Structured Data for Blog */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Nep CSS Framework Blog",
            "description": "Comprehensive blog about Nep CSS Framework, web development tutorials, CSS best practices, and frontend development tips.",
            "url": "https://nepcss.abhayabikramshahi.xyz/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Nep CSS Framework",
              "logo": {
                "@type": "ImageObject",
                "url": "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg"
              }
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "datePublished": new Date(post.date).toISOString(),
              "author": {
                "@type": "Person",
                "name": "Abhaya Bikram Shahi"
              },
              "articleSection": post.category
            }))
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen w-full bg-gray-50 px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
              variants={fadeInUp}
            >
              Blog
            </motion.h1>
            <motion.p 
              className="text-gray-700 text-lg max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Stay updated with the latest news, tips, and tutorials about web development, CSS best practices, and Nep CSS Framework.
            </motion.p>
          </motion.div>

          {/* Featured Post */}
          <motion.div 
            className="mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full border border-blue-200">
                    <Tag className="inline w-4 h-4 mr-1" />
                    {blogPosts[0].category}
                  </span>
                  <span className="text-gray-600 text-sm flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {blogPosts[0].date}
                  </span>
                  <span className="text-gray-600 text-sm flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-700 mb-6">{blogPosts[0].excerpt}</p>
                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                  <p class="text-gray-700">Click below to read the full article and learn how to get started with Nep CSS Framework.</p>
                </div>
                <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium group">
                  <Link to={blogPosts[0].link} className="flex items-center">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {blogPosts.slice(1).map((post) => (
              <motion.div 
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                variants={fadeInUp}
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                    <Link to={post.link}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div 
            className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="mb-6 opacity-90">Subscribe to our newsletter for the latest articles and updates</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Blog;