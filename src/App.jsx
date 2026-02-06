  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import Nav from "./components/home/Nav";
  import Footer from "./components/home/Footer";
  import Cart from "./pages/Cart";

  import HomePage from "./pages/Home";
  import CategoryPage from "./pages/CategoryPage";
  import ProductDetail from "./pages/Productdetail";
  import Shoe from "./pages/Shoe"
  import ScrollToTop from "./components/details/Scrolltop";
import WomenCat from "./pages/WomenCat";
import HomePage from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductDetail from "./pages/Productdetail";
import ScrollToTop from "./components/details/Scrolltop";
import Wishlist from "./pages/Wishlist";

  function App() {
    return (
      <BrowserRouter>
        <ScrollToTop />
        <Nav />
      
        <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/men/:category" element={<CategoryPage />} />
    <Route path="/product/:id" element={<ProductDetail />} />
    <Route path="/shoe" element={<Shoe />} />
    <Route path="/womenCat" element={<WomenCat />} />
    <Route path="/cart" element={<Cart />} />   
  </Routes>
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
     
      <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/men/:category" element={<CategoryPage />} />
  <Route path="/product/:id" element={<ProductDetail />} />
  <Route path="/cart" element={<Cart />} />   
  <Route path="/wishlist" element={<Wishlist />} />  
</Routes>


        <Footer />
      </BrowserRouter>
    );
  }

  export default App;
