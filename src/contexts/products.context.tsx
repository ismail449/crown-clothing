import React, {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useContext,
} from "react";
import SHOP_DATA from "../shop-data.json";

type Product = { id: number; name: string; imageUrl: string; price: number }

type ProductsContextType = {
  products: Product[];
};

type ProductsProviderProps = {
  children: ReactNode;
};

const ProductContext = createContext<ProductsContextType>({ products: [] });

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    setProducts(SHOP_DATA);
  }, []);
  const value = {
    products,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductContext);
};
