import React from 'react';
import Pics from '../components/Pics';

export default function Home() {
  return (
    <div>
        <Pics/>

        <div className='flex flex-col justify-center items-center bg-red-200 h-96'>

          <h1 className='block text-2xl m-6 mb-12'>關於我們</h1>
          <p className='block m-6'>簡述</p>
          
        </div>
        <div className='flex flex-row justify-around items-center bg-violet-200 h-96'>

          <h1 className='text-2xl'>借裝備PIC</h1>
          <h1 className='text-2xl'>隊伍PIC</h1>

          
        </div>
        
        
    </div>
  )
}
