import { useState } from "react";
// Import TodoForm component
import TodoForm from "./TodoForm";

import { useTodos } from "../context/TodoContext";

const TodoList = () => {
  const { todos, loading, toggleComplete, deleteTodo, addTodo } = useTodos();
  const [newTodo, setNewTodo] = useState("");

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {/* Render TodoForm with the required props */}
      <TodoForm
        addTodo={addTodo}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
      />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: "10px" }}>
            {/* Conditional styling for completed todos */}
            <span
              onClick={() => toggleComplete(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              {todo.title}
            </span>

            {/* Delete button to remove a todo */}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;