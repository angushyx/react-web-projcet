import React from "react";
import { useState, useContext } from "react";
import UserModal from "../../UI/UserModal";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthContext from "../../../store/Auth-context";
import AuthService from "../../../services/authApi";
import { changePageView } from "../../../slices/ShippingInfo-slice";
import { useDispatch } from "react-redux";

import {
  Header,
  Wrapper,
  Image,
  LogoWrapper,
  UserNav,
  Logo,
  Ul,
  Li,
  CartIcon,
  UserImage,
  Notification,
} from "../Navigation";

const CartNavbar = (props) => {
  /********user modal **************/
  const [showModal, setShowModal] = useState(false);

  const authCtx = useContext(AuthContext);
  const dispatch = useDispatch();

  dispatch(changePageView(window.location.pathname));

  /**
   * !做 logout 的功能
   *
   */
  const logoutHandler = () => {
    AuthService.logout();
    authCtx.logout();
    setShowModal((prev) => !prev);
  };

  const toggleUserModalHandler = () => {
    setShowModal((prev) => !prev);
  };
  /**************************************/

  /**
   *  bgc2="#222"
          after2=" "
          bgc3="#ccc"
          after3=" "
          width3="2rem"
          height3="2rem"
   */
  /**
   * bgc3="#222" after3=" "
   */
  // <CheckStep
  //   bgc1="#222"
  //   after1=" "
  //   bgc2="#ccc"
  //   after2=" "
  //   bgc3="#ccc"
  //   after3=" "
  //   width2="1.5rem"
  //   height2="1.5rem"
  //   width3="1.5rem"
  //   height3="1.5rem"
  // />;

  const cartReducer = useSelector((state) => state.cartReducer);
  const isLoggedIn = authCtx.isLoggedIn;

  //todo 處理 Price 累加的問題

  const totalQuantity = cartReducer.totalQuantity;

  return (
    <>
      {" "}
      <Header height="8rem" display="block">
        <Wrapper maxWidth="auto">
          <LogoWrapper>
            <Link to="/">
              <Logo>
                <Image src={require("../../../image/logo.png")} alt="logo" />
              </Logo>
            </Link>{" "}
          </LogoWrapper>{" "}
          {props.children}
          <UserNav>
            <Ul>
              {!isLoggedIn && (
                <Link to="/login">
                  <Li>
                    <FontAwesomeIcon icon="fa-solid fa-user" />
                  </Li>{" "}
                </Link>
              )}
              {isLoggedIn && (
                <Li onClick={toggleUserModalHandler}>
                  <UserImage>
                    <Image
                      src={require("../../../image/user.JPG")}
                      alt="user"
                    />{" "}
                    <span>Angus</span>
                  </UserImage>{" "}
                </Li>
              )}
              {isLoggedIn && (
                <Li>
                  <CartIcon>
                    <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                    <Notification>{totalQuantity}</Notification>
                  </CartIcon>
                </Li>
              )}{" "}
            </Ul>
          </UserNav>{" "}
        </Wrapper>{" "}
        {showModal && <UserModal onLogout={logoutHandler} />}
      </Header>{" "}
    </>
  );
};

export default CartNavbar;
