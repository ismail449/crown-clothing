import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
} from "react";

type CartContextType = {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<React.SetStateAction<boolean>>;
};

const Cart = createContext<CartContextType>({
  isCartOpen: false,
  setIsCartOpen: ()=>{},
});

type CartProviderProps = {
  children: ReactNode;
};
export const CartProvider = ({ children }: CartProviderProps) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const value = {
    isCartOpen,
    setIsCartOpen,
  };
  return <Cart.Provider value={value}>{children}</Cart.Provider>;
};

export const useCartContext = ()=>{
  return useContext(Cart)
}