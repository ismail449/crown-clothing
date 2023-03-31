import Button from "../button/button.component";
import { Product } from "../../store/category/category.types";
import { addCartItem } from "../../store/cart/cart.action";
import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

type ProductCardProps = {
  product: Product;
};
const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch();
  const { imageUrl, name, price } = product;
  const cartItems = useSelector(selectCartItems);
  const handleAddToCart = () => {
    dispatch(addCartItem(cartItems, product));
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
