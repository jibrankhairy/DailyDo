import Header from "./components/Header";
import TodoList from "./components/TodoList";
import useTodo from "./hooks/useTodo";
import Footer from "./components/Footer";

function App() {
  const {
    todos,
    newTodo,
    setNewTodo,
    newDate,
    setNewDate,
    addTodo,
    toggleTodo,
    removeTodo,
    setTodos,
  } = useTodo();

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col gap-2 mb-6">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new task..."
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={addTodo}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Add
            </button>
          </div>
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
            setTodos={setTodos}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
