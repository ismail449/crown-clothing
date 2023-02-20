import React from "react";
import { useCartContext } from "../../contexts/cart.context";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useCartContext();
  return (
    <div
      onClick={() => setIsCartOpen(!isCartOpen)}
      className="cart-icon-container"
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">
        {cartItems.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.quantity;
        }, 0)}
      </span>
    </div>
  );
};

export default CartIcon;
