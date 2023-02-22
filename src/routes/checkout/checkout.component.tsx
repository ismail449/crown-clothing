import React from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { useCartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useCartContext();
  return (
    <div className="checkout-container">
      {cartItems.length ? (
        <>
          <div className="checkout-header">
            <div className="header-block">
              <span>Product</span>
            </div>
            <div className="header-block">
              <span>Description</span>
            </div>
            <div className="header-block">
              <span>Quantity</span>
            </div>
            <div className="header-block">
              <span>Price</span>
            </div>
            <div className="header-block">
              <span>Remove</span>
            </div>
          </div>
          {
            <>
              {cartItems.map((cartItem) => {
                return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
              })}
              <span className="total">Total:{cartTotal}$</span>
            </>
          }
        </>
      ) : (
        <span>No Items In the Cart</span>
      )}
    </div>
  );
};

export default Checkout;
