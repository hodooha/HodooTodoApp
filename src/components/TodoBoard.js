import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = ({ todoList, deleteTask, isCompleteTask }) => {
  return (
    <div>
      <h2>Todo List</h2>
      {todoList.length > 0 ? (
        todoList.map((i) => (
          <TodoItem
            item={i}
            deleteTask={deleteTask}
            isCompleteTask={isCompleteTask}
          ></TodoItem>
        ))
      ) : (
        <h2>There is no Item to show</h2>
      )}
    </div>
  );
};

export default TodoBoard;
