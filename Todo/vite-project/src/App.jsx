import "./App.css";
import TodoList from "./TodoList";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TodoList />
    </>
  );
}

export default App;

