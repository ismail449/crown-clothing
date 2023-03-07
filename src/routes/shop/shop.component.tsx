import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCategoriesAsync } from "../../store/category/category.action";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import CategoryDetails from "../category-details/category-details.component";
import { AppDispatch } from "../../store/store";

const Shop = () => {
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<CategoryDetails />} />
    </Routes>
  );
};

export default Shop;
