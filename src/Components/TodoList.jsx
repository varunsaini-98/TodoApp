import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function TodoList({ todos, setTodos }) {
  // Sort todos: incomplete first, completed last
  const sortedTodos = [...todos].sort((a, b) => {
    return a.completed - b.completed; // false (0) comes before true (1)
  });

  return (
    <div className={styles.list}>
      {sortedTodos.map((item) => (
        <TodoItem key={item.id} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
