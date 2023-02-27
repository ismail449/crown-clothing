import React from "react";
import Button from "../button/button.component";
import { Product } from "../../contexts/categories.context";
import { useCartContext } from "../../contexts/cart.context";
import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";

type ProductCardProps = {
  product: Product;
};
const ProductCard = ({ product }: ProductCardProps) => {
  const { imageUrl, name, price } = product;
  const { addCartItem } = useCartContext();
  const handleAddToCart = () => {
    addCartItem(product);
  };
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button onClick={handleAddToCart} buttonType="inverted">
        add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
