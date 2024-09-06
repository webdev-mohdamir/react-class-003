import { useState } from "react";

const ControlledComp = () => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);

  const hanndleUsername = (e) => {
    const value = e.target.value;
    setUsername(value);

    if (value.length < 6) {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }
  };

  return (
    <form>
      <input
        type="text"
        name="username"
        id="username"
        value={username}
        // onChange={(e) => console.log(e.target.value)}
        // onChange={(e) => setUsername(e.target.value)}
        onChange={hanndleUsername}
      />

      <br />
      {usernameError && (
        <span>The user name should be like 6 characters long.</span>
      )}
    </form>
  );
};

export default ControlledComp;
