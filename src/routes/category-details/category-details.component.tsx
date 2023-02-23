import React from "react";
import { useParams } from "react-router-dom";
import {
  Product,
  useCategoriesContext,
} from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./category-preview.styles.scss";

const CategoryDetails = () => {
  const { pageId } = useParams();
  const { categoriesMap } = useCategoriesContext();
  if (pageId && categoriesMap[pageId]) {
    return (
      <div className="category-preview-container">
        <h2 className="title">{pageId}</h2>
        <div className="preview">
          {categoriesMap[pageId].map((product: Product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    );
  }
  return <h2>Loading...</h2>;
};

export default CategoryDetails;
