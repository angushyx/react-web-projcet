import React from "react";
import { useState, useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthContext from "../../../store/Auth-context";
import { useLocation } from "react-router-dom";
import UserModal from "../../UI/UserModal";

import {
  Header,
  Wrapper,
  Image,
  Search,
  SearchBtn,
  Input,
  IconStyle,
  LogoWrapper,
  UserNav,
  Logo,
  Hamburger,
  Ul,
  Li,
  CartIcon,
  UserImage,
  Notification,
  LinkStyle,
} from "./NavigationElement";

const Navigation = ({ onShowCart }) => {
  /********user modal **************/
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const location = useLocation();

  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
    setShowModal((prev) => !prev);
  };

  const toggleUserModalHandler = () => {
    setShowModal((prev) => !prev);
  };
  /**************************************/

  const authReducer = useSelector((state) => state.authReducer);
  const cartReducer = useSelector((state) => state.cartReducer);
  // const googleUserData = authReducer.googleUserData;
  // console.log(googleUserData);

  //todo 處理 Price 累加的問題

  const totalQuantity = cartReducer.totalQuantity;

  return (
    <>
      <Link to="register">
        <IconStyle
          position="absolute"
          top="1.4rem"
          color="var(--color-grey-dark-1)"
          fontSize="2rem"
          right="1.4rem"
          radius="50%"
          bgc="var(--color-grey-light-1)"
        >
          {user ? (
            <>
              {/* <UserModal /> */}
              <img style={{ borderRadius: "50%" }} src={user.imageUrl} alt="" />
            </>
          ) : (
            <FontAwesomeIcon icon="fa-solid fa-user" />
          )}
        </IconStyle>{" "}
      </Link>{" "}
      <Header>
        <Wrapper>
          {" "}
          <LinkStyle
            style={{ height: "100%", display: "flex", alignItems: "center" }}
            to="/"
          >
            <IconStyle>
              <FontAwesomeIcon icon="fa-solid fa-house" />
            </IconStyle>{" "}
          </LinkStyle>{" "}
          <LinkStyle
            style={{ height: "100%", display: "flex", alignItems: "center" }}
            to="/"
          >
            <IconStyle>
              <FontAwesomeIcon icon="fa-solid fa-heart" />
            </IconStyle>{" "}
          </LinkStyle>{" "}
          <LinkStyle
            style={{ height: "100%", display: "flex", alignItems: "center" }}
            to="/search"
          >
            <IconStyle>
              <FontAwesomeIcon icon="fa-solid fa-search" />
            </IconStyle>{" "}
          </LinkStyle>
          <LinkStyle
            style={{ height: "100%", display: "flex", alignItems: "center" }}
            to="/"
          >
            <IconStyle>
              <FontAwesomeIcon icon="fa-solid fa-tag" />
            </IconStyle>{" "}
          </LinkStyle>{" "}
          <LinkStyle
            style={{ height: "100%", display: "flex", alignItems: "center" }}
            to="/"
          >
            <IconStyle onClick={onShowCart}>
              <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
              <Notification>{totalQuantity}</Notification>
            </IconStyle>{" "}
          </LinkStyle>{" "}
        </Wrapper>{" "}
      </Header>{" "}
    </>
  );
};

export default Navigation;
