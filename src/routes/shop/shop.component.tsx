import React from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { useProductsContext } from "../../contexts/products.context";
import './shop.styles.scss'

const Shop = () => {
  const { products } = useProductsContext();
  return (
    <div className="products-container" >
      {products.map(({ name, id, imageUrl, price }) => (
        <ProductCard key={id} imageUrl={imageUrl} name={name} price={price} />
      ))}
    </div>
  );
};

export default Shop;
