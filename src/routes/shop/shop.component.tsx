import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import {
  Product,
  useCategoriesContext,
} from "../../contexts/categories.context";
import "./shop.styles.scss";

const Shop = () => {
  const navigate = useNavigate();

  const { categoriesMap } = useCategoriesContext();
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <div key={title}>
            <h2 onClick={() => navigate(`/shop/${title}`)}>{title}</h2>
            <div className="products-container">
              {categoriesMap[title].slice(0, 4).map((product: Product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Shop;
