import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../contexts/categories.context";
import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from "./category-preview.styles";

type CategoryPreviewProps = { title: string; products: Product[] };

const CategoryPreview = ({ title, products }: CategoryPreviewProps) => {
  return (
    <CategoryPreviewContainer>
      <Title>
        <Link to={title}>
          <span>{title.toLocaleUpperCase()}</span>
        </Link>
      </Title>
      <Preview>
        {products.slice(0, 4).map((product: Product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
