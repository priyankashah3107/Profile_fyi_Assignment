import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utils/formatCurrency"
import  CartItem  from "./CartItem"
import shoppingcart from "../../public/shoppingcart/shoping"

type ShoppingCartProps = {
  isOpen: boolean
}

export default function SideCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart()
  
  if (!isOpen) return null; // Optionally render nothing if the cart is not open
  
  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-80`}
      style={{ zIndex: 9999 }}
    >
      <div className="p-4 border-b">
        <button
          className="text-gray-600 hover:text-gray-900"
          onClick={closeCart}
        >
          <span className="sr-only">Close cart</span>
          &times;
        </button>
        <h2 className="text-xl font-semibold">Cart</h2>
      </div>
      <div className="p-4 overflow-y-auto h-[calc(100%-4rem)]">
        <div className="space-y-3">
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="mt-4 text-right font-bold text-lg">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = shoppingcart.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

