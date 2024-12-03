import React from 'react'

export default function Footer() {

  const goToTop = () => {
    console.log('Scroll to top function called');
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full p-4 bg-white border-t border-gray-200 shadow flex items-center justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <div className='max-w-screen-xl mx-auto px-8 w-full flex flex-wrap items-center justify-between'>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Montainner™ All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="#" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
                <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
                <a onClick={goToTop} className="hover:cursor-pointer hover:underline">Back to top</a>
            </li>
        </ul>
      </div>
      
    </footer>
  )
}
