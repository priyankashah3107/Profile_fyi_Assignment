// "use client"
import { useShoppingCart } from '@/context/ShoppingCartContext'
import React from 'react'
import shoppingcart from '../../public/shoppingcart/shoping'
import Image from 'next/image'
import { formatCurrency } from '@/utils/formatCurrency'

type CartItemProps = {
   id: number,
   quantity: number
}
export default function CartItem({id, quantity}: CartItemProps) {
  const {removeFromCart} = useShoppingCart()
  const item = shoppingcart.find(i => i.id === id)
  if(item == null) return null;
  return (
    <>
     <div className='flex flex-row gap-2'>
       <Image src={item.img} alt='img' width={125} height={75} style={{width: "125px", height: "75px", objectFit: "cover"}} />
       
       <div className='mr-auto'>
         <div>
          {item.tit} {quantity > 1 && <span className='text-gray-500 font-
          bold' style={{fontSize: "0.65rem"}}>
            x{quantity}
            </span>}
         </div>

         <div className="font-serif text-[12px]">
            {item.category}
           </div>
         <div className='text-gray-500' style={{fontSize: "0.75rem"}}>
          {formatCurrency(item.price)}
         </div>
       </div>
       
       <div>{formatCurrency(item.price * quantity)}</div>
       <button className='bg-red-500 p-2 h-10 rounded-md text-white' onClick={()=> removeFromCart(item.id)}>&times;</button>
     </div>
    </>
  )
}
