import React, { useState } from "react";
import { Copy, Check, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

function Docs() {
  const [copied, setCopied] = useState(false);
  const [copiedVite, setCopiedVite] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm i nep-css-framework");
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  const handleCopyVite = () => {
    navigator.clipboard.writeText("npm create vite@latest my-app");
    setCopiedVite(true);
    setTimeout(() => setCopiedVite(false), 1200);
  };

  const sidebarItems = [
    { id: "installation", title: "Installation" },
    { id: "vite", title: "Using with Vite" },
    { id: "quick-start", title: "Quick Start" }
  ];

  return (
    <>
      <Helmet>
        <title>Documentation - Nep CSS Framework</title>
        <meta name="description" content="Learn how to use Nep CSS Framework with our comprehensive documentation. Installation guides, usage examples, and integration with Vite." />
        <meta name="keywords" content="Nep CSS documentation, CSS framework guide, Vite integration, frontend development" />
        <meta name="author" content="Abhaya Bikram Shahi" />
        <meta property="og:title" content="Documentation - Nep CSS Framework" />
        <meta property="og:description" content="Learn how to use Nep CSS Framework with our comprehensive documentation. Installation guides, usage examples, and integration with Vite." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nepcss.abhayabikramshahi.xyz/docs" />
        <meta property="og:image" content="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Documentation - Nep CSS Framework" />
        <meta property="twitter:description" content="Learn how to use Nep CSS Framework with our comprehensive documentation. Installation guides, usage examples, and integration with Vite." />
        <meta property="twitter:image" content="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg" />
        <link rel="canonical" href="https://nepcss.abhayabikramshahi.xyz/docs" />
      </Helmet>
      
      <div className="min-h-screen w-full bg-white">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center">
                  <div className="h-8 w-8 rounded-full bg-indigo-600"></div>
                  <span className="ml-2 text-xl font-semibold text-gray-900">Nep CSS</span>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                  <a href="#" className="bg-gray-100 text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Documentation</a>
                </div>
              </div>
              <div className="md:hidden">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
                  aria-label="Toggle navigation menu"
                  aria-expanded={sidebarOpen}
                >
                  {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex">
          {/* Sidebar */}
          <div className={`fixed inset-0 z-20 md:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
            <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setSidebarOpen(false)} aria-hidden="true"></div>
            <div className="relative bg-white w-80 h-full shadow-xl">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-indigo-600"></div>
                    <span className="ml-2 text-xl font-semibold text-gray-900">Nep CSS</span>
                  </div>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="text-gray-400 hover:text-gray-500"
                    aria-label="Close navigation menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <nav className="mt-5 px-2 space-y-1" aria-label="Documentation navigation">
                {sidebarItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-gray-700 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
                    onClick={() => setSidebarOpen(false)}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className="hidden md:block md:w-64 md:pr-8 flex-shrink-0">
            <div className="sticky top-16 pt-10">
              <nav className="space-y-1" aria-label="Documentation navigation">
                {sidebarItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-gray-700 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <main className="flex-1 pt-8 pb-16 w-full">
            <div className="max-w-3xl mx-auto">
              <div className="pb-10">
                <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Documentation</h1>
                <p className="mt-2 text-lg text-gray-500">
                  Get started with Nep CSS Framework in minutes.
                </p>
              </div>

              {/* Installation Section */}
              <section id="installation" className="mb-12" aria-labelledby="installation-heading">
                <h2 id="installation-heading" className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Installation</h2>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Using NPM</h3>
                  <p className="text-gray-600 mb-4">
                    Install Nep CSS Framework as a package dependency in your project:
                  </p>
                  
                  <div className="relative">
                    <div className="bg-gray-800 rounded-lg px-5 py-4">
                      <code className="text-gray-100 font-mono text-sm">
                        npm i nep-css-framework
                      </code>
                    </div>
                    <button
                      className="absolute top-3 right-3 flex items-center justify-center gap-1 bg-gray-700 hover:bg-gray-600 text-gray-200 text-xs px-3 py-1.5 rounded"
                      onClick={handleCopy}
                      aria-label="Copy NPM installation command"
                    >
                      {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                      {copied ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Using CDN</h3>
                  <p className="text-gray-600 mb-4">
                    Include the CSS file directly in your HTML:
                  </p>
                  
                  <div className="relative">
                    <div className="bg-gray-800 rounded-lg px-5 py-4">
                      <code className="text-gray-100 font-mono text-sm break-words">
                        {`<link rel="stylesheet" href="https://unpkg.com/nep-css-framework/dist/nep.min.css">`}
                      </code>
                    </div>
                    <button className="absolute top-3 right-3 flex items-center justify-center gap-1 bg-gray-700 hover:bg-gray-600 text-gray-200 text-xs px-3 py-1.5 rounded" aria-label="Copy CDN installation code">
                      <Copy className="w-3 h-3" />
                      Copy
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Usage</h3>
                  <p className="text-gray-600 mb-4">
                    After installation, include the CSS file in your project:
                  </p>
                  
                  <div className="relative">
                    <div className="bg-gray-800 rounded-lg px-5 py-4">
                      <code className="text-gray-100 font-mono text-sm">
                        {`import 'nep-css-framework';`}
                      </code>
                    </div>
                    <button className="absolute top-3 right-3 flex items-center justify-center gap-1 bg-gray-700 hover:bg-gray-600 text-gray-200 text-xs px-3 py-1.5 rounded" aria-label="Copy usage code">
                      <Copy className="w-3 h-3" />
                      Copy
                    </button>
                  </div>
                </div>
              </section>

              {/* Vite Section */}
              <section id="vite" className="mb-12" aria-labelledby="vite-heading">
                <h2 id="vite-heading" className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Using with Vite</h2>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Create a new Vite project</h3>
                  <p className="text-gray-600 mb-4">
                    If you're starting a new project, you can create a Vite project and then add Nep CSS Framework:
                  </p>
                  
                  <div className="relative mb-4">
                    <div className="bg-gray-800 rounded-lg px-5 py-4">
                      <code className="text-gray-100 font-mono text-sm">
                        npm create vite@latest my-app
                      </code>
                    </div>
                    <button
                      className="absolute top-3 right-3 flex items-center justify-center gap-1 bg-gray-700 hover:bg-gray-600 text-gray-200 text-xs px-3 py-1.5 rounded"
                      onClick={handleCopyVite}
                      aria-label="Copy Vite project creation command"
                    >
                      {copiedVite ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                      {copiedVite ? "Copied!" : "Copy"}
                    </button>
                  </div>
                  
                  <p className="text-gray-600 text-sm mt-2">
                    Follow the prompts to select your preferred framework and variant.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Install Nep CSS Framework</h3>
                  <p className="text-gray-600 mb-4">
                    Navigate to your project directory and install Nep CSS Framework:
                  </p>
                  
                  <div className="relative mb-4">
                    <div className="bg-gray-800 rounded-lg px-5 py-4">
                      <code className="text-gray-100 font-mono text-sm">
                        cd my-app<br />
                        npm install nep-css-framework
                      </code>
                    </div>
                    <button className="absolute top-3 right-3 flex items-center justify-center gap-1 bg-gray-700 hover:bg-gray-600 text-gray-200 text-xs px-3 py-1.5 rounded" aria-label="Copy installation commands">
                      <Copy className="w-3 h-3" />
                      Copy
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Import the CSS</h3>
                  <p className="text-gray-600 mb-4">
                    Import Nep CSS Framework in your main JavaScript file (usually src/main.js or src/main.ts):
                  </p>
                  
                  <div className="relative mb-4">
                    <div className="bg-gray-800 rounded-lg px-5 py-4">
                      <code className="text-gray-100 font-mono text-sm">
                        import 'nep-css-framework';
                      </code>
                    </div>
                    <button className="absolute top-3 right-3 flex items-center justify-center gap-1 bg-gray-700 hover:bg-gray-600 text-gray-200 text-xs px-3 py-1.5 rounded" aria-label="Copy import statement">
                      <Copy className="w-3 h-3" />
                      Copy
                    </button>
                  </div>
                  
                  <p className="text-gray-600">
                    Now you can start using Nep CSS Framework classes in your components!
                  </p>
                </div>
              </section>

              {/* Quick Start Section */}
              <section id="quick-start" aria-labelledby="quick-start-heading">
                <h2 id="quick-start-heading" className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Quick Start</h2>
                
                <p className="text-gray-600 mb-4">
                  Once installed, you can start using Nep CSS Framework classes in your HTML:
                </p>
                
                <div className="relative mb-6">
                  <div className="bg-gray-800 rounded-lg px-5 py-4">
                    <code className="text-gray-100 font-mono text-sm">
                      {`<button class="h-12 w-12 text-syano bg-rakh-kalo">Hello World</button>`}
                    </code>
                  </div>
                  <button className="absolute top-3 right-3 flex items-center justify-center gap-1 bg-gray-700 hover:bg-gray-600 text-gray-200 text-xs px-3 py-1.5 rounded" aria-label="Copy quick start example">
                    <Copy className="w-3 h-3" />
                    Copy
                  </button>
                </div>
                
                <a 
                  href="https://nepcss.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                  aria-label="View full documentation on Nep CSS Framework website"
                >
                  View full documentation
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </section>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Docs;