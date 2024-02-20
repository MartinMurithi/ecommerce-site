import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Product from "./components/product-page/Product";
import Home from "./pages/Home";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";
import Cart from "./pages/Cart";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Toaster position="top-center" />
    </>
  );
}

export default App;
