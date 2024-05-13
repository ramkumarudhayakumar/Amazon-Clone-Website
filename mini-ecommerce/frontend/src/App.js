import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Cart from "./pages/Cart";
import OrderAddress from "./pages/OrderAddress";
function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="App">
      <ToastContainer theme="dark" position="top-center" />
      <Router>
        <div>
          <Header cartItems={cartItems} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Home />} />
            <Route
              path="/product/:id"
              element={
                <ProductDetail
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart cartItems={cartItems} setCartItems={setCartItems} />
              }
            />
            <Route
              path="/address"
              element={
                <OrderAddress
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              }
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
