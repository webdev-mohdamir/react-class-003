import winterItems from "../constants/winterItems";

const WinterList = () => {
  return (
    <div>
      <WinterItem />
    </div>
  );
};

export default WinterList;

const WinterItem = () => {
  return (
    <div>
      <h2>name</h2>
      <p>brand</p>
      <p>category</p>
      <p>price</p>
      <button>Stock</button>
    </div>
  );
};
