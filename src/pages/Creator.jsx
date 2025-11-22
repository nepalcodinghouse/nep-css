import React from "react";
import { Helmet } from "react-helmet";

function Creator() {
  return (
    <>
      <Helmet>
        <title>Creator - Nep CSS Framework</title>
        <meta name="description" content="Learn about Abhaya Bikram Shahi, the creator of Nep CSS Framework." />
        <meta name="keywords" content="creator, Abhaya Bikram Shahi, Nep CSS Framework, developer" />
        <meta name="author" content="Abhaya Bikram Shahi" />
        <link rel="canonical" href="https://nepcss.abhayabikramshahi.xyz/creator" />
      </Helmet>
      
      <div className="min-h-screen w-full flex flex-col items-center bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden px-4 pt-8 pb-16">
        <div className="max-w-4xl w-full mt-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet the Creator</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Learn about the person behind Nep CSS Framework
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Abhaya Bikram Shahi</h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Abhaya Bikram Shahi is a passionate frontend developer and designer with a keen eye for creating 
                  beautiful, functional user interfaces. With years of experience in web development, he recognized 
                  the need for a lightweight, customizable CSS framework tailored for modern Nepali developers.
                </p>
                
                <p>
                  As the founder of Nep CSS Framework, his vision was to create a tool that would empower developers 
                  to build stunning websites without the overhead of heavy frameworks. The framework combines 
                  performance, flexibility, and ease of use to accelerate the development process.
                </p>
                
                <p>
                  When he's not coding, Abhaya enjoys exploring new technologies, contributing to open-source projects, 
                  and sharing his knowledge with the developer community. His commitment to creating accessible and 
                  performant web experiences drives continuous improvements to the framework.
                </p>
                
                <div className="mt-8 p-6 bg-indigo-50 rounded-lg">
                  <h3 className="text-xl font-semibold text-indigo-800 mb-3">Philosophy</h3>
                  <p>
                    "I believe in the power of simplicity. Great design shouldn't require complex solutions. 
                    My goal with Nep CSS Framework is to provide developers with a clean, efficient toolkit 
                    that gets out of their way and lets them focus on what matters most - creating amazing user experiences."
                  </p>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect</h3>
                  <p>
                    You can connect with Abhaya on various platforms to stay updated with the latest developments 
                    in Nep CSS Framework or to contribute to the project:
                  </p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li>GitHub: Contribute to the open-source project</li>
                    <li>Twitter: Follow for updates and announcements</li>
                    <li>LinkedIn: Connect professionally</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Creator;