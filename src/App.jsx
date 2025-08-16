import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  // Used deployed backend URL
  const BASE_URL = "https://full-stack-to-do-app-3ni2.onrender.com/api/todos";

  // Fetch to-dos on page load
  useEffect(() => {
    axios
      .get(BASE_URL)
      .then(res => setTodos(res.data))
      .catch(err => console.error(err));
  }, []);

  // Add a new to-do
  const handleAdd = text => {
    axios
      .post(BASE_URL, { text })
      .then(res => setTodos([...todos, res.data]))
      .catch(err => console.error(err));
  };

  // Toggle to-do completion
  const handleToggle = (id, completed) => {
    axios
      .put(`${BASE_URL}/${id}`, { completed })
      .then(res =>
        setTodos(todos.map(t => (t.id === id ? res.data : t)))
      )
      .catch(err => console.error(err));
  };

  // Delete a to-do
  const handleDelete = id => {
    axios
      .delete(`${BASE_URL}/${id}`)
      .then(() => setTodos(todos.filter(t => t.id !== id)))
      .catch(err => console.error(err));
  };

  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <AddTodo onAdd={handleAdd} />
      <TodoList
        todos={todos}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
