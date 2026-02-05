import Nav from "../components/home/Nav.jsx";
import Hero from "../components/home/Hero.jsx";
import Marquee from "../components/home/Marquee.jsx";
import Topcategories from "../components/home/Topcategories.jsx";
import Men from "../components/home/Men.jsx";
import Women from "../components/home/women.jsx";
import Sneaker from "../components/home/Sneaker.jsx";
import Newarrival from "../components/home/Newarrival.jsx";
import Bestseller from "../components/home/Bestseller.jsx";
import Footer from "../components/home/Footer.jsx";



const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Topcategories />
      <Men  />
      <Women  />
      <Sneaker />
      <Newarrival />
      <Bestseller />
      <Footer />
      
    </>
  );
};

export default Home;
