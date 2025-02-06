// import Card from "./components/Card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import CardTwo from "./components/CardTwo";

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    console.log("useEffect");
    // if (products.length > 0) return;

    fetchProducts();
  }, [products.length]);

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <img src={product.image} width={200} alt={product.title} />
          <h2>{product.price}</h2>
        </div>
      ))}

      <Link to={"/about"}>about</Link>
    </>
  );
};

export default App;
