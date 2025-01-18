import { useState } from "react";
// Import the TodoProvider from your context directory
import { TodoProvider } from "./context/TodoContext";
// Import the TodoList component
import TodoList from "./components/TodoList";

function App() {
  const [newTodo, setNewTodo] = useState("");

  return (
    <TodoProvider>
      <div className="App">
        <h1>Todo App</h1>

        {/* Input for adding a new todo */}
        <div>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo"
          />
          {/* 
            The Add button functionality has been moved to the TodoList via context.
            It is better to manage todos there for a cleaner separation of concerns.
          */}
        </div>

        {/* Render the TodoList component */}
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
