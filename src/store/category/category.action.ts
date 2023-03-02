import { DocumentData } from "firebase/firestore";
import { SET_CATEGORIES } from "./category.types";

export const setCategories = (categories: DocumentData[]) => {
  return {
    type: SET_CATEGORIES,
    payload: categories,
  };
};
