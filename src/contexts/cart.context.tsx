import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
  Dispatch,
} from "react";
import { Product } from "./categories.context";

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

const removeItemFromCart = (cartItems: CartItem[], product: CartItem) => {
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

const clearCartItem = (cartItems: CartItem[], product: CartItem) => {
  return cartItems.filter(({ id }) => product.id !== id);
};

export type CartItem = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<React.SetStateAction<boolean>>;
  cartItems: CartItem[];
  addCartItem: (product: Product) => void;
  removeCartItem: (product: CartItem) => void;
  clearItemFromCart: (product: CartItem) => void;
  cartTotal: number;
};

const Cart = createContext<CartContextType>({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addCartItem: () => {},
  removeCartItem: () => {},
  clearItemFromCart: () => {},
  cartTotal: 0,
});

type CartProviderProps = {
  children: ReactNode;
};
export const CartProvider = ({ children }: CartProviderProps) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.quantity * currentValue.price;
    }, 0);
    setCartTotal(newCartTotal);
  }, [cartItems]);
  const addCartItem = (product: Product) => {
    setCartItems(addItemToCart(cartItems, product));
  };

  const removeCartItem = (product: CartItem) => {
    setCartItems(removeItemFromCart(cartItems, product));
  };

  const clearItemFromCart = (cartItem: CartItem) => {
    setCartItems(clearCartItem(cartItems, cartItem));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addCartItem,
    removeCartItem,
    clearItemFromCart,
    cartTotal,
  };
  return <Cart.Provider value={value}>{children}</Cart.Provider>;
};

export const useCartContext = () => {
  return useContext(Cart);
};
