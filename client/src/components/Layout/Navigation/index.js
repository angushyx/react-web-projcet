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

  return (
    <>
      {" "}
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
          <FontAwesomeIcon icon="fa-solid fa-user" />
        </IconStyle>{" "}
      </Link>{" "}
      <Header>
        <Wrapper>
          {" "}
          <Link to="/">
            <IconStyle>
              <FontAwesomeIcon icon="fa-solid fa-house" />
            </IconStyle>{" "}
          </Link>{" "}
          <Link to="/">
            <IconStyle>
              <FontAwesomeIcon icon="fa-solid fa-heart" />
            </IconStyle>{" "}
          </Link>{" "}
          <Link to="/search">
            <IconStyle>
              <FontAwesomeIcon icon="fa-solid fa-search" />
            </IconStyle>{" "}
          </Link>
          <Link to="/">
            <IconStyle>
              <FontAwesomeIcon icon="fa-solid fa-tag" />
            </IconStyle>{" "}
          </Link>{" "}
          <IconStyle onClick={onShowCart}>
            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
            <Notification>{totalQuantity}</Notification>
          </IconStyle>
        </Wrapper>{" "}
      </Header>{" "}
    </>
  );
};

export default Navigation;

{
  /* <Hamburger>
            <FontAwesomeIcon icon="fa-solid fa-bars" />
          </Hamburger> */
}
// {
//   showModal && <UserModal onLogout={logoutHandler} />;
// }

//  {/* <Search method="GET" action="/search">
//       <Input type="text" placeholder="search..." name="keyword" />
//       <SearchBtn>
//         <IconStyle>
//           <FontAwesomeIcon icon="fa-solid fa-search" />
//         </IconStyle>
//       </SearchBtn>
//     </Search> */}
//     <UserNav>
//       <Ul>
//         {!isLoggedIn && (
//           <Link to="register">
//             <Li>
//               <FontAwesomeIcon icon="fa-solid fa-user" />
//             </Li>{" "}
//           </Link>
//         )}
//         {isLoggedIn && (
//           <Li onClick={toggleUserModalHandler}>
//             <UserImage>
//               <Image
//                 src={require("../../../image/user.JPG")}
//                 alt="user"
//               />{" "}
//               <span>Angus</span>
//             </UserImage>{" "}
//           </Li>
//         )}
//         {/* {isLoggedIn && (

//         )}{" "} */}
//       </Ul>
//     </UserNav>{" "}
