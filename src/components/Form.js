import React from "react";

function Form({ setInputText, todos, setTodos, inputText, setStatus }) {
  //************************* EVENTS ***********************/

  //input text handler
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  //submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // Checks for empty input
    if (!inputText || /^\s*$/.test(inputText)) return;

    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.floor(Math.random() * 1000),
      },
    ]);

    setInputText("");
  };

  // Status handler
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  // ******************************************************
  return (
    <div className={"main-div"}>
      <form>
        <div className="input-select">
          <input
            value={inputText}
            onChange={inputTextHandler}
            type="text"
            className="todo-input"
          />
          <button onClick={submitHandler} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
          </button>
        </div>

        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Form;
