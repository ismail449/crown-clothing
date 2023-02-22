import React from "react";
import { useNavigate } from 'react-router-dom'
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useCartContext } from "../../contexts/cart.context";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useCartContext();
  const navigate = useNavigate()

  const handleNavigation = ()=>{
    navigate('./checkout')
  }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length!==0?cartItems.map(({ imageUrl, name, price, quantity, id }) => (
          <CartItem
            key={id}
            imageUrl={imageUrl}
            price={price}
            name={name}
            quantity={quantity}
          />
        )):<span>No items in the cart</span>}
      </div>
      <Button onClick={handleNavigation} >go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
