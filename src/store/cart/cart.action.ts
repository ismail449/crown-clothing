import { Product } from "../category/category.reducer";
import { CartItem } from "./cart.custom-types";
import { SET_CART_ITEMS, TOGGLE_CART } from "./cart.types";

const addItemToCart = (cartItems: CartItem[], product: Product) => {
  const foundProductIndex = cartItems.findIndex(({ id }) => product.id === id);
  if (foundProductIndex === -1) {
    cartItems.push({ ...product, quantity: 1 });
  } else {
    const itemQuantity = cartItems[foundProductIndex].quantity;
    cartItems[foundProductIndex].quantity = itemQuantity + 1;
  }
  return [...cartItems];
};

const removeItemFromCart = (cartItems: CartItem[], product: Product) => {
  const foundProductIndex = cartItems.findIndex(({ id }) => product.id === id);
  if (foundProductIndex !== -1) {
    const itemQuantity = cartItems[foundProductIndex].quantity;

    if (itemQuantity <= 1) {
      cartItems.splice(foundProductIndex, 1);
    } else {
      cartItems[foundProductIndex].quantity = itemQuantity - 1;
    }
    return [...cartItems];
  }
  return cartItems;
};

const clearCartItem = (cartItems: CartItem[], product: Product) => {
  return cartItems.filter(({ id }) => product.id !== id);
};

export const addCartItem = (cartItems: CartItem[], product: Product) => {
  const newCartItems = addItemToCart(cartItems, product);
  return { type: SET_CART_ITEMS, payload: newCartItems };
};

export const removeCartItem = (cartItems: CartItem[], product: Product) => {
  const newCartItems = removeItemFromCart(cartItems, product);
  return { type: SET_CART_ITEMS, payload: newCartItems };
};

export const clearItemFromCart = (cartItems: CartItem[], cartItem: Product) => {
  const newCartItems = clearCartItem(cartItems, cartItem);
  return { type: SET_CART_ITEMS, payload: newCartItems };
};
export const setIsCartOpen = (isOpen: boolean) => {
  return { type: TOGGLE_CART, payload: isOpen };
};
