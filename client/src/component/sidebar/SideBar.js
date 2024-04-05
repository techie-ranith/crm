import React from 'react'
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';
import img5 from './5.png';
import img6 from './6.png';
import img7 from './7.png';
import img8 from './8.png';
import img9 from './9.png';
import img10 from './10.png';



const SideBar = () => {
  return (
    <div className='w-72 bg-teal-800 fixed h-full'>
      <div cl>
         <img src={img1} alt="" className='w-36 h-28 ml-5'  />
      </div>
      <hr/>
      <ul className='mt-1 text-white font-bold'>
        <li className='mt-2 rounded hover:shadow hover:bg-teal-600'>
               <div className='flex'>
               <img src={img2} alt="" className='ml-5'/>
               <h1 className='ml-5 text-lg'>Dashboard</h1>
               </div>    
        </li>
        <li className='mt-2  rounded hover:shadow hover:bg-teal-600'>
               <div className='flex'>
               <img src={img3} alt="" className='ml-5'/>
               <h1 className='ml-5 text-lg'>Contact</h1>
               </div>    
        </li>
        <li className='mt-2  rounded hover:shadow hover:bg-teal-600'>
               <div className='flex'>
               <img src={img4} alt="" className='ml-5'/>
               <h1 className='ml-5 text-lg'>Sales & Lead</h1>
               </div>    
        </li>
        <li className='mt-2  rounded hover:shadow hover:bg-teal-600'>
               <div className='flex'>
               <img src={img5} alt="" className='ml-5'/>
               <h1 className='ml-5 text-lg'>Calendar</h1>
               </div>    
        </li>
        <li className='mt-2  rounded hover:shadow hover:bg-teal-600'>
               <div className='flex'>
               <img src={img6} alt="" className='ml-5'/>
               <h1 className='ml-5 text-lg'>Email</h1>
               </div>    
        </li>
        <li className='mt-3  rounded hover:shadow hover:bg-teal-600'>
               <div className='flex'>
               <img src={img7} alt="" className='ml-5'/>
               <h1 className='ml-5 text-lg'>Customer Support</h1>
               </div>    
        </li>
        <li className='mt-2  rounded hover:shadow hover:bg-teal-600'>
               <div className='flex'>
               <img src={img8} alt="" className='ml-5'/>
               <h1 className='ml-5 text-lg'>Analyzing</h1>
               </div>    
        </li>
        <li className='mt-2  rounded hover:shadow hover:bg-teal-600'>
               <div className='flex'>
               <img src={img9} alt="" className='ml-5'/>
               <h1 className='ml-5 text-lg'>Setting</h1>
               </div>    
        </li>
        <li className='mt-2  rounded hover:shadow hover:bg-teal-600'>
               <div className='flex'>
               <img src={img10} alt="" className='ml-5'/>
               <h1 className='ml-5 text-lg'>Log Out</h1>
               </div>    
        </li>
        
      </ul>

</div>
  )
}

export default SideBar