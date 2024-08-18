// "use client"

import SideCart from "@/components/SideCart";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { createContext, ReactNode, useContext, useState } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type cartItems = {
    id: number
    quantity: number
}

type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: cartItems[]
}

const shoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(shoppingCartContext)
}

export function ShoppingCartProvider({children}: ShoppingCartProviderProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCardItems] = useLocalStorage<cartItems[]>("shopping-cart", [])

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id:number){
        setCardItems(currItems => {
            if(currItems.find(item => item.id === id) == null ) {
                return [...currItems, {id, quantity: 1}]
            } else {
                 return currItems.map(item => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                 })
            }
        })
    }

    function decreaseCartQuantity(id: number){
        setCardItems(currItems => {
            if(currItems.find(item => item.id === id)?.quantity == 1 ) {
                return currItems.filter(item => item.id !== id)
            } else {
                 return currItems.map(item => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                 })
            }
        })
    }

    function removeFromCart(id: number) {
       setCardItems(currItems => {
        return cartItems.filter(item => item.id !== id)
       })
    }

    return (
      <>
      <shoppingCartContext.Provider value={{getItemQuantity,
       increaseCartQuantity,
        decreaseCartQuantity,
         removeFromCart,
         cartItems, 
         cartQuantity,
          openCart,
         closeCart

      }}>
        {children}
        <SideCart  isOpen={isOpen}/>
      </shoppingCartContext.Provider>
      </>
    ) 
}