import React from "react";
import Pics from "../components/Carousel";

export default function About() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">About us</h1>
          <p className="mb-5">
            We are a group of people who love to go on adventures. <br />
            Also love to share the beauty of mountains in Taiwan. <br /> 
            We would glad if you could join us.
          </p>
        </div>
      </div>
    </div>
  );
}
