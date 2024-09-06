import { useRef, useState } from "react";

const UncontrolledComp = () => {
  const inputRef = useRef(null);
  const [usernameError, setUsernameError] = useState(false);

  const hanldeButton = () => {
    if (!inputRef.current) {
      return;
    }

    const inputEle = inputRef.current;
    const inputValue = inputEle.value.trim();

    if (inputValue.length < 6) {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" name="username" id="username" />
      <button onClick={hanldeButton}>Do Something</button>

      {usernameError && <p>There is an error.</p>}
    </div>
  );
};

export default UncontrolledComp;
