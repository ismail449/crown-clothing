import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Product,
  useCategoriesContext,
} from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import {
  CategoryDetailsContainer,
  CategoryDetailsTitle,
} from "./category-details.styles";

const CategoryDetails = () => {
  const { category } = useParams();
  const { categoriesMap } = useCategoriesContext();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category) {
      setProducts(categoriesMap[category as keyof typeof categoriesMap]);
    }
  }, [categoriesMap, category]);
  return (
    <>
      <CategoryDetailsTitle>
        {category?.toLocaleUpperCase()}
      </CategoryDetailsTitle>
      <CategoryDetailsContainer>
        {products &&
          products.map((product: Product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </CategoryDetailsContainer>
    </>
  );
};

export default CategoryDetails;
