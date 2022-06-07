import React from "react";
import { useState, useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import UserModal from "../../UI/UserModal";
import { ImageStyle } from "../../Payment/PaymentElement";

import {
  Header,
  Wrapper,
  IconStyle,
  Notification,
  LinkStyle,
  UserIcon,
} from "../Navigation";

const BottomNavbar = ({ onShowCart }) => {
  /********user modal **************/

  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const googleLogin = JSON.parse(localStorage.getItem("profile"));

  const navigator = useNavigate();

  //for google login
  const location = useLocation();
  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [location]);

  // const authCtx = useContext(AuthContext);
  const logoutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("profile");
    navigator("/login");
  };

  const toggleUserModalHandler = () => {
    setShowModal((prev) => !prev);
  };
  /**************************************/

  // const authReducer = useSelector((state) => state.authReducer);
  const cartReducer = useSelector((state) => state.cartReducer);

  const googleImage = googleLogin?.imageUrl;

  const totalQuantity = cartReducer.totalQuantity;

  return (
    <>
      <UserIcon>
        {" "}
        <IconStyle
          position="absolute"
          top="1.8rem"
          color="var(--color-grey-dark-1)"
          fontSize="2rem"
          right="4rem"
          radius="50%"
          bgc="var(--color-grey-light-1)"
        >
          {user ? (
            <>
              <div onClick={toggleUserModalHandler}>
                {showModal && <UserModal onLogout={logoutHandler} />}
                <div>
                  <ImageStyle
                    width="5rem"
                    height="5rem"
                    style={{ borderRadius: "50%" }}
                    src={user.user.imageUrl}
                    alt="user avatar"
                  />
                </div>
              </div>
            </>
          ) : googleLogin ? (
            <>
              <div onClick={toggleUserModalHandler}>
                {showModal && <UserModal onLogout={logoutHandler} />}
                <div>
                  <ImageStyle
                    width="5rem"
                    height="5rem"
                    style={{ borderRadius: "50%" }}
                    src={googleImage}
                    alt="user avatar"
                  />
                </div>
              </div>
            </>
          ) : (
            <Link to="/login">
              <FontAwesomeIcon icon="fa-solid fa-user" />{" "}
            </Link>
          )}
        </IconStyle>
      </UserIcon>
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

export default BottomNavbar;
