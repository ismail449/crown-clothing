import { DocumentData } from "firebase/firestore";
import {
  FETCH_CATEGORIES_FAILED,
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
} from "./category.types";

type InitialStateType = {
  categories: DocumentData[];
  isLoading: boolean;
  error: any;
};

const CATEGORIES_INITIAL_STATE: InitialStateType = {
  categories: [],
  isLoading: false,
  error: null,
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
    case FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };
    case FETCH_CATEGORIES_FAILED:
      return { ...state, error: payload, isLoading: false };
    case FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: payload, isLoading: false };

    default:
      return state;
  }
};
