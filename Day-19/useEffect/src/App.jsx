import { useEffect, useState } from "react";

const App = () => {
  // useEffect(() => {
  //   // Code will come here

  //   return () => {
  //     // Optional: Cleanup function
  //   };
  // }, []); // []: Depenency array

  const [count, setCount] = useState(0);
  // const [count1, setCount1] = useState(0);

  // Todo List
  // One to update
  // Rerender my component with latest todo list

  // useEffect(() => {
  //   console.log("App Componenet Rendered");
  // }, [count, count1]);

  // useEffect(() => {
  //   console.log("App Componenet Rendered");

  //   return () => {
  //     console.log("App Componenet UnMounted");
  //   };
  // }, [count]);

  // useEffect(() => {
  //   const reziseEvent = (e) => {
  //     console.log("Window Resized");
  //   };

  //   window.addEventListener("resize", reziseEvent);

  //   return () => {
  //     window.removeEventListener("resize", reziseEvent);
  //   };
  // }, []);

  // useEffect(() => {
  //   const countTimeout = setTimeout(() => {
  //     setCount((prevCount) => prevCount + 1);
  //   }, 3000);

  //   return () => {
  //     console.log("clear timeout");
  //     clearTimeout(countTimeout);
  //   };
  // }, [count]);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <div>
        {/* <h1>{count}</h1>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Increse
        </button> */}
        {/* <h1>{count1}</h1>
        <button onClick={() => setCount1(count1 + 1)}>Increse</button> */}

        {posts.length > 0 &&
          posts.map((post) => <p key={post.id}>{post.title}</p>)}
      </div>
    </>
  );
};

export default App;
