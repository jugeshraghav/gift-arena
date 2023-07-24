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
import { OrderSuccessfull } from "./frontend/pages/OrderSuccessfull";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        reverseOrder={false}
        containerStyle={{ top: "10%" }}
        toastOptions={{ style: { maxWidth: 500 } }}
        theme="colored"
        autoClose={1000}
        closeOnClick={true}
        pauseOnHover={false}
      />
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
            path="/order-successfull"
            element={
              <RequiresAuth>
                <OrderSuccessfull />
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
          <Route
            path="/address"
            element={
              <RequiresAuth>
                <User />
              </RequiresAuth>
            }
          />
          <Route
            path="/order-summary"
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
