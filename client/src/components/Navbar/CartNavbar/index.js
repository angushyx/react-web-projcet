import React from "react";
import { useState, useContext } from "react";
import UserModal from "../../UI/UserModal";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

  const dispatch = useDispatch();

  dispatch(changePageView(window.location.pathname));

  /**
   * !做 logout 的功能
   *
   */
  const logoutHandler = () => {
    AuthService.logout();

    setShowModal((prev) => !prev);
  };

  const toggleUserModalHandler = () => {
    setShowModal((prev) => !prev);
  };
  /**************************************/
  const cartReducer = useSelector((state) => state.cartReducer);

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
              {/* <Link to="/login">
                <Li>
                  <FontAwesomeIcon icon="fa-solid fa-user" />
                </Li>{" "}
              </Link> */}

              <Li onClick={toggleUserModalHandler}>
                <UserImage>
                  <Image src={require("../../../image/user.JPG")} alt="user" />{" "}
                </UserImage>{" "}
              </Li>
            </Ul>
          </UserNav>{" "}
        </Wrapper>{" "}
        {showModal && <UserModal onLogout={logoutHandler} />}
      </Header>{" "}
    </>
  );
};

export default CartNavbar;
