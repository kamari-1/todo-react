import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
// import TodoList from "./components/TodoList";

function App() {
  // *************** STATES ********************** /
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // *************** USE EFFECTS ********************** /
  //Run once
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // *************** FUNCTIONS ******************* /
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((elem) => elem.completed));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((elem) => !elem.completed));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // ****************** SAVE TO LOCAL ***********************
  const saveLocalTodos = () =>
    localStorage.setItem("todos", JSON.stringify(todos));

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  // ********************************************************
  return (
    <div className="App">
      <header>
        <h1>Clement's Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
        // filterHandler={filterHandler}
      />
      <TodoList
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
