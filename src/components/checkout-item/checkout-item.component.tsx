import React from "react";
import { useCartContext, CartItem } from "../../contexts/cart.context";
import {
  Arrow,
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Price,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.styles";

type CartItemProps = {
  cartItem: CartItem;
};

const CheckoutItem = ({ cartItem }: CartItemProps) => {
  const { removeCartItem, addCartItem, clearItemFromCart } = useCartContext();

  const removeItemHandler = () => removeCartItem(cartItem);
  const addItemHandler = () => addCartItem(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={cartItem.imageUrl} alt={cartItem.name} />
      </ImageContainer>
      <Name>{cartItem.name}</Name>

      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value> {cartItem.quantity} </Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>

      <Price>{cartItem.price}$</Price>

      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
