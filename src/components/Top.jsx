import React, { useState } from "react";
import { Link } from "react-router-dom";
import SwitchButton from "../components/SwitchButton";
import UserButton from "../components/UserButton";

export default function Top( { isLoggedIn } ) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-8">
        
        {/* 左側部分 */}
        <div className="flex flex-row items-center justify-end md:w-auto">
          {/* 暫時將logo隱藏 */}
          <img src="/logo.png" alt="" className="hidden h-10 mr-4" />
          {/* 標題 */}
          <h1 className={`block text-4xl text-green-900 dark:text-green-500 font-tradewinds`}>
            Mountaineer
          </h1>

          <p className="relative -left-14 -bottom-6 text-sm text-green-900 dark:text-green-500 font-tradewinds">logged in</p>
        </div>

        {/* Mobile toggle icon  */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          
          <SwitchButton />
        </div>
        
        {/*  */}
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col md:items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
            <li className="md:ml-8">
              <Link
                to="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-slate-200 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-slate-200 md:dark:hover:bg-transparent"
              >
                Home
              </Link>
            </li>
            <li className="md:ml-8">
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-slate-200 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-slate-200 md:dark:hover:bg-transparent"
              >
                About
              </a>
            </li>
            <li className="md:ml-8">
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-slate-200 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-slate-200 md:dark:hover:bg-transparent"
              >
                Features
              </a>
            </li>

            {/* 排版用空格 (手機排版會隱藏) */}
            <span className={`${isOpen ? "hidden" : ""} mx-4`}>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              ></a>
            </span>
            
            <li className="md:hidden">
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-slate-200 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-slate-200 md:dark:hover:bg-transparent"
              >
                Login
              </a>
            </li>
            <Link to="/login" className={`${isOpen ? "hidden" : ""} ml-2`}>
              <UserButton />
            </Link>

            <li className={`${isOpen ? "hidden" : ""} ml-2`}>
              <SwitchButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
