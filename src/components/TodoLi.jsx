import React from "react";
import Todo from "./Todo";

function TodoLi({ todos }) {
  return (
    <div className="todoList">
      <ul>
        {todos.map((todo) => (
          <Todo value={todo.text} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}
export default TodoLi;
