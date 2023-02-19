import React from "react";
import Button from "../button/button.component";
import "./product-card.styles.scss";

type ProductCardProps = {
  name: string;
  price: number;
  imageUrl: string
}
const ProductCard = ({name, price, imageUrl}: ProductCardProps) => {
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name}/>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted">add to cart</Button>
    </div>
  );
};

export default ProductCard;
