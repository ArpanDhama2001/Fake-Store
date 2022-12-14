import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import Navbar from "./components/navbar/Navbar";
import FaviouritesPage from "./pages/FaviouritesPage";
import Footer from "./components/Footer/Footer";
import CategoryPage from "./pages/CategoryPage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="/favourite" element={<FaviouritesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
