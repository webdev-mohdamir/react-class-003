import { useState } from "react";

// const App = () => {
//   const [state, setState] = useState(true);

//   if (state) {
//     return <h1>Hello India</h1>;
//   }

//   return <>Hello World</>;
// };

// const App = () => {
//   const [state, setState] = useState("nepal");

//   // Terniary operator; cond ? true : false

//   return (
//     <>
//       <h1>This is App component</h1>
//       {state === "india" ? <span>India</span> : <span>Other</span>}
//     </>
//   );
// };

// const App = () => {
//   const [state, setState] = useState(false);

//   return (
//     <>
//       <h1>This is App component</h1>
//       {/* {state && <h2>Welcome to the new land.</h2>} */}
//       {/* {(state && <h2>Welcome to the new land.</h2>) || <h2>ELse one</h2>} */}
//     </>
//   );
// };

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const hanldeClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <button onClick={hanldeClick}>{isLoggedIn ? "logout" : "login"}</button>

      {isLoggedIn && <h1>Welcome back sir/ma'am</h1>}
    </>
  );
};

export default App;
