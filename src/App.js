import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Wishlist } from "./pages/Wishlist";
import { Product } from "./pages/Product";
import { Navbar } from "./components/Navbar";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/LogIn";
import { SignUp } from "./pages/SignUp";
import { ProtectedRoute } from "./utils/ProtectedRoute";
import { Success } from "./pages/Success";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="cart" element={<Cart />} />
          <Route path="success" element={<Success />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
