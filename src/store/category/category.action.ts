import { DocumentData } from "firebase/firestore";
import { ThunkDispatch } from "redux-thunk";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
} from "./category.types";

/*export const setCategories = (categories: DocumentData[]) => {
  return {
    type: SET_CATEGORIES,
    payload: categories,
  };
};*/

export const fetchCategoriesStart = () => {
  return { type: FETCH_CATEGORIES_START };
};

export const fetchCategoriesSuccess = (categories: DocumentData[]) => {
  return { type: FETCH_CATEGORIES_SUCCESS, payload: categories };
};

export const fetchCategoriesFailed = (error: string) => {
  return { type: FETCH_CATEGORIES_SUCCESS, payload: error };
};

export const fetchCategoriesAsync =
  () => async (dispatch: ThunkDispatch<{}, {}, any>) => {
    dispatch(fetchCategoriesStart());
    try {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(fetchCategoriesFailed(error.message));
      }
    }
  };
