
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { useShoppingCart } from '@/context/ShoppingCartContext';
const nav = [
  { id: 1, name: "Art", href:"/pages/art" },
  { id: 2, name: "Portraits" , href:"/pages/portraits" },
  { id: 3, name: "Painting" , href:"/pages/painting"},
  { id: 4, name: "Photography" , href:"/pages/photography" },
//   { id: 5, name: "Sculptures" , href:"pages/scluptures"},
//   { id: 6, name: "Fashion Design" , href:"/pages/fashion" },
//   { id: 7, name: "Digital Art" , href:"/pages/digital" }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {openCart, cartQuantity} = useShoppingCart()
  return (
    <div className="relative">
      <div className=" flex items-center justify-between  p-4 pl-20  lg:pl-20 lg:p-10">
        {/* <div className=" flex flex-row lg:hidden">
          <p>Exhibitions</p>
          <p>Artist</p>
        </div> */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <nav className="hidden lg:flex lg:flex-row justify-center items-center lg:gap-20">
          {nav.map((item) => (
            <Link key={item.id} href={item.href} className="nav lg:px-2.5">
              {item.name}
            </Link>
          ))}
        </nav>

        {cartQuantity >  0 && (
           <button style={{width: "3rem", height: "3rem", position: "relative"}} 
           onClick={openCart}>
             <ShoppingBag className='size-[40px]' />
             <div className='rounded-full bg-red-600 flex justify-center align-middle ' style={{color: "white",
               width: "1.5rem", height: "1.5rem",
               position: "absolute",
               bottom: 0,
               right: 0,
               transform: "translate(25%, 25%)"
             }}>
               {cartQuantity}
             </div>
           </button>
        )}
       
      </div>

      {menuOpen && (
        <nav className="lg:hidden absolute top-full left-10 w-screen bg-white bg-opacity-20 backdrop-blur-lg shadow-lg border border-white border-opacity-10">
          {nav.map((item) => (
            <div key={item.id} className="p-4 border-b border-white border-opacity-20">
              <Link className="nav" href={item.href}>{item.name}</Link>
            </div>
          ))}
        </nav>
      )}
     
    </div>
  );
};

export default Navbar;
