import "./App.css";
import Home from "./pages/Home";
import Location from "./pages/Location";
import Shop from "./pages/Shop";
import NewItem from "./pages/NewItem";
import NoFound from "./pages/NoFound";
import DetailPages from "./pages/DetailPages";
import Register from "./pages/Register";
import Search from "./pages/Search";
import CheckoutPage from "./pages/CheckoutPage";
import PaymentPage from "./pages/PaymentPage";
import ConfirmPage from "./pages/ConfirmPage";
import Navigation from "./components/Layout/Navigation";
import Cart from "./components/Cart";
import { useState } from "react";

import Container from "./components/Layout/Container";

import { Routes, Route, useRoutes, RouteObject } from "react-router-dom";

const routeConfig = [
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "/register",
    element: <Register />,
    children: [],
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
];

function App() {
  const element = useRoutes(routeConfig);

  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hiddenCartHandler = () => {
    setCartIsShown(false);
  };
  <Navigation onShowCart={showCartHandler} />;
  {
    cartIsShown && <Cart onHiddenCart={hiddenCartHandler} />;
  }
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

    <Container>
      <>{element}</>
    </Container>
  );
}

export default App;
