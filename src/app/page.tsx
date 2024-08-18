// "use client";
// import React from 'react';
// import shoppingcart from "../../public/shoppingcart/shoping.js";
// import Image from 'next/image';
// import Navbar from '@/components/Navbar';
// // import "../projectcomponet/card.css"
// const ShoppingCart = () => {
//   return ( 
//     <>
//      <Navbar />
//     <div className=' flex flex-col justify-center items-center '>
   
//       <h1 className="text-black text-center text-[35px] lg:text-[70px] font-extrabold leading-tight lg:leading-[70px] mt-20 lg:mt-32">
//         Shoping Time
//       </h1>

//       <div className='ml-10  mt-20 lg:mt-32 mr-10  grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-10 md:gap-12 justify-center items-center '>

//         {shoppingcart.map((val, idx) => (
//           <div key={idx} className='mb-20'>
//              {/* <Image src={val.img} alt='img' width={150} height={150} className='img md:w-[300px] md:h-[300px] cursor-pointer'/> */}
//              <div className='relative'>
//               <Image src={val.img} alt="img" width={150} height={150} className='img md:w-[300px] md:h-[300px] cursor-pointer' />
//               <p className="w-[65px] h-[25px] md:w-[90px] md:h-[26px]  py-0.5  bg-gradient-to-r from-white to-white  backdrop-blur-md opacity-70 rounded-xl justify-center items-start gap-2 inline-flex text-[15px] font-normal text-black  mb-2 ml-2 font-inter absolute left-0 bottom-0 cursor-pointer">{val.price}</p>
//               </div>

// <div className='cardItems cursor-pointer mt-6 pl-4  md:mr-16 '>
//   <h1 className='heading md:text-[20px] md:leading-tight'>{val.tit}</h1>
//    <div className='flex flex-col md:flex-row justify-between mt-4'>
//    <h5 className='name text-[10px] md:text-[15px]  md:leading-tight'>{val.name}</h5>

//    {/* <button className='btnn btnText mt-1 mb-1 md:mt-0 md:mb-0 md:ml-4'>Add to cart</button> */}

//    </div>
//   <p className='cate text-[10px] md:text-[15px]  md:leading-normal'>{val.category}</p>

//   <div className='flex flex-row items-center justify-center gap-4 '>
//     <button className='p-3 bg-blue-400 rounded-md text-white'>-</button>
//   <button className='btnn btnText mt-1 mb-1 md:mt-0 md:mb-0 md:ml-4'> + Add to cart</button>
//   <button className='p-3 bg-blue-400 rounded-md text-white'>+</button>
//   </div>
  
// </div>
//           </div>
//         ))}

//       </div>











//     </div>
//     </>
//   );
// }

// export default ShoppingCart;
"use client"

import Navbar from '@/components/Navbar'
import ShoppingCart from '@/components/ShoppingCart'
import { ShoppingCartProvider } from '@/context/ShoppingCartContext'
import React from 'react'

const page = () => {
  return (
    <div>
      <ShoppingCartProvider>
      <Navbar />
      <ShoppingCart />
      </ShoppingCartProvider>
      
    </div>
  )
}

export default page
