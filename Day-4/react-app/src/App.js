import { useState } from "react";

function App() {
  // useState, destructring
  // const [value, updateValueFunc] = useState(intial value)
  const [count, setCount] = useState(0);

  // let count = 0;

  const hanldeClick = () => {
    // setCount(2);
    // count previous => +1

    // setCount(count + 1); // 0-->1
    setCount((prevCount) => prevCount + 1);
  };

  // Counter app
  // Buttom decrease
  // Increase

  return (
    <>
      <h1>{count}</h1> {/*  */}
      <button onClick={hanldeClick}>Click</button>
    </>
  );
}

export default App;
