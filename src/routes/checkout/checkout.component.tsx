import React from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { useCartContext } from "../../contexts/cart.context";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";

const Checkout = () => {
  const { cartItems, cartTotal } = useCartContext();
  return (
    <CheckoutContainer>
      {cartItems.length ? (
        <>
          <CheckoutHeader>
            <HeaderBlock>
              <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Remove</span>
            </HeaderBlock>
          </CheckoutHeader>
          {
            <>
              {cartItems.map((cartItem) => {
                return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
              })}
              <Total>Total:{cartTotal}$</Total>
            </>
          }
        </>
      ) : (
        <span>No Items In the Cart</span>
      )}
    </CheckoutContainer>
  );
};

export default Checkout;
