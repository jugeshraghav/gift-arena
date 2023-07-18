import { Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./frontend/pages/Home";
import { Products } from "./frontend/pages/Products";
import { Cart } from "./frontend/pages/Cart";
import { Whishlist } from "./frontend/pages/Wishlist";
import { Root } from "./frontend/pages/Root";
import { RequiresAuth } from "./frontend/authentication/requiresAuth";
import Mockman from "mockman-js";
import { ProductDetail } from "./frontend/pages/ProductDetail";
import { LoginCard } from "./frontend/pages/loginCard/LoginCard";
import { SignupCard } from "./frontend/pages/signupCard/SignupCard";
import { User } from "./frontend/components/user/User";

import "react-toastify/dist/ReactToastify.css";
import { Checkout } from "./frontend/pages/Checkout";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/mockman" element={<Mockman />} />
          <Route path="/signup" element={<SignupCard />} />
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
          <Route path="/login" element={<LoginCard />} />
          <Route
            path="/user"
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
