import React from "react";
import { ITodo } from "../interface";

interface Props {
  todo: ITodo;
  doneTodo(taskNameTodoDelete: string): void;
}

const TodoList = ({ todo, doneTodo }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{todo.taskName}</span>
        <span>{todo.deadLine}</span>
      </div>
      <button
        onClick={() => {
          doneTodo(todo.taskName);
        }}
      >
        완료
      </button>
    </div>
  );
};

export default TodoList;
