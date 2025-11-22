import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function PageNoFound() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // In a real app, you would perform a search here
      alert(`Searching for: ${searchTerm}`);
    }
  };

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Nep CSS Framework</title>
        <meta name="description" content="Oops! The page you're looking for doesn't exist. Navigate back to our homepage or use the search to find what you're looking for." />
        <meta name="keywords" content="404 error, page not found, CSS framework" />
        <meta name="author" content="Abhaya Bikram Shahi" />
        <meta property="og:title" content="404 - Page Not Found | Nep CSS Framework" />
        <meta property="og:description" content="Oops! The page you're looking for doesn't exist. Navigate back to our homepage or use the search to find what you're looking for." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nepcss.abhayabikramshahi.xyz/404" />
        <meta property="og:image" content="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="404 - Page Not Found | Nep CSS Framework" />
        <meta property="twitter:description" content="Oops! The page you're looking for doesn't exist. Navigate back to our homepage or use the search to find what you're looking for." />
        <meta property="twitter:image" content="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg" />
        <link rel="canonical" href="https://nepcss.abhayabikramshahi.xyz/404" />
      </Helmet>
      
      <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-2xl w-full text-center py-12">
          <div className="mb-8">
            <h1 className="text-9xl font-extrabold text-gray-800 tracking-tight mb-4">
              404
            </h1>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Oops! Page Not Found
          </h2>

          <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Don't worry, we'll help you get back on track.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-all shadow-md"
            >
              Go Back
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-all shadow-md"
            >
              Return Home
            </button>
          </div>

          <div className="border-t border-gray-200 pt-8 mt-8">
            <p className="text-gray-600 mb-4">Need help finding something?</p>
            <form onSubmit={handleSearch} className="max-w-md mx-auto flex">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search our site..."
                className="flex-grow px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-3 rounded-r-lg hover:bg-red-700 transition-colors"
              >
                Search
              </button>
            </form>
          </div>

          <div className="mt-12 text-sm text-gray-500">
            <p>Error code: 404 | Page not found</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default PageNoFound;