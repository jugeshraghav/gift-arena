import { Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./frontend/pages/Home";
import { Products } from "./frontend/pages/Products";
import { Cart } from "./frontend/pages/Cart";
import { Whishlist } from "./frontend/pages/Wishlist";
import { Root } from "./frontend/pages/Root";
import { Login } from "./frontend/pages/Login";
import { RequiresAuth } from "./frontend/authentication/requiresAuth";
import Mockman from "mockman-js";
import { SignUp } from "./frontend/pages/SignUp";
import { ProductDetail } from "./frontend/pages/ProductDetail";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/mockman" element={<Mockman />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/product-detail/:product_id"
            element={<ProductDetail />}
          />
          <Route
            path="/wishlist"
            element={
              <RequiresAuth>
                <Whishlist />
              </RequiresAuth>
            }
          />
          <Route
            path="/cart"
            element={
              <RequiresAuth>
                <Cart />
              </RequiresAuth>
            }
          />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
