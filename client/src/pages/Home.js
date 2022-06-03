import Meal from "../components/Meal";
import ToTopBtn from "../components/UI/NavBtn";
import Footer from "../components/UI/Footer";
import Carousel from "../components/Carousel";
import Hero from "../components/HeroPart";

const Home = () => {
  return (
    <>
      <Hero />
      <Meal />
      <Carousel />
      <ToTopBtn />
      <Footer />
    </>
  );
};

export default Home;
