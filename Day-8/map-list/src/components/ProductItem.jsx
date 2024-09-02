const ProductItem = (props) => {
  const name = props.name.concat("- 00");

  return (
    <div className="productItem">
      <h3>{name}</h3>
      <p>{props.description}</p>

      <button>${props.price}</button>
    </div>
  );
};

export default ProductItem;
