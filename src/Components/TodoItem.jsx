import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  if (!item) return null; // safety check

  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span
          onClick={() => toggleComplete(item.id)}
          style={{
            textDecoration: item.completed ? "line-through" : "none",
            color: item.completed ? "gray" : "black",
            cursor: "pointer",
          }}
        >
          {item.text}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item.id)}
            className={styles.deleteButton}
          >
            X
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
