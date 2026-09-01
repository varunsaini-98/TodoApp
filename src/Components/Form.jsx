import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!todo.trim()) return; // ignore empty todos

    // ✅ Create todo as an object with id, text, completed
    const newTodo = {
      id: Date.now(), // unique ID
      text: todo.trim(), // todo text
      completed: false, // not completed initially
    };

    setTodos([...todos, newTodo]);
    setTodo(""); // clear input
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          type="text"
          placeholder="Enter todo items"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
