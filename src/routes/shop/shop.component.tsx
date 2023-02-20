import React from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { useProductsContext } from "../../contexts/products.context";
import './shop.styles.scss'

const Shop = () => {
  const { products } = useProductsContext();
  return (
    <div className="products-container" >
      {products.length !== 0?products.map((product) => (
        <ProductCard product={product} key={product.id} />
      )):null}
    </div>
  );
};

export default Shop;
