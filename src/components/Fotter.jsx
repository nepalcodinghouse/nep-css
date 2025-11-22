import React from 'react';

function Footer() {
  return (
    <footer role="contentinfo">
      <div className='w-full h-20 bg-gray-100 flex items-center justify-center'>
        <p className='text-gray-700'>
          &copy; {new Date().getFullYear()} Nep CSS Framework. All rights reserved. Created by Abhaya Bikram Shahi.
        </p>
      </div>
    </footer>
  );
}

export default Footer;