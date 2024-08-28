import { useState } from "react";

const Form = () => {
  const [inputVal, setInputVal] = useState("");

  const handleFieldChange = (event) => {
    const value = event.target.value;

    setInputVal(value);
  };

  return (
    <>
      <input type="text" value={inputVal} onChange={handleFieldChange} />

      <h1>{inputVal}</h1>
    </>
  );
};

export default Form;
