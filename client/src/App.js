import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import NewItem from "./pages/NewItem";
import NoFound from "./pages/NoFound";
import DetailPages from "./pages/DetailPages";
import SignupPage from "./pages/SignupPage";
import Search from "./pages/Search";
import CheckoutPage from "./pages/CheckoutPage";
import PaymentPage from "./pages/PaymentPage";
import ConfirmPage from "./pages/ConfirmPage";
import LoginPage from "./pages/LoginPage";

import Cart from "./components/Cart";
import { useState } from "react";
import { gapi } from "gapi-script";
import { useEffect } from "react";

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
    path: "/Shop",
    element: <Shop />,
  },

  { path: "/new", element: <NewItem /> },

  { path: "/product/:itemId", element: <DetailPages /> },
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
