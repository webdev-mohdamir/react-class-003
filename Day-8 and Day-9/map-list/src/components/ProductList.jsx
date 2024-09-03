import ProductItem from "./ProductItem";

const ProductList = () => {
  const products = [
    { name: "Laptop", price: 1000, description: "High performance laptop" },
    {
      name: "Phone",
      price: 500,
      description: "Smartphone with a great camera",
      sale: true,
    },
    { name: "Tablet", price: 300, description: "Portable and powerful tablet" },
  ];

  // Destructuring obj

  return (
    <div className="productList">
      {/* {products.map((product) => {
        return (
          <div className="productItem">
            <h3>{product.name}</h3>
            <p>{product.description}</p>

            <button>${product.price}</button>
          </div>
        );
      })} */}

      {products.map(({ name, description, price }, i) => {
        return (
          <ProductItem
            key={`${i}`}
            name={name}
            description={description}
            price={price}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
