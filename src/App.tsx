import { Route, Routes } from "react-router-dom";

import "./App.css";

import { ProductList } from "./components/ProductList/ProductList";
import { CartList } from "./components/CartList/CartList";
import { ProductType } from "./redux/slices/productSlice";
import { ProductDetails } from "./components/ProductDetails/ProductDetails";

export type ProductArrType = ProductType[];

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<CartList />} />
        <Route path="product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
