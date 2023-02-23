import React, {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useContext,
} from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

//export type Category = { title: string; items: Product[] };

type CategoriesContextType = {
  categoriesMap: {};
};

type CategoriesProviderProps = {
  children: ReactNode;
};

const CategoriesContext = createContext<CategoriesContextType>({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }: CategoriesProviderProps) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);
  const value = {
    categoriesMap,
  };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategoriesContext = () => {
  return useContext(CategoriesContext);
};
