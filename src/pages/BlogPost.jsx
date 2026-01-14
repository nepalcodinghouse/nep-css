import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Calendar, Clock, Tag, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { Link, useParams } from "react-router-dom";

function BlogPost() {
  const { slug } = useParams();
  
  // Blog post data - in a real app this would come from an API or CMS
  const blogPost = {
    title: "Getting Started with Nep CSS Framework",
    date: "Jan 15, 2024",
    readTime: "5 min read",
    category: "Tutorial",
    author: "Abhaya Bikram Shahi",
    content: `
      <div class="space-y-6">
        <p class="text-lg leading-relaxed">
          Nep CSS Framework is a modern utility-first CSS framework that helps developers build responsive and beautiful user interfaces quickly. Whether you're a beginner or an experienced developer, this guide will walk you through everything you need to get started.
        </p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Installation</h2>
        <p class="leading-relaxed">
          Getting started with Nep CSS is straightforward. You can install it via CDN, NPM, or download the files directly.
        </p>
        
        <div class="bg-gray-50 p-4 rounded-lg my-4">
          <h3 class="font-semibold text-gray-800 mb-2">Via CDN:</h3>
          <pre class="bg-white p-3 rounded text-sm overflow-x-auto"><code>&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/nep-css-framework@latest/dist/nep.min.css"&gt;</code></pre>
        </div>
        
        <div class="bg-gray-50 p-4 rounded-lg my-4">
          <h3 class="font-semibold text-gray-800 mb-2">Via NPM:</h3>
          <pre class="bg-white p-3 rounded text-sm overflow-x-auto"><code>npm install nep-css-framework</code></pre>
        </div>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Basic Usage</h2>
        <p class="leading-relaxed">
          Once installed, you can start using Nep CSS classes immediately. The framework follows a utility-first approach, meaning you build components by combining small, single-purpose classes.
        </p>
        
        <div class="bg-gray-50 p-4 rounded-lg my-4">
          <h3 class="font-semibold text-gray-800 mb-2">Simple Card Example:</h3>
          <pre class="bg-white p-3 rounded text-sm overflow-x-auto"><code>&lt;div class="bg-white rounded-lg shadow-md p-6 max-w-sm"&gt;
  &lt;h3 class="text-xl font-bold text-gray-900 mb-2"&gt;Card Title&lt;/h3&gt;
  &lt;p class="text-gray-600"&gt;This is a simple card component built with Nep CSS.&lt;/p&gt;
  &lt;button class="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"&gt;
    Get Started
  &lt;/button&gt;
&lt;/div&gt;</code></pre>
        </div>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Features</h2>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Utility-First:</strong> Build complex components from primitive utility classes</li>
          <li><strong>Responsive:</strong> Mobile-first responsive design system</li>
          <li><strong>Customizable:</strong> Easy to customize colors, spacing, and breakpoints</li>
          <li><strong>Lightweight:</strong> Optimized for performance with minimal bundle size</li>
          <li><strong>Well-documented:</strong> Comprehensive documentation and examples</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Next Steps</h2>
        <p class="leading-relaxed">
          Now that you have Nep CSS installed, explore the documentation to learn about:
        </p>
        <ul class="list-disc list-inside space-y-2 text-gray-700 ml-4">
          <li>Layout utilities (flexbox, grid, spacing)</li>
          <li>Typography and color system</li>
          <li>Component examples and patterns</li>
          <li>Customization options</li>
          <li>Best practices and tips</li>
        </ul>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p class="text-blue-800">
            <strong>Pro Tip:</strong> Start with small components and gradually build up complexity. 
            The utility-first approach makes it easy to iterate and refine your designs.
          </p>
        </div>
      </div>
    `
  };

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

  return (
    <>
      <Helmet>
        <title>{blogPost.title} - Nep CSS Framework</title>
        <meta name="description" content="Learn how to quickly set up and start using Nep CSS Framework in your projects. This comprehensive guide covers installation, basic components, and best practices." />
        <meta name="keywords" content="Nep CSS tutorial, CSS framework installation, getting started with CSS framework" />
        <meta name="author" content={blogPost.author} />
        <meta property="og:title" content={`${blogPost.title} - Nep CSS Framework`} />
        <meta property="og:description" content="Learn how to quickly set up and start using Nep CSS Framework in your projects." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://nepcss.abhayabikramshahi.xyz/getting-started-with-nep-css-framework`} />
        <link rel="canonical" href={`https://nepcss.abhayabikramshahi.xyz/getting-started-with-nep-css-framework`} />
      </Helmet>
      
      <div className="min-h-screen w-full bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog Link */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
          </motion.div>

          <motion.article
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Article Header */}
            <div className="p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  <Tag className="inline w-4 h-4 mr-1" />
                  {blogPost.category}
                </span>
                <span className="text-gray-500 text-sm flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {blogPost.date}
                </span>
                <span className="text-gray-500 text-sm flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {blogPost.readTime}
                </span>
              </div>
              
              <motion.h1 
                className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4"
                variants={fadeInUp}
              >
                {blogPost.title}
              </motion.h1>
              
              <motion.p 
                className="text-gray-600 text-lg mb-6"
                variants={fadeInUp}
              >
                Written by <span className="font-semibold text-gray-800">{blogPost.author}</span>
              </motion.p>

              {/* Action Buttons */}
              <motion.div 
                className="flex flex-wrap gap-3 mb-8"
                variants={fadeInUp}
              >
                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
                <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors">
                  <Bookmark className="w-4 h-4" />
                  Save
                </button>
              </motion.div>
            </div>

            {/* Article Content */}
            <motion.div 
              className="px-8 md:px-12 pb-12"
              variants={fadeInUp}
            >
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
            </motion.div>
          </motion.article>

          {/* Related Articles Section */}
          <motion.div 
            className="mt-12"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="text-2xl font-bold text-gray-900 mb-6"
              variants={fadeInUp}
            >
              Related Articles
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Mastering CSS Flexbox Layouts",
                  excerpt: "Discover the power of CSS Flexbox for creating responsive layouts...",
                  link: "/blog"
                },
                {
                  title: "Essential Web Accessibility Principles",
                  excerpt: "Understanding web accessibility is crucial for creating inclusive digital experiences...",
                  link: "/blog"
                }
              ].map((article, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Link 
                    to={article.link}
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                  >
                    Read More
                    <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default BlogPost;