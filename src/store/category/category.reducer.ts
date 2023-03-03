import { DocumentData } from "firebase/firestore";
import { SET_CATEGORIES } from "./category.types";

type InitialStateType = {
  categories: DocumentData[];
};

const CATEGORIES_INITIAL_STATE: InitialStateType = {
  categories: [],
};

export type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

export type Category = { title: string; items: Product[] };

export const categoryReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action: { type: string; payload: DocumentData[] }
) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CATEGORIES:
      return { ...state, categories: payload };

    default:
      return state;
  }
};
