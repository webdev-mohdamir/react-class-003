import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/base/PageNotFound";
import About from "./components/About";
import Navbar from "./components/base/Navbar";
import BlogLayout from "./components/blog/BlogLayout";
import SingleBlog from "./components/blog/SingleBlog";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />

        <Route path="/blogs" element={<BlogLayout />}>
          {/* <Route path="/blogs/single-blog" element={<SingleBlog />} /> */}
          <Route path="/blogs/:id" element={<SingleBlog />} />
        </Route>

        <Route
          path="/blogs/notWithParent"
          element={
            <>
              <h1>This is not with parent</h1>
            </>
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
