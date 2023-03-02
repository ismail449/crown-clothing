import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useCartContext } from "../../contexts/cart.context";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../store/user/user.selector";

import {
  NavigationContainer,
  LogoContainer,
  NavLink,
  NavLinksContainer,
} from "./navigation.styles";

const Navigation = () => {
  const { isCartOpen } = useCartContext();
  const currentUser = useSelector(selectCurrentUser);
  const signOutHandler = async () => {
    await signOutUser();
  };
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>

        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser === null ? (
            <NavLink to="/auth">SIGN IN</NavLink>
          ) : (
            <NavLink onClick={signOutHandler} as="span">
              SIGN OUT
            </NavLink>
          )}

          <CartIcon />
        </NavLinksContainer>
        {isCartOpen ? <CartDropdown /> : null}
      </NavigationContainer>
      <Outlet />
    </>
  );
};
export default Navigation;
