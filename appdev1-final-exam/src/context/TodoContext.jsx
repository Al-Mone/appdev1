import { createContext, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes

// Create the context
const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      const data = await response.json();
      setTodos(data);
      setLoading(false);
    };
    fetchTodos();
  }, []);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, { ...todo, id: Date.now(), completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoContext.Provider value={{ todos, loading, addTodo, deleteTodo, toggleComplete }}>
      {children}
    </TodoContext.Provider>
  );
};

// Define prop types
TodoProvider.propTypes = {
  children: PropTypes.node.isRequired, // `children` should be a React node
};

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodoProvider");
  }
  return context;
};

export default TodoContext;