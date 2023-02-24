import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Product,
  useCategoriesContext,
} from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./category-details.styles.scss";

const CategoryDetails = () => {
  const { category } = useParams();
  const { categoriesMap } = useCategoriesContext();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category) {
      setProducts(categoriesMap[category]);
    }
  }, [categoriesMap, category]);
  return (
    <div>
      <h2>{category}</h2>
      <div className="category-details-container">
        {products &&
          products.map((product: Product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
};

export default CategoryDetails;
