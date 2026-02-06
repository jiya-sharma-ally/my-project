import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/home/Nav";
import Footer from "./components/home/Footer";

import HomePage from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductDetail from "./pages/Productdetail";
import ScrollToTop from "./components/details/Scrolltop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
     
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/men/:category" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
