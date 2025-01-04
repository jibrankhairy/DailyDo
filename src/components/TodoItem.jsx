const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <li className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex-1">
        <span
          className={`block text-lg ${
            todo.completed ? "line-through text-gray-400" : "text-gray-700"
          }`}
        >
          {todo.text}
        </span>
        <span className="text-sm text-gray-500">{todo.date}</span>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => toggleTodo(todo.id)}
          className={`px-4 py-2 rounded-lg text-sm font-semibold ${
            todo.completed
              ? "bg-green-500 hover:bg-green-600"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white transition-colors duration-200`}
        >
          {todo.completed ? "Undo" : "Done"}
        </button>
        <button
          onClick={() => removeTodo(todo.id)}
          className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-sm font-semibold text-white transition-colors duration-200"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
