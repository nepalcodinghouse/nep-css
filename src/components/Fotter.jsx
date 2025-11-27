import React from 'react';
import { Helmet } from 'react-helmet';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nep CSS Framework",
    "url": "https://nepcss.netlify.app/",
    "logo": "https://nepcss.netlify.app/logo.png",
    "sameAs": [
      "https://github.com/abhayabikramshahi/nep-css-framework",
      "https://www.npmjs.com/package/nep-css-framework"
    ],
    "founder": {
      "@type": "Person",
      "name": "Abhaya Bikram Shahi"
    }
  };

  return (
    <>
      <Helmet>
        {/* Footer specific SEO */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <footer role="contentinfo" className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 py-12">
          {/* Footer Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Nep CSS Framework</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A lightweight, responsive CSS framework for modern Nepali developers.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/abhayabikramshahi/nep-css-framework" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                   aria-label="GitHub Repository">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.npmjs.com/package/nep-css-framework" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                   aria-label="NPM Package">
                  <span className="sr-only">NPM</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M0 0v24h24V0H0zm3.66 19.22V7.674h2.446l2.332 9.708h.117l2.274-9.708H13.2v11.546h-2.365V9.586h-.087L8.135 19.22H3.66zm16.155-6.667c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1zM20.5 24h-3.67c-.275 0-.5-.225-.5-.5s.225-.5.5-.5H20v-2.67c0-.275.225-.5.5-.5s.5.225.5.5V23h2.67c.275 0 .5.225.5.5s-.225.5-.5.5H20.5z" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/docs" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="/showcase" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
                    Showcase
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://github.com/abhayabikramshahi/nep-css-framework/issues" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
                    Support
                  </a>
                </li>
                <li>
                  <a href="https://github.com/abhayabikramshahi/nep-css-framework/blob/main/LICENSE" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
                    License
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
                    Changelog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:abhayabikramshahiofficial@gmail.com" 
                     className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    abhayabikramshahiofficial@gma.......
                  </a>
                </li>
                <li>
                  <a href="https://abhayabikramshahi.xyz" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                    </svg>
                    Website
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Copyright and Founder Attribution */}
          <div className="border-t border-gray-200 dark:border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              &copy; {currentYear} Nep CSS Framework. All rights reserved.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-4 md:mt-0">
              Created with ❤️ by{' '}
              <a href="https://abhayabikramshahi.xyz" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors">
                Abhaya Bikram Shahi
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;