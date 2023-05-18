import { Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./frontend/pages/Home";
import { Products } from "./frontend/pages/Products";
import { Cart } from "./frontend/pages/Cart";
import { Whishlist } from "./frontend/pages/Wishlist";


function App() {
  return (
    <div className="App">
      
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/wishlist" element={<Whishlist/>}/>
     </Routes>
    </div>
  );
}

export default App;
