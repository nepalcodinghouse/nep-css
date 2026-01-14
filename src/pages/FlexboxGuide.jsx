import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Calendar, Clock, Tag, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";

function FlexboxGuide() {
  const blogPost = {
    title: "Mastering CSS Flexbox Layouts",
    date: "Jan 12, 2024",
    readTime: "8 min read",
    category: "CSS Guide",
    author: "Abhaya Bikram Shahi",
    content: `
      <div class="space-y-6">
        <p class="text-lg leading-relaxed text-white">
          Flexbox revolutionized how we approach layout design in CSS. This comprehensive guide dives deep into flexbox properties, alignment techniques, and real-world examples that will transform how you build responsive layouts.
        </p>
        
        <h2 class="text-2xl font-bold text-white mt-8 mb-4">Understanding Flexbox Fundamentals</h2>
        <p class="leading-relaxed text-gray-200">
          Flexbox (Flexible Box Layout) is a CSS layout module designed to provide a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown or dynamic.
        </p>
        
        <div class="bg-gray-800 p-4 rounded-lg my-4 border border-gray-700">
          <h3 class="font-semibold text-white mb-2">Basic Flex Container:</h3>
          <pre class="bg-gray-900 p-3 rounded text-sm overflow-x-auto"><code>.container {
  display: flex;
  flex-direction: row; /* or column */
  justify-content: space-between;
  align-items: center;
}</code></pre>
        </div>
        
        <h2 class="text-2xl font-bold text-white mt-8 mb-4">Key Flexbox Properties</h2>
        
        <h3 class="text-xl font-bold text-white mt-6 mb-3">Container Properties</h3>
        <ul class="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li><strong class="text-white">display:</strong> flex | inline-flex</li>
          <li><strong class="text-white">flex-direction:</strong> row | row-reverse | column | column-reverse</li>
          <li><strong class="text-white">justify-content:</strong> flex-start | flex-end | center | space-between | space-around</li>
          <li><strong class="text-white">align-items:</strong> stretch | flex-start | flex-end | center | baseline</li>
          <li><strong class="text-white">flex-wrap:</strong> nowrap | wrap | wrap-reverse</li>
        </ul>
        
        <h3 class="text-xl font-bold text-white mt-6 mb-3">Item Properties</h3>
        <ul class="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li><strong class="text-white">flex-grow:</strong> Defines ability to grow relative to other items</li>
          <li><strong class="text-white">flex-shrink:</strong> Defines ability to shrink relative to other items</li>
          <li><strong class="text-white">flex-basis:</strong> Defines default size before distributing remaining space</li>
          <li><strong class="text-white">align-self:</strong> Overrides align-items for individual items</li>
          <li><strong class="text-white">order:</strong> Controls visual order of items</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-white mt-8 mb-4">Practical Examples</h2>
        
        <div class="bg-gray-800 p-4 rounded-lg my-4 border border-gray-700">
          <h3 class="font-semibold text-white mb-2">Navigation Bar Example:</h3>
          <pre class="bg-gray-900 p-3 rounded text-sm overflow-x-auto"><code>&lt;nav class="flex justify-between items-center p-4 bg-gray-800"&gt;
  &lt;div class="text-white font-bold"&gt;Logo&lt;/div&gt;
  &lt;div class="flex space-x-6"&gt;
    &lt;a href="#" class="text-gray-300 hover:text-white"&gt;Home&lt;/a&gt;
    &lt;a href="#" class="text-gray-300 hover:text-white"&gt;About&lt;/a&gt;
    &lt;a href="#" class="text-gray-300 hover:text-white"&gt;Contact&lt;/a&gt;
  &lt;/div&gt;
&lt;/nav&gt;</code></pre>
        </div>
        
        <div class="bg-gray-800 p-4 rounded-lg my-4 border border-gray-700">
          <h3 class="font-semibold text-white mb-2">Card Grid Example:</h3>
          <pre class="bg-gray-900 p-3 rounded text-sm overflow-x-auto"><code>&lt;div class="flex flex-wrap gap-4"&gt;
  &lt;div class="flex-1 min-w-[250px] bg-gray-800 p-6 rounded-lg"&gt;
    &lt;h3 class="text-white font-bold mb-2"&gt;Card 1&lt;/h3&gt;
    &lt;p class="text-gray-300"&gt;Content here...&lt;/p&gt;
  &lt;/div&gt;
  &lt;div class="flex-1 min-w-[250px] bg-gray-800 p-6 rounded-lg"&gt;
    &lt;h3 class="text-white font-bold mb-2"&gt;Card 2&lt;/h3&gt;
    &lt;p class="text-gray-300"&gt;Content here...&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
        
        <h2 class="text-2xl font-bold text-white mt-8 mb-4">Common Patterns</h2>
        <ul class="list-disc list-inside space-y-2 text-gray-300">
          <li><strong class="text-white">Holy Grail Layout:</strong> Header, footer, main content with two sidebars</li>
          <li><strong class="text-white">Sticky Footer:</strong> Footer that sticks to bottom when content is short</li>
          <li><strong class="text-white">Equal Height Columns:</strong> Columns that automatically match height</li>
          <li><strong class="text-white">Centered Content:</strong> Perfectly centered content both vertically and horizontally</li>
          <li><strong class="text-white">Responsive Navigation:</strong> Navigation that adapts to different screen sizes</li>
        </ul>
        
        <div class="bg-purple-900/30 border-l-4 border-purple-500 p-4 my-6 rounded-r-lg">
          <p class="text-purple-300">
            <strong class="text-purple-200">Advanced Tip:</strong> Combine flexbox with CSS Grid for complex layouts. 
            Use flexbox for one-dimensional layouts and Grid for two-dimensional layouts.
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
        <title>{blogPost.title} - Master CSS Flexbox | Nep CSS Framework</title>
        <meta name="description" content="Master CSS Flexbox layouts with comprehensive guide covering properties, alignment techniques, and real-world examples. Learn flexbox fundamentals, container properties, item properties, and practical applications for responsive web design." />
        <meta name="keywords" content="CSS flexbox, flexbox tutorial, CSS layout, responsive design, flexbox examples, flexbox properties, CSS alignment, web development, layout techniques" />
        <meta name="author" content={blogPost.author} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${blogPost.title} - Master CSS Flexbox`} />
        <meta property="og:description" content="Master CSS Flexbox layouts with comprehensive guide covering properties, alignment techniques, and real-world examples." />
        <meta property="og:url" content={`https://nepcss.abhayabikramshahi.xyz/mastering-css-flexbox-layouts`} />
        <meta property="og:site_name" content="Nep CSS Framework" />
        <meta property="article:published_time" content="2024-01-12T00:00:00Z" />
        <meta property="article:modified_time" content="2024-01-12T00:00:00Z" />
        <meta property="article:author" content={blogPost.author} />
        <meta property="article:section" content={blogPost.category} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={`${blogPost.title} - Master CSS Flexbox`} />
        <meta property="twitter:description" content="Master CSS Flexbox layouts with comprehensive guide covering properties and real-world examples." />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://nepcss.abhayabikramshahi.xyz/mastering-css-flexbox-layouts`} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": blogPost.title,
            "description": "Master CSS Flexbox layouts with comprehensive guide covering properties, alignment techniques, and real-world examples. Learn flexbox fundamentals, container properties, item properties, and practical applications for responsive web design.",
            "author": {
              "@type": "Person",
              "name": blogPost.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Nep CSS Framework",
              "logo": {
                "@type": "ImageObject",
                "url": "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg"
              }
            },
            "datePublished": "2024-01-12T00:00:00Z",
            "dateModified": "2024-01-12T00:00:00Z",
            "articleSection": blogPost.category,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://nepcss.abhayabikramshahi.xyz/mastering-css-flexbox-layouts`
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen w-full bg-gray-50 px-4 py-8">
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
              className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
          </motion.div>

          <motion.article
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Article Header */}
            <div className="p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full border border-purple-200">
                  <Tag className="inline w-4 h-4 mr-1" />
                  {blogPost.category}
                </span>
                <span className="text-gray-600 text-sm flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {blogPost.date}
                </span>
                <span className="text-gray-600 text-sm flex items-center">
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
                className="text-gray-700 text-lg mb-6"
                variants={fadeInUp}
              >
                Written by <span className="font-semibold text-gray-900">{blogPost.author}</span>
              </motion.p>

              {/* Action Buttons */}
              <motion.div 
                className="flex flex-wrap gap-3 mb-8"
                variants={fadeInUp}
              >
                <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
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
                  title: "Getting Started with Nep CSS Framework",
                  excerpt: "Learn how to quickly set up and start using Nep CSS Framework in your projects...",
                  link: "/getting-started-with-nep-css-framework"
                },
                {
                  title: "Essential Web Accessibility Principles",
                  excerpt: "Understanding web accessibility is crucial for creating inclusive digital experiences...",
                  link: "/blog"
                }
              ].map((article, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-700 mb-4">{article.excerpt}</p>
                  <Link 
                    to={article.link}
                    className="text-purple-600 hover:text-purple-800 font-medium inline-flex items-center"
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

export default FlexboxGuide;