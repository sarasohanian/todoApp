import React, { useState, useEffect } from 'react';

import './App.css';

import Todoinput from './Todoinput';
import Todo from './Todo';

import { TodoContext, TodoInputContext } from './context/index';

const App = () => {
  const initialTodos = window.localStorage.getItem('todos')
    ? JSON.parse(window.localStorage.getItem('todos'))
    : [];

  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    const newTodos = [...todos, { text: todo, isCompleted: false }];
    setTodos(newTodos);
  };

  const deleteTodos = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const completeTodos = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>TODO APP</h1>
      <div className="todos-wrapper">
        {todos.map((todo, index) => (
          <TodoContext.Provider
            key={index}
            value={{
              index,
              todo,
              completeTodos,
              deleteTodos,
            }}
          >
            <Todo />
          </TodoContext.Provider>
        ))}
      </div>
      <TodoInputContext.Provider
        value={{
          addTodo,
        }}
      >
        <Todoinput />
      </TodoInputContext.Provider>
    </div>
  );
};

export default App;
