import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

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

  return (
    <>
      <Helmet>
        <title>Blog - Nep CSS Framework</title>
        <meta name="description" content="Stay updated with the latest news, tips, and tutorials about Nep CSS Framework. Learn best practices for web development and CSS framework usage." />
        <meta name="keywords" content="Nep CSS blog, CSS tutorials, web development tips, frontend news" />
        <meta name="author" content="Abhaya Bikram Shahi" />
        <meta property="og:title" content="Blog - Nep CSS Framework" />
        <meta property="og:description" content="Stay updated with the latest news, tips, and tutorials about Nep CSS Framework. Learn best practices for web development and CSS framework usage." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nepcss.abhayabikramshahi.xyz/blog" />
        <meta property="og:image" content="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Blog - Nep CSS Framework" />
        <meta property="twitter:description" content="Stay updated with the latest news, tips, and tutorials about Nep CSS Framework. Learn best practices for web development and CSS framework usage." />
        <meta property="twitter:image" content="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg" />
        <link rel="canonical" href="https://nepcss.abhayabikramshahi.xyz/blog" />
      </Helmet>
      
      <div className="min-h-screen w-full bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-8">
        <div className="max-w-4xl mx-auto">
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
              className="text-gray-600 text-lg max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Stay updated with the latest news, tips, and tutorials about Nep CSS Framework.
            </motion.p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-gray-600 mb-6">
              We're working on creating valuable content about web development, CSS best practices, 
              and how to make the most of Nep CSS Framework. Check back soon!
            </p>
            <a 
              href="/" 
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;