import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
} from "react";
import { Product } from "./products.context";

const searchCartItems = (cartItems: CartItem[], product:Product)=>{
  const foundProductIndex = cartItems.findIndex(({id})=> product.id === id)
  if(foundProductIndex === -1){
    cartItems.push({...product, quantity: 1})
  }else{
    const itemQuantity = cartItems[foundProductIndex].quantity
    cartItems[foundProductIndex].quantity = itemQuantity + 1
  }
  return [...cartItems];
}

type CartItem = { id: number; name: string; imageUrl: string; price: number, quantity: number }

type CartContextType = {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<React.SetStateAction<boolean>>;
  cartItems: CartItem[];
  addItemToCart: (product:Product)=>void
};

const Cart = createContext<CartContextType>({
  isCartOpen: false,
  setIsCartOpen: ()=>{},
  cartItems: [],
  addItemToCart: ()=>{}
});

type CartProviderProps = {
  children: ReactNode;
};
export const CartProvider = ({ children }: CartProviderProps) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const addItemToCart = (product: Product)=>{
    setCartItems(searchCartItems(cartItems, product))
  }
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart
  };
  return <Cart.Provider value={value}>{children}</Cart.Provider>;
};

export const useCartContext = ()=>{
  return useContext(Cart)
}