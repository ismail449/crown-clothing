import { createContext, useReducer, useContext, ReactNode } from "react";
import CartItem from "../components/cart-item/cart-item.component";
import { Product } from "../store/category/category.reducer";

export type CartItem = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
};

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

type CartContextType = {
  isCartOpen: boolean;
  toggleCart: () => void;
  cartItems: CartItem[];
  addCartItem: (product: Product) => void;
  removeCartItem: (product: CartItem) => void;
  clearItemFromCart: (product: CartItem) => void;
  cartTotal: number;
  cartCount: number;
};

const Cart = createContext<CartContextType>({
  isCartOpen: false,
  toggleCart: () => {},
  cartItems: [],
  addCartItem: () => {},
  removeCartItem: () => {},
  clearItemFromCart: () => {},
  cartTotal: 0,
  cartCount: 0,
});

type CartProviderProps = {
  children: ReactNode;
};
type InitialStateType = {
  isCartOpen: boolean;
  cartItems: CartItem[];
  cartTotal: number;
  cartCount: number;
};
const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartTotal: 0,
  cartCount: 0,
};
type CartActions = "TOGGLE_CART" | "SET_CART_ITEMS";

const cartReducer = (
  state: InitialStateType,
  action: {
    type: CartActions;
    payload?: { cartItems: CartItem[]; cartTotal: number; cartCount: number };
  }
) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CART_ITEMS":
      return { ...state, ...payload };
    case "TOGGLE_CART":
      return { ...state, isCartOpen: !state.isCartOpen };
    default:
      return state;
  }
};
export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { cartCount, cartItems, cartTotal, isCartOpen } = state;

  const toggleCart = () => {
    dispatch({ type: "TOGGLE_CART" });
  };

  const updateCartItemsReducer = (newCartItems: CartItem[]) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newCartTotal = newCartItems.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.quantity * currentValue.price;
    }, 0);
    const newPayload = {
      cartItems: newCartItems,
      cartTotal: newCartTotal,
      cartCount: newCartCount,
    };
    dispatch({ type: "SET_CART_ITEMS", payload: newPayload });
  };
  const addCartItem = (product: Product) => {
    updateCartItemsReducer(addItemToCart(cartItems, product));
  };

  const removeCartItem = (product: Product) => {
    updateCartItemsReducer(removeItemFromCart(cartItems, product));
  };

  const clearItemFromCart = (cartItem: Product) => {
    updateCartItemsReducer(clearCartItem(cartItems, cartItem));
  };
  const value = {
    isCartOpen,
    toggleCart,
    cartItems,
    addCartItem,
    removeCartItem,
    clearItemFromCart,
    cartTotal,
    cartCount,
  };
  return <Cart.Provider value={value}>{children}</Cart.Provider>;
};

export const useCartContext = () => {
  return useContext(Cart);
};
