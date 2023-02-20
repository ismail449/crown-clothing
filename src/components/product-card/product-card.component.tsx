import React from "react";
import Button from "../button/button.component";
import { Product } from "../../contexts/products.context";
import { useCartContext } from "../../contexts/cart.context";
import "./product-card.styles.scss";

type ProductCardProps = {
  product: Product
}
const ProductCard = ({product}: ProductCardProps) => {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useCartContext()
  const handleAddToCart = ()=>{
    addItemToCart(product)
  }
  return (

    <div className="product-card-container">
      <img src={imageUrl} alt={name}/>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={handleAddToCart} buttonType="inverted">add to cart</Button>
    </div>
  );
};

export default ProductCard;
