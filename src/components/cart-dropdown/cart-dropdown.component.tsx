import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useCartContext } from "../../contexts/cart.context";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cartItems } = useCartContext();
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("./checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length !== 0 ? (
          cartItems.map(({ imageUrl, name, price, quantity, id }) => (
            <CartItem
              key={id}
              imageUrl={imageUrl}
              price={price}
              name={name}
              quantity={quantity}
            />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button buttonType="base" onClick={handleNavigation}>
        go to checkout
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
