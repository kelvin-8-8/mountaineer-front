import React from "react";
import Carousel from "../components/Carousel";
import { useNavigate } from "react-router-dom";

export default function Home( isLoggedIn) {

  const navigate = useNavigate();


  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Carousel />

      <div
        className="hero max-w-screen-xl h-80"
      >
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome !</h1>
            <p className="mb-5">
              Click the button below to sign up ~
            </p>
            <button className="btn btn-primary" onClick={() => navigate("/login")}>Get Started</button>
          </div>
        </div>
      </div>
      

      </div>
  );
}


{/* <div className="flex flex-col justify-center items-center bg-base-100 h-96">
        <h1 className="block text-2xl m-6 mb-12">關於我們</h1>
        <p className="block m-6">簡述</p>
      </div>

       */}

// <div className='hero h-full basis-1/2' style={{backgroundImage: `url(${GearImage})`}}>
//             <div className='hero-overlay hover:bg-opacity-80 hover:cursor-pointer'></div>
//             <div className='hero-content text-center text-neutral-content'>
//               <div className='max-w-md'>
//                 <h1 className='mb-5 text-5xl font-bold'>Gear</h1>
//                 <p className='mb-5'>簡述</p>
//               </div>
//             </div>
//           </div>

//           <div className='hero min-h-96 basis-1/2' style={{backgroundImage: `url(${GearImage})`}}>
//             <div className='hero-overlay bg-opacity-80'></div>
//             <div className='hero-content text-center text-neutral-content'>
//               <div className='max-w-md'>
//                 <h1 className='mb-5 text-5xl font-bold'>Gear</h1>
//                 <p className='mb-5'>簡述</p>
//               </div>
//             </div>
//           </div>
