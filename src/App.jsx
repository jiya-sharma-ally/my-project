import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/home/Nav";
import Footer from "./components/home/Footer";
import ScrollToTop from "./components/details/Scrolltop";

import HomePage from "./pages/Home";
import CategoryPage from "./pages/Categorypage";
import ProductDetail from "./pages/Productdetail";
import Shoe from "./pages/Shoe";
import WomenCat from "./pages/WomenCat";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkoutpage from "./pages/checkoutpage";

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
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/women/:category" element={<WomenCat />} />
\       <Route path="Checkoutpage" element={<Checkoutpage />} />
\      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
