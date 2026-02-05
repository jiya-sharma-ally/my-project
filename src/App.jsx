import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductDetail from "./pages/Productdetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/men/:category" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
