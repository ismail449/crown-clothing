import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer.utils";

import {
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILED,
  Category,
} from "./category.types";

export type FetchCategoriesStart = Action<typeof FETCH_CATEGORIES_START>;
export type FetchCategoriesSuccess = ActionWithPayload<
  typeof FETCH_CATEGORIES_SUCCESS,
  Category[]
>;
export type FetchCategoriesFailed = ActionWithPayload<
  typeof FETCH_CATEGORIES_FAILED,
  Error
>;

export type CategoryAction =
  | FetchCategoriesStart
  | FetchCategoriesSuccess
  | FetchCategoriesFailed;

export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart => {
  return createAction(FETCH_CATEGORIES_START);
});

export const fetchCategoriesSuccess = withMatcher(
  (categories: Category[]): FetchCategoriesSuccess => {
    return createAction(FETCH_CATEGORIES_SUCCESS, categories);
  }
);

export const fetchCategoriesFailed = withMatcher(
  (error: Error): FetchCategoriesFailed => {
    return createAction(FETCH_CATEGORIES_FAILED, error);
  }
);
