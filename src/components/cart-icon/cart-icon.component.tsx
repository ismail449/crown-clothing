import React from "react";
import { useCartContext } from "../../contexts/cart.context";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useCartContext();
  return (
    <CartIconContainer onClick={() => setIsCartOpen(!isCartOpen)}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>
        {cartItems.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.quantity;
        }, 0)}
      </ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
