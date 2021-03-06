import React, { useState } from "react";
import { CartIcon } from "./Icons";
import { useShoppingCart } from "use-shopping-cart"
import CartModal from "./CartModal"

export default function CartSummary() {

  const [ isModalOpen, setModalOpen ] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  const { formattedTotalPrice, cartCount } = useShoppingCart();

  return (
    <>
      <nav onClick={toggleModal} className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <span className="mr-5 hover:text-white cursor-pointer flex items-center">
          <CartIcon />
          <span className="ml-3">{formattedTotalPrice} (Number of items: {cartCount})</span>
        </span>
      </nav>
      <CartModal isOpen={isModalOpen} toggleModal={toggleModal} />
    </>
  );
}
