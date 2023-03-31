export const FETCH_CATEGORIES_START = "FETCH_CATEGORIES_START";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_FAILED = "FETCH_CATEGORIES_FAILED";

export type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

export type Category = {
  title: string;
  imageUrl: string;
  items: Product[];
};

export type CategoryMap = {
  [key: string]: Product[];
};
