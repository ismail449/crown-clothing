import { DocumentData } from "firebase/firestore";

import {
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILED,
} from "./category.types";

export const fetchCategoriesStart = () => {
  return { type: FETCH_CATEGORIES_START };
};

export const fetchCategoriesSuccess = (categories: DocumentData[]) => {
  return { type: FETCH_CATEGORIES_SUCCESS, payload: categories };
};

export const fetchCategoriesFailed = (error: string) => {
  return { type: FETCH_CATEGORIES_FAILED, payload: error };
};
