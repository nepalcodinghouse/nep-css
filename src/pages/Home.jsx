import React from "react";
import { motion } from "framer-motion";
import { Zap, Smartphone, Layers } from "lucide-react";
import { Helmet } from "react-helmet";

function Home() {
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
        <title>Nep CSS Framework - Lightweight, Responsive CSS Framework for Modern Developers</title>
        <meta name="description" content="Nep CSS Framework is a lightweight, responsive, and customizable CSS framework designed for modern Nepali developers. Build beautiful websites faster with minimal effort." />
        <meta name="keywords" content="CSS framework, Nepali CSS, lightweight CSS, responsive design, web development, frontend framework" />
        <meta name="author" content="Abhaya Bikram Shahi" />
        <meta property="og:title" content="Nep CSS Framework - Lightweight, Responsive CSS Framework" />
        <meta property="og:description" content="Build beautiful websites faster with Nep CSS Framework. A lightweight, responsive CSS framework for modern developers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nepcss.abhayabikramshahi.xyz/" />
        <meta property="og:image" content="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Nep CSS Framework - Lightweight, Responsive CSS Framework" />
        <meta property="twitter:description" content="Build beautiful websites faster with Nep CSS Framework. A lightweight, responsive CSS framework for modern developers." />
        <meta property="twitter:image" content="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg" />
        <link rel="canonical" href="https://nepcss.abhayabikramshahi.xyz/" />
      </Helmet>
      
      <div className="relative min-h-screen w-full flex flex-col items-center bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden px-4 pt-8 pb-16">
        
        {/* Hero Content */}
        <motion.div
          className="text-center max-w-4xl mt-12"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Title */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight"
            variants={fadeInUp}
          >
            Build Beautiful Websites <br />
            <span className="text-indigo-600">Faster Than Ever</span>
          </motion.h1>

          {/* Tagline / Subtitle */}
          <motion.p 
            className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto mb-10"
            variants={fadeInUp}
          >
            Nep CSS Framework is a lightweight, responsive, and customizable CSS framework 
            designed for modern Nepali developers. Create stunning websites with minimal effort.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <a
              href="#features"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3.5 rounded-lg shadow-md transition transform hover:-translate-y-0.5"
              aria-label="Explore features of Nep CSS Framework"
            >
              Explore Features
            </a>
            <a
              href="https://www.npmjs.com/package/nep-css-framework"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold px-8 py-3.5 rounded-lg transition"
              aria-label="View Nep CSS Framework on NPM"
            >
              View on NPM
            </a>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.section
          className="mt-20 max-w-5xl w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          aria-labelledby="stats-heading"
        >
          <h2 id="stats-heading" className="sr-only">Framework Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-indigo-600 mb-2">10KB</div>
              <div className="text-gray-600">Minified Size</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-indigo-600 mb-2">100%</div>
              <div className="text-gray-600">Responsive</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-indigo-600 mb-2">50+</div>
              <div className="text-gray-600">Components</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-indigo-600 mb-2">1000+</div>
              <div className="text-gray-600">Happy Devs</div>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section 
          id="features"
          className="mt-24 max-w-6xl w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          aria-labelledby="features-heading"
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Nep CSS Framework?</h2>
            <p className="text-gray-600 text-lg">
              Designed with developers in mind, our framework offers everything you need to build modern websites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition" aria-hidden="true">
                <Zap className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Lightning Fast</h3>
              <p className="text-gray-600">
                Optimized for performance with minimal bundle size for faster load times and better user experience.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition" aria-hidden="true">
                <Smartphone className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Fully Responsive</h3>
              <p className="text-gray-600">
                Works seamlessly on all devices and screen sizes with our mobile-first approach.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition" aria-hidden="true">
                <Layers className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Highly Customizable</h3>
              <p className="text-gray-600">
                Easily customize colors, spacing, and typography to match your brand identity.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Final CTA Section */}
        <motion.section
          className="mt-24 max-w-4xl w-full text-center bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          aria-labelledby="cta-heading"
        >
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Workflow?</h2>
          <p className="text-indigo-100 text-lg max-w-2xl mx-auto mb-8">
            Join thousands of developers who are already building faster with Nep CSS Framework.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/docs"
              className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold px-8 py-3.5 rounded-lg shadow-md transition"
              aria-label="Get started with Nep CSS Framework documentation"
            >
              Get Started
            </a>
            <a
              href="https://nepcss.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white hover:bg-white hover:text-indigo-600 font-semibold px-8 py-3.5 rounded-lg transition"
              aria-label="View full documentation"
            >
              View Documentation
            </a>
          </div>
        </motion.section>
      </div>
    </>
  );
}

export default Home;