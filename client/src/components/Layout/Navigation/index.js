import React from "react";
import { useState, useContext } from "react";
import UserModal from "../../UI/UserModal";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthContext from "../../../store/Auth-context";

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
} from "./NavigationElement";

const Navigation = ({ onShowCart }) => {
  /********user modal **************/
  const [showModal, setShowModal] = useState(false);

  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
    setShowModal((prev) => !prev);
  };

  const toggleUserModalHandler = () => {
    setShowModal((prev) => !prev);
  };
  /**************************************/

  const cartReducer = useSelector((state) => state.cartReducer);
  const isLoggedIn = authCtx.isLoggedIn;

  //todo 處理 Price 累加的問題

  const totalQuantity = cartReducer.totalQuantity;

  // const [authenticated, setAuthenticated] = useState(false);
  // const [user, setUser] = useState("");
  // const handleNotAuthenticated = () => {
  //   setAuthenticated(false);
  // };

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/auth/login/success")
  //     .then((res) => {
  //       if (res.status === 200) return res.json();
  //       throw new Error("failed to authenticate user");
  //     })
  //     .then((responseJson) => {
  //       setAuthenticated(true);
  //       setUser(responseJson.user);
  //     });
  // }).catch((error) => {
  //   setAuthenticated(false);
  //   error: "Failed to authenticate user";
  // });

  return (
    <>
      <Header>
        <Wrapper>
          <Hamburger>
            <FontAwesomeIcon icon="fa-solid fa-bars" />
          </Hamburger>
          <LogoWrapper>
            <Link to="/">
              <Logo>
                <Image src={require("../../../image/logo.png")} alt="logo" />
              </Logo>
            </Link>{" "}
          </LogoWrapper>
          <Search method="GET" action="/search">
            <Input type="text" placeholder="search..." name="keyword" />
            <SearchBtn>
              <IconStyle>
                <FontAwesomeIcon icon="fa-solid fa-search" />
              </IconStyle>
            </SearchBtn>
          </Search>
          <UserNav>
            <Ul>
              {!isLoggedIn && (
                <Link to="register">
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
                <Li onClick={onShowCart}>
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

export default Navigation;
