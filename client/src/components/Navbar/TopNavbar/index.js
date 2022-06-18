import React from "react";
import { useState, useContext } from "react";
import UserModal from "../../UI/UserModal";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthService from "../../../services/authApi";
import queryString from "query-string";

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
} from "../Navigation";

const TopNavbar = ({ onShowCart }) => {
  const [keyword, setKeyword] = useState("");

  const parsed = queryString.parse(window.location.search);

  console.log(parsed);

  /********user modal **************/
  const [showModal, setShowModal] = useState(false);

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
  // const searchHandler = () => {
  //   // setKeyword(parsed.keyword);
  // };
  const changeHandler = (e) => {
    setKeyword(e.currentTarget.value);
  };
  console.log(keyword);
  const cartReducer = useSelector((state) => state.cartReducer);

  //todo 處理 Price 累加的問題

  const totalQuantity = cartReducer.totalQuantity;

  return (
    <>
      <Header height="8rem" display="block">
        <Wrapper maxWidth="auto">
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
            <Input
              onChange={changeHandler}
              value={keyword}
              type="text"
              placeholder="search..."
              name="keyword"
            />
            <SearchBtn>
              <IconStyle>
                <FontAwesomeIcon icon="fa-solid fa-search" />
              </IconStyle>
            </SearchBtn>
          </Search>
          <UserNav>
            <Ul>
              <Link to="/login">
                <Li>
                  <FontAwesomeIcon icon="fa-solid fa-user" />
                </Li>{" "}
              </Link>

              <Li onClick={toggleUserModalHandler}>
                <UserImage>
                  <Image src={require("../../../image/user.JPG")} alt="user" />{" "}
                  <span>Angus</span>
                </UserImage>{" "}
              </Li>

              <Li onClick={onShowCart}>
                <CartIcon>
                  <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                  <Notification>{totalQuantity}</Notification>
                </CartIcon>
              </Li>
            </Ul>
          </UserNav>{" "}
        </Wrapper>{" "}
        {showModal && <UserModal onLogout={logoutHandler} />}
      </Header>{" "}
    </>
  );
};

export default TopNavbar;
