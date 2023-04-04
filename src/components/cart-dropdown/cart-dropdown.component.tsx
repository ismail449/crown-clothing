import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const handleNavigation = useCallback(() => {
    navigate("./checkout");
  }, []);
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
