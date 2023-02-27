import React from "react";
import { CartItemContainer, ItemDetails, Name } from "./cart-item.styles";

type CartItemProps = {
  name: string;
  quantity: number;
  price: number;
  imageUrl: string;
};

const CartItem = ({ name, quantity, imageUrl, price }: CartItemProps) => {
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
