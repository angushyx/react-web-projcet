import "./App.css";
import Home from "./pages/Home";
import NoFound from "./pages/NoFound";

import Search from "./pages/Search";
import Meals from "./pages/Meals";
import DetailPages from "./pages/DetailPages";

import CheckoutPage from "./pages/CheckoutPage";
import PaymentPage from "./pages/PaymentPage";
import ConfirmPage from "./pages/ConfirmPage";

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";

import Cart from "./components/Cart";

import { useState, useEffect } from "react";
import { gapi } from "gapi-script";
import { Routes, Route, useRoutes, RouteObject } from "react-router-dom";

const routeConfig = [
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "/signup",
    element: <SignupPage />,
    children: [],
  },
  {
    path: "/login",
    element: <LoginPage />,
    children: [],
  },
  {
    path: "/meals",
    element: <Meals />,
    children: [],
  },
  {
    path: "/meals/:itemId",
    element: <DetailPages />,
  },
  {},
  {
    path: "/review/confirm",
    element: <ConfirmPage />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/user/profile",
    element: <ProfilePage />,
  },
  {
    path: "/review/payment",
    element: <PaymentPage />,
  },
  {
    path: "/review/checkout",
    element: <CheckoutPage />,
  },

  {
    path: "*",
    element: <NoFound />,
  },
];

function App() {
  window.scrollTo(0, 0);
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "472610148148-acvlomegqtfkp1a32drp8oqaft1rnoae.apps.googleusercontent.com",
        scope: "",
        plugin_name: "App Name that you used in google developer console API",
      });
    }
    gapi.load("client", start);
  });

  const element = useRoutes(routeConfig);

  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hiddenCartHandler = () => {
    setCartIsShown(false);
  };
  // <Navigation onShowCart={showCartHandler} />;
  <Cart onHiddenCart={hiddenCartHandler} />;

  return (
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/location" element={<Location />} />
    //   <Route path="/shop" element={<Shop />}>
    //     <Route path=":itemId" element={<Item />} />
    //     <Route path="new" element={<NewItem />} />
    //   </Route>
    //   <Route path="/register" element={<Register />} />
    // </Routes>
    <>
      {" "}
      <>{element}</>
    </>
  );
}

/*
 
 {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "/auth",
    element: <auth />,
      children: [
        path:"/google",element:<原本google的>
      ],
  },
  {
    path: "/Shop",
    element: <Shop />,
  },

  { path: "/new", element: <NewItem /> },

  { path: "/product/:itemId", element: <DetailPages /> },
  {
    path: "/Location",
    element: <Location />,
  },
  {
    path: "/confirm",
    element: <ConfirmPage />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/payment",
    element: <PaymentPage />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },

  {
    path: "*",
    element: <NoFound />,
  },
 */

export default App;
