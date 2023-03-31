import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Product } from "../../store/category/category.types";
import ProductCard from "../../components/product-card/product-card.component";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/category/category.selector";
import Spinner from "../../components/spinner/spinner.component";
import {
  CategoryDetailsContainer,
  CategoryDetailsTitle,
} from "./category-details.styles";

const CategoryDetails = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState<Product[]>([]);

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
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryDetailsContainer>
          {products &&
            products.map((product: Product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </CategoryDetailsContainer>
      )}
    </>
  );
};

export default CategoryDetails;
