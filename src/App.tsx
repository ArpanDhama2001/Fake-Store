import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import CartPage from './pages/CartPage'
import Product from './pages/ProductPage';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:productId" element={<Product />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
    </div>
  );
}

export default App;
