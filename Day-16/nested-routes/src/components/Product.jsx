import { useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();

  return (
    <div>
      <h1>This is single product {params.productId}</h1>
    </div>
  );
};

export default Product;
