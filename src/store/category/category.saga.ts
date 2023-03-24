import { DocumentData } from "@firebase/firestore";
import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from "./category.action";
import { FETCH_CATEGORIES_START } from "./category.types";

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray: DocumentData[] = yield call(
      getCategoriesAndDocuments
    );
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchCategoriesFailed(error.message));
    }
  }
}

export function* onFetchCategories() {
  yield takeLatest(FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
