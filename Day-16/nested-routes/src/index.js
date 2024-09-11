import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Products from "./page/Products";
import Product from "./components/Product";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/products"}>Products</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route
          path="/products/create"
          element={<div>this for creating product</div>}
        /> */}

        <Route path="/products" element={<Products />}>
          {/* <Route index element={<Products />} /> */}
          <Route path=":productId" element={<Product />} />
          <Route path="create" element={<div>this for creating product</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
