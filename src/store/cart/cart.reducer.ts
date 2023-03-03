import { CartItem } from "./cart.custom-types";
import { TOGGLE_CART, SET_CART_ITEMS } from "./cart.types";

type CartInitialStateType = {
  isCartOpen: boolean;
  cartItems: CartItem[];
};

const CART_INITIAL_STATE: CartInitialStateType = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: {
    type: string;
    payload: CartItem[] | boolean;
  }
) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CART_ITEMS:
      return { ...state, cartItems: payload as CartItem[] };
    case TOGGLE_CART:
      return { ...state, isCartOpen: payload as boolean };
    default:
      return state;
  }
};
