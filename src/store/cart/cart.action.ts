import { Product } from "../category/category.types";
import { CartItem } from "./cart.custom-types";
import {
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
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

export type SetCartItems = ActionWithPayload<typeof SET_CART_ITEMS, CartItem[]>;
export type SetIsCartOpen = ActionWithPayload<typeof TOGGLE_CART, boolean>;

export const setIsCartOpen = withMatcher((isOpen: boolean): SetIsCartOpen => {
  return createAction(TOGGLE_CART, isOpen);
});
export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(SET_CART_ITEMS, cartItems)
);

export const addCartItem = (cartItems: CartItem[], product: Product) => {
  const newCartItems = addItemToCart(cartItems, product);
  return setCartItems(newCartItems);
};

export const removeCartItem = (cartItems: CartItem[], product: Product) => {
  const newCartItems = removeItemFromCart(cartItems, product);
  return setCartItems(newCartItems);
};

export const clearItemFromCart = (cartItems: CartItem[], cartItem: Product) => {
  const newCartItems = clearCartItem(cartItems, cartItem);
  return setCartItems(newCartItems);
};
