import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample Tasks", id: uuidv4(), mark:false }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTodo = () => {
    setTodos([...todos, { task: newTodo, id: uuidv4() }]);
    setTodos((prevTodos) => {
      console.log(prevTodos);
      return [...todos, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };

  let UpdateTodoValue = (event) => {
    //console.log(event);
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    console.log(id);
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  let upperCaseAll = () => {
    setTodos((prevTodos) => 
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let UpperCaseOne = (id) => {
    setTodos((prevTodos) => 
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } 
        else {
          return todo;
        }
      })
    );
  };

  let MarkAsDone =(id) =>{
      console.log("MARKED AS DONE")
      setTodos((prevTodos) =>
      prevTodos.map((todo)=>{
        if(todo.id == id)
        {
          return{
            ...todo,
            mark:true
          }
        }
        else{
          return todo;
        }
        
      })
      );

  }

  return (
    <div>
      <input
        placeholder="add a task"
        value={newTodo}
        onChange={UpdateTodoValue}
      />
      <br />
      <br />
      <button onClick={addNewTodo}>ADD Task</button>

      <br />
      <br />
      <hr />
      <h4>Todo List</h4>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span
              style={todo.mark ? {textDecorationLine:"line-through"}:{}}>{todo.task}</span>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              <button onClick={() => UpperCaseOne(todo.id)}>
                UpperCaseThis
              </button>
              <button onClick={() => MarkAsDone(todo.id)}>MarkAsDone</button>
            </li>
          );
        })}
      </ul>

      <button onClick={upperCaseAll}>UpperCase All</button>
    </div>
  );
}
