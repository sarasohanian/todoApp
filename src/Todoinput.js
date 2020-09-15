import React, { useState, useContext } from 'react';

import { TodoInputContext } from './context/index';

const Todoinput = () => {
  const todoInputContext = useContext(TodoInputContext);

  const { addTodo } = todoInputContext;

  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="white some todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>add todo</button>
    </form>
  );
};

export default Todoinput;
