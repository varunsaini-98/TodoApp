import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  // Count completed todos
  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div style={{ width: "400px", margin: "0 auto" }}>
      {/* Display counts */}
      <div style={{ marginBottom: "10px", marginTop: "10px" }}>
        Completed: {completedCount} / Total: {totalCount}
      </div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
