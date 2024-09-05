import { useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([
    { id: 1, title: "Laptop", description: "A powerful machine", price: 1200 },
    { id: 2, title: "Phone", description: "A smartphone", price: 800 },
    { id: 3, title: "Headphones", description: "Noise-cancelling", price: 150 },
    { id: 4, title: "Monitor", description: "4K display", price: 300 },
    { id: 5, title: "Mouse", description: "Wireless mouse", price: 50 },
  ]);

  // New Product state
  // const [newProduct, setNewProduct] = useState({
  //   id: 6,
  //   title: "Laptop",
  //   description: "A powerful machine",
  //   price: 1200,
  // });
  const [newProduct, setNewProduct] = useState({});

  const [editProduct, setEditProduct] = useState({});

  const handleRemove = (indexValue) => {
    // const newProducts = products.filter(
    //   (product) => product.id !== products[indexValue].id
    // );

    const newProducts = products.filter((_, i) => i !== indexValue);

    setProducts(newProducts);
  };

  const hanldeChange = (event) => {
    const { name, value } = event.target;

    // console.log(newProduct);
    // console.log({ ...newProduct });

    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const hanldeAdd = () => {
    const newId = products.length > 0 ? products.at(-1).id + 1 : 1;

    setProducts((prevProducts) => {
      return [
        ...prevProducts,
        {
          ...newProduct,
          id: newId,
        },
      ];
    });
  };

  const handleEdit = (i) => {
    const product = products[i];

    setEditProduct(product);
  };

  return (
    <div className="productListContainer">
      {/* form */}
      <div>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={hanldeChange}
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={hanldeChange}
        />

        <input
          type="text"
          name="price"
          placeholder="Price"
          onChange={hanldeChange}
        />

        <button onClick={hanldeAdd}>Add Product</button>
      </div>

      <div className="productList">
        {products.length > 0 ? (
          products.map((product, index) => {
            return (
              <div
                className="productItem"
                key={`${product.id}-${product.title}`}
              >
                <h2>{product.title}</h2>
                <p>{product.description}</p>

                <span>{product.price}</span>

                <br />
                <button onClick={() => handleRemove(index)}>Remove</button>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </div>
            );
          })
        ) : (
          <h2>Empty List</h2>
        )}
      </div>

      {/* Update Form */}
      {editProduct.id && (
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={hanldeChange}
            value={editProduct.title}
          />

          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={hanldeChange}
            value={editProduct.description}
          />

          <input
            type="text"
            name="price"
            placeholder="Price"
            onChange={hanldeChange}
            value={editProduct.price}
          />

          <button onClick={() => {}}>Update</button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
