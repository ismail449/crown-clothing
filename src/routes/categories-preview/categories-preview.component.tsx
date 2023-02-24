import React from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useCategoriesContext } from "../../contexts/categories.context";

const CategoriesPreview = () => {
  const { categoriesMap } = useCategoriesContext();
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <CategoryPreview
            key={title}
            title={title}
            products={categoriesMap[title]}
          />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
