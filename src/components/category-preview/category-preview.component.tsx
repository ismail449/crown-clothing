import React from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../../contexts/categories.context";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";

type categoriesProps = { title: string; products: Product[] };

const CategoryPreview = ({ title, products }: categoriesProps) => {
  const navigate = useNavigate();
  return (
    <div className="category-preview-container">
      <h2 className="title">
        <span onClick={() => navigate(`/shop/${title}`)}>
          {title.toLocaleUpperCase()}
        </span>
      </h2>
      <div className="preview">
        {products.slice(0, 4).map((product: Product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
