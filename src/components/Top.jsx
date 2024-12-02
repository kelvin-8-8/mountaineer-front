"use client";

import { Button, Navbar } from "flowbite-react";

export function Top() {
  return (

    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex flex-row items-center justify-end md:w-auto">
          <img src="/logo.png"  alt="" className="h-10 mr-4"/>
          <h1 className="block">TITLE</h1>
        </div>
        <div className="hidden md:block md:w-auto" id="navbar-default">
          <ul className="font-bold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
            </li>
          </ul>
      </div>
      </div>
    </nav>
    // <Navbar fluid rounded>
    //   <Navbar.Brand href="https://flowbite-react.com">
    //     <img src="/logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
    //     <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
    //   </Navbar.Brand>
    //   <div className="flex md:order-2">
    //     <Button>Get started</Button>
    //     <Navbar.Toggle />
    //   </div>
    //   <Navbar.Collapse>
    //     <Navbar.Link href="#" active>
    //       Home
    //     </Navbar.Link>
    //     <Navbar.Link href="#">About</Navbar.Link>
    //     <Navbar.Link href="#">Services</Navbar.Link>
    //     <Navbar.Link href="#">Pricing</Navbar.Link>
    //     <Navbar.Link href="#">Contact</Navbar.Link>
    //   </Navbar.Collapse>
    // </Navbar>
  );
}
