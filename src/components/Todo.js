import React from "react";

function Todo({ text, todo, todos, setTodos }) {
  //********************* EVENTS ********************************

  // Delete handler
  const deleteHandler = () => {
    setTodos(todos.filter((elem) => elem.id !== todo.id));
  };

  // Complete handler
  const completeHandler = () => {
    setTodos(
      todos.map((elem) => {
        if (elem.id === todo.id) {
          return { ...elem, completed: !elem.completed };
        }
        return elem;
      })
    );
  };

  //*************************************************************/
  return (
    <div className={"todo"}>
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <li className="fas fa-check"></li>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <li className="fas fa-trash"></li>
      </button>
    </div>
  );
}

export default Todo;
