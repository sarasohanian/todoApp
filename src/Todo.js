import React, { useContext } from 'react';

import { TodoContext } from './context/index';

const Todo = () => {
  const todoContext = useContext(TodoContext);

  const { index, todo, completeTodos, deleteTodos } = todoContext;

  return (
    <div className="todo-box">
      <span
        style={todo.isCompleted ? { textDecorationLine: 'line-through' } : null}
      >
        {todo.text}
      </span>
      <button className="completed" onClick={() => completeTodos(index)}>
        completed
      </button>
      <button className="delete" onClick={() => deleteTodos(index)}>
        &times;
      </button>
    </div>
  );
};

export default Todo;
