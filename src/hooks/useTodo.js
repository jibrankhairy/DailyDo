import { useState, useEffect } from "react";

const useTodo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [newDate, setNewDate] = useState("");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const addTodo = () => {
    if (newTodo.trim() !== "" && newDate.trim() !== "") {
      const newTodoItem = {
        id: Date.now(),
        text: newTodo,
        completed: false,
        date: newDate,
      };
      setTodos([...todos, newTodoItem]);
      localStorage.setItem("todos", JSON.stringify([...todos, newTodoItem]));
      setNewTodo("");
      setNewDate("");
    }
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return {
    todos,
    newTodo,
    setNewTodo,
    newDate,
    setNewDate,
    addTodo,
    toggleTodo,
    removeTodo,
  };
};

export default useTodo;
