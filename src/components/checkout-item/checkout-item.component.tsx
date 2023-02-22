import React from "react";
import "./checkout-item.styles.scss";
import { useCartContext, CartItem } from "../../contexts/cart.context";

type CartItemProps = {
  cartItem: CartItem;
};

const CheckoutItem = ({ cartItem }: CartItemProps) => {
  const { removeCartItem, addCartItem, clearItemFromCart } = useCartContext();

  const removeItemHandler = () => removeCartItem(cartItem);
  const addItemHandler = () => addCartItem(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt={cartItem.name} />
      </div>
      <span className="name">{cartItem.name}</span>

      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value"> {cartItem.quantity} </span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>

      <span className="price">{cartItem.price}$</span>

      <div onClick={clearItemHandler} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
