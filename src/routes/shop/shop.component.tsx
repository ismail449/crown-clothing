import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCategoriesStart } from "../../store/category/category.action";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import CategoryDetails from "../category-details/category-details.component";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<CategoryDetails />} />
    </Routes>
  );
};

export default Shop;
