
import React, { useState } from 'react';

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;      // Prevent empty todos
    onAdd(text);                   // Tell App to POST
    setText('');                   // Clear input
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter a new to-do"
        style={{ padding: '8px', width: '70%' }}
      />
      <button type="submit" style={{ padding: '8px 12px', marginLeft: 8 }}>
        Add
      </button>
    </form>
  );
}
