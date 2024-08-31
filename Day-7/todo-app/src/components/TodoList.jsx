// input ele
// add button

// Items
// title
// delete

// Features,
//  Completed --> todo --> bg green

// const todos = [
//   {
//     title: "First todo",
//   },
//   {
//     title: "Sec todo",
//   },
//   {
//     title: "thr todo",
//   },
// ];
import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([{ title: "hello world" }]);
  const [inputVal, setInputVal] = useState("");

  const handleAddTodo = () => {
    if (inputVal.trim() === "") {
      return;
    }

    const todoObj = {
      title: inputVal,
    };

    setTodos((prevTodos) => [...prevTodos, todoObj]);
    // setTodos([todoObj]);
  };

  // object index
  // filter ---> new array
  const handleRemove = (index) => {
    const newTodos = todos.filter((todo, i) => {
      return i !== index;
    });

    setTodos(newTodos);

    // [0, 1, 2, 3, 4]
    // object number 3 --> index 2
    // filter --> index=2 !== i
    // 0(i) !== 2(index) ==> [0]
    // 1 !== 2 ==> [0, 1]
    // 2 !== 2 ==> [0, 1]
    // 3 !== 2....

    // [0,1,3,4]
  };

  return (
    <div className="todoList">
      <div className="todoHeader">
        <input
          type="text"
          placeholder="Title"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>

      {/* Items */}
      {todos.map((todo, i) => {
        return (
          <div className="item" key={i}>
            <h1>{todo.title}</h1>
            <span onClick={() => handleRemove(i)}>X</span>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
