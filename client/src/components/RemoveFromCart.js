import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import toast from "react-hot-toast"

export default function RemoveFromCart({ product }) {

  const { removeItem, cartCount } = useShoppingCart();

  function handleRemoveItem(){
    if(cartCount < 1){
      toast.error(`Your cart is currently empty`);
    } else {
      removeItem(product.sku); // the 'sku' is the unique product identifier
      toast.success(`${product.name} removed from your cart`)
    }
  }
  return (
    <button 
      onClick={handleRemoveItem}
      className={`flex ml-2 text-white ${cartCount < 1 ? `bg-gray-500` : `bg-red-500 hover:bg-red-600`} border-0 py-2 px-6 focus:outline-none rounded`} >
      Remove
    </button>
  );
}
