import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Product } from "../../store/category/category.reducer";
import ProductCard from "../../components/product-card/product-card.component";
import { selectCategoriesMap } from "../../store/category/category.selector";
import {
  CategoryDetailsContainer,
  CategoryDetailsTitle,
} from "./category-details.styles";

const CategoryDetails = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category) {
      setProducts(categoriesMap[category]);
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
