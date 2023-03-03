import { CartItem } from "../../store/cart/cart.custom-types";
import {
  removeCartItem,
  addCartItem,
  clearItemFromCart,
} from "../../store/cart/cart.action";
import {
  Arrow,
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Price,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.styles";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

type CartItemProps = {
  cartItem: CartItem;
};

const CheckoutItem = ({ cartItem }: CartItemProps) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const removeItemHandler = () => dispatch(removeCartItem(cartItems, cartItem));
  const addItemHandler = () => dispatch(addCartItem(cartItems, cartItem));
  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={cartItem.imageUrl} alt={cartItem.name} />
      </ImageContainer>
      <Name>{cartItem.name}</Name>

      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value> {cartItem.quantity} </Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>

      <Price>{cartItem.price}$</Price>

      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
