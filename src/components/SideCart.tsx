import { useShoppingCart } from '@/context/ShoppingCartContext';
import React, { useState } from 'react';
import CartItem from './CartItem';

const SideCart = () => {
  const [isOpen, setIsOpen] = useState(true);
const {closeCart, cartItems} = useShoppingCart()
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar}
      ></div>
      <div
        className={`fixed top-0 right-0 w-72 h-full bg-white shadow-lg transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Cart</h2>
          <button onClick={toggleSidebar} className="text-gray-600 hover:text-gray-900">
            <svg
              className="w-6 h-6"
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
          </button>
        </div>
        {/* Add your cart content here */}
        <body>
            <div className='flex flex-col gap-2 '>
               {cartItems.map(item => (
                <CartItem key={item.id} {...item} />
               ))}
            </div>
        </body>
      </div>
    </>
  );
};

export default SideCart;
