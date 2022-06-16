import Meal from "../components/Meal";
import ToTopBtn from "../components/UI/NavBtn";
import Footer from "../components/UI/Footer";
import Carousel from "../components/Carousel";
import Hero from "../components/HeroPart";
import BottomNavbar from "../components/Navbar/BottomNavbar";
import Category from "../components/category";

const Home = () => {
  return (
    <>
      <Hero />
      <Category />
      <Meal />
      <Carousel />
      <ToTopBtn />
      <Footer />
      <BottomNavbar />
    </>
  );
};

export default Home;
