import Meal from "../components/Meal";
import ToTopBtn from "../components/UI/NavBtn";
import Footer from "../components/UI/Footer";
import Carousel from "../components/Carousel";
import Hero from "../components/HeroPart";
import BottomNavbar from "../components/Navbar/BottomNavbar";
import Category from "../components/category";
import Intro from "../components/Introduction";

const Home = () => {
  return (
    <>
      <Hero />
      <Category />
      <Meal />
      <Carousel />
      <Intro/>
      <ToTopBtn />
      <Footer />
      <BottomNavbar />
    </>
  );
};

export default Home;
