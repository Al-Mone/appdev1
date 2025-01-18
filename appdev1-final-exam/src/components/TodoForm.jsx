import PropTypes from "prop-types"; // Import PropTypes

const TodoForm = ({ addTodo, newTodo, setNewTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo({ title: newTodo });
      setNewTodo(""); // Clear input after adding todo
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
        style={{ marginRight: "10px" }}
      />
      <button type="submit">Add</button>
    </form>
  );
};

// Define prop types
TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired, // Function to add a todo
  newTodo: PropTypes.string.isRequired, // The new todo input value
  setNewTodo: PropTypes.func.isRequired, // Function to update the newTodo state
};

export default TodoForm;
