import React, { ChangeEvent, useState } from "react";
import { ITodo } from "./interface";
import "./App.css";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadLine, setDeadLine] = useState<number>(0);
  const [todo, setTodo] = useState<ITodo[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else {
      setDeadLine(Number(e.target.value));
    }
  };

  const addTask = () => {
    const newTodo = {
      taskName: task,
      deadLine,
    };
    setTodo([...todo, newTodo]);
    // 초기화
    setTask("");
    setDeadLine(0);
  };

  const doneTodo = (taskNameTodoDelete: string): void => {
    setTodo(
      todo.filter((t) => {
        return t.taskName !== taskNameTodoDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            name="todo"
            placeholder="일정 추가!"
            value={task}
            onChange={handleChange}
          />
          <input
            type="text"
            name="deadline"
            placeholder="며칠동안 할건가요?"
            value={deadLine}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>추가</button>
      </div>
      <div className="todoList">
        {todo.map((todo: ITodo, key: number) => {
          return (
            <TodoList key={key} todo={todo} doneTodo={doneTodo}></TodoList>
          );
        })}
      </div>
    </div>
  );
};

export default App;
