import { Route, Routes } from "react-router";
import Mockman from "mockman-js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "./frontend/pages/Home";
import { Products } from "./frontend/pages/Products";
import { Cart } from "./frontend/pages/Cart";
import { Whishlist } from "./frontend/pages/Wishlist";
import { Root } from "./frontend/pages/Root";
import { RequiresAuth } from "./frontend/authentication/requiresAuth";
import { ProductDetail } from "./frontend/pages/ProductDetail";
import { Checkout } from "./frontend/pages/Checkout";
import "./App.css";
import { User } from "./frontend/pages/User";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route element={<Root />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/mockman" element={<Mockman />} />

          <Route
            path="/checkout"
            element={
              <RequiresAuth>
                <Checkout />
              </RequiresAuth>
            }
          />
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
          <Route path="/login" element={<User />} />
          <Route path="/signup" element={<User />} />
          <Route
            path="/profile"
            element={
              <RequiresAuth>
                <User />
              </RequiresAuth>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
