import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useUserContext } from "../../contexts/user.context";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.styles.scss";


const Navigation = () => {
  const { currentUser } = useUserContext();

  const signOutHandler = async ()=>{
    await signOutUser()
  }
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser === null ? (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          ) : (
            <span onClick={signOutHandler} className="nav-link">
              SIGN OUT
            </span>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
