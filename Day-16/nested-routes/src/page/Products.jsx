import { Link, Outlet } from "react-router-dom";

const Products = () => {
  const productsItems = [
    {
      id: 1,
      name: "Product 1",
    },
    {
      id: 2,
      name: "Product 2",
    },
    {
      id: 3,
      name: "Product 3",
    },
  ];

  return (
    <div>
      <h1>Product Listing Page</h1>

      {productsItems.map((product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </div>
      ))}

      <div>
        <Link to="/products/create">Create Product</Link>
      </div>

      {/* Show childen*/}
      <Outlet />
    </div>
  );
};

export default Products;
