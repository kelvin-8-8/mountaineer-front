import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SwitchButton from "../components/SwitchButton";
import UserButton from "../components/UserButton";

export default function Top({ isLoggedIn }) {
    
    window.addEventListener('click', function(e) {
      document.querySelectorAll('.dropdownDetails').forEach(function(dropdownDetails) {
        if (!dropdownDetails.contains(e.target)) {
          // Click was outside the dropdown, close it
          dropdownDetails.open = false;
        }
      });
    });
  
    return (
    <div className="flex flex-col justify-center items-center bg-base-200">
      <div className="navbar bg-base-200 max-w-screen-xl z-50 relative">
        {/* 左側 */}
        <div className="navbar-start">
          {/* 手機板 下拉式 */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="relative top-10 menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {/* HOME */}
              <li>
                <Link to="/">Home</Link>
              </li>
              {/* ABOUT */}
              <li>
                <Link to="/about">About</Link>
              </li>
              {/* Features */}
              <li>
                <a>Features</a>
                <ul className="p-2">
                  <li>
                    <a>借裝備</a>
                  </li>
                  <li>
                    <a>隊伍資訊</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* 標題 */}
          <a className="text-4xl font-tradewinds">Mountaineer</a>
        </div>

        {/* 中間 */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* HOME */}
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* ABOUT */}
            <li>
              <Link to="/about">About</Link>
            </li>
            {/* Features */}
            <li>
              <details className="dropdownDetails">
                  <summary>Features</summary>
                  <ul className="relative top-6 w-32">
                    <li>
                      <Link to="/equipment">借裝備</Link>
                    </li>
                    <li>
                      <Link to="/itinerary">隊伍資訊</Link>
                    </li>
                  </ul>
              </details>
            </li>
          </ul>
        </div>
        {/* 右邊 */}
        <div className="navbar-end">
          <ul className="flex flex-row">
            <li>
              <Link to="/login">
                <UserButton />
              </Link>
            </li>

            <li>
              <SwitchButton />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
