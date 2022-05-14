import "./App.css";
import { useState, useEffect } from "react";
import Todos from "./components/Todos.js";
import axios from "axios";

const url = "http://localhost:3001";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [btn, setBtn] = useState("Add");
  const [updateId, setUpdateId] = useState();

  useEffect(() => getTodos(), []);

  const getTodos = () =>
    axios
      .get(url)
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));

  const createTodo = () =>
    axios
      .post(url + "/createTodo", { text })
      .then((res) => {
        setTodos([...todos, res.data]);
        setText("");
      })
      .catch((err) => console.log(err));

  const changeTodo = (id, todo) => {
    setText(todo);
    setBtn("Update");
    setUpdateId(id);
  };

  const updateTodo = () => {
    axios
      .put(url + "/" + updateId, { text })
      .then((res) => {
        console.log(res.data);
        setTodos((todos) =>
          todos.map((todo) => (todo._id !== updateId ? todo : res.data))
        );
        setBtn("Add");
        setText("");
      })
      .catch((err) => console.log(err));
  };

  const deleteTodo = (id) =>
    axios
      .delete(url + "/" + id)
      .then((res) => {
        setTodos((todos) => todos.filter((todo) => todo._id !== id));
      })
      .catch((err) => console.log(err));

  return (
    <div className="App">
      <div className="container">
        <h1>TODOS</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Create Todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
          <button
            className="btn"
            onClick={() => (btn === "Add" ? createTodo() : updateTodo())}
          >
            {btn}
          </button>
        </div>
        <div>
          {todos.map((todo) => (
            <Todos
              key={todo._id}
              text={todo.text}
              remove={() => deleteTodo(todo._id)}
              update={() => changeTodo(todo._id, todo.text)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
