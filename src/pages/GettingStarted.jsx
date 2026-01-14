import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  Calendar,
  Clock,
  Tag,
  ArrowLeft,
  Share2,
  Bookmark
} from "lucide-react";
import { Link } from "react-router-dom";

export default function GettingStarted() {
  const blogPost = {
    title: "Getting Started with Nep CSS Framework",
    date: "Jan 15, 2024",
    readTime: "5 min read",
    category: "Tutorial",
    author: "Abhaya Bikram Shahi",
    content: `
      <div class="space-y-8 text-base leading-relaxed text-neutral-800">

        <p class="text-lg font-medium text-black">
          Nep CSS Framework is a modern utility-first CSS framework built to help
          developers create clean, fast, and responsive UIs without pain.
        </p>

        <h2 class="text-3xl font-bold text-black mt-12">
          Installation
        </h2>

        <p class="text-neutral-700">
          Getting started is simple. Install via NPM or use CDN for quick testing.
        </p>

        <pre class="bg-black text-white p-5 rounded-xl text-sm overflow-x-auto font-mono">
npm install nep-css-framework
        </pre>

        <h2 class="text-3xl font-bold text-black mt-12">
          Basic Usage
        </h2>

        <p class="text-neutral-700">
          Nep CSS follows a utility-first approach. You build components directly
          using small, readable classes.
        </p>

        <pre class="bg-black text-white p-5 rounded-xl text-sm overflow-x-auto font-mono">
&lt;div class="bg-rakh-kalo text-thulo"&gt;
  &lt;h3 class="text-thulo  text-kalo"&gt;Card Title&lt;/h3&gt;
  &lt;p class="text-kalo"&gt;Simple card using Nep CSS&lt;/p&gt;
&lt;/div&gt;
        </pre>

        <h2 class="text-3xl font-bold text-black mt-12">
          Why Nep CSS?
        </h2>

        <ul class="list-disc list-inside space-y-3 text-neutral-700">
          <li><span class="font-semibold text-black">Utility-first</span> architecture</li>
          <li><span class="font-semibold text-black">Mobile-first</span> responsiveness</li>
          <li><span class="font-semibold text-black">Lightweight</span> and fast</li>
          <li><span class="font-semibold text-black">Easy customization</span></li>
        </ul>

        <div class="bg-neutral-100 border-l-4 border-black p-5 rounded-lg mt-10">
          <p class="text-neutral-800">
            <strong class="text-black">Pro Tip:</strong>
            Keep your components small. Utility classes scale better than custom CSS.
          </p>
        </div>

      </div>
    `
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <>
      <Helmet>
        <title>{blogPost.title} – Nep CSS Framework | Learn CSS Utilities</title>
        <meta
          name="description"
          content="Complete guide to getting started with Nep CSS Framework. Learn installation, basic usage, and best practices for building modern responsive websites with utility-first CSS."
        />
        <meta name="keywords" content="Nep CSS Framework, CSS utilities, getting started, CSS framework tutorial, responsive design, utility-first CSS, web development" />
        <meta name="author" content={blogPost.author} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${blogPost.title} – Nep CSS Framework`} />
        <meta property="og:description" content="Complete guide to getting started with Nep CSS Framework. Learn installation, basic usage, and best practices." />
        <meta property="og:url" content={`https://nepcss.abhayabikramshahi.xyz/getting-started-with-nep-css-framework`} />
        <meta property="og:site_name" content="Nep CSS Framework" />
        <meta property="article:published_time" content="2024-01-15T00:00:00Z" />
        <meta property="article:modified_time" content="2024-01-15T00:00:00Z" />
        <meta property="article:author" content={blogPost.author} />
        <meta property="article:section" content={blogPost.category} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={`${blogPost.title} – Nep CSS Framework`} />
        <meta property="twitter:description" content="Complete guide to getting started with Nep CSS Framework." />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://nepcss.abhayabikramshahi.xyz/getting-started-with-nep-css-framework`} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": blogPost.title,
            "description": "Complete guide to getting started with Nep CSS Framework. Learn installation, basic usage, and best practices for building modern responsive websites with utility-first CSS.",
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
            "datePublished": "2024-01-15T00:00:00Z",
            "dateModified": "2024-01-15T00:00:00Z",
            "articleSection": blogPost.category,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://nepcss.abhayabikramshahi.xyz/getting-started-with-nep-css-framework`
            }
          })}
        </script>
      </Helmet>

      {/* Page Wrapper */}
      <section className="min-h-screen bg-white px-4 py-14">
        <div className="max-w-4xl mx-auto">

          {/* Back */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-black mb-8 text-sm font-medium"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          {/* Article */}
          <motion.article
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="bg-white border border-neutral-200 rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-8 border-b border-neutral-200">
              <div className="flex flex-wrap gap-4 text-xs text-neutral-600 mb-5">
                <span className="flex items-center gap-1 bg-neutral-100 text-black px-3 py-1 rounded-full">
                  <Tag size={13} />
                  {blogPost.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={13} />
                  {blogPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={13} />
                  {blogPost.readTime}
                </span>
              </div>

              <h1 className="text-4xl leading-tight font-extrabold text-black">
                {blogPost.title}
              </h1>

              <p className="mt-3 text-neutral-600 text-sm">
                Written by{" "}
                <span className="text-black font-semibold">
                  {blogPost.author}
                </span>
              </p>

              {/* Actions */}
              <div className="flex gap-3 mt-6">
                <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90">
                  <Share2 size={15} />
                  Share
                </button>
                <button className="flex items-center gap-2 border border-neutral-300 text-neutral-800 px-4 py-2 rounded-lg text-sm hover:bg-neutral-100">
                  <Bookmark size={15} />
                  Save
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
            </div>
          </motion.article>

        </div>
      </section>
    </>
  );
}
