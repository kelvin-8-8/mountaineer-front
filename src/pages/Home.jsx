import React from 'react';
import Pics from '../components/Pics';
import Switcher from '../hooks/Switcher';

export default function Home() {
  return (
    <div>
        <Pics/>

        <div className='h-96'>

          <h1>Mountaineer</h1>
          <p>這是主要區域</p>
          
        </div>
        
    </div>
  )
}
