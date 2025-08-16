
import React from 'react';

export default function TodoItem({ todo, onToggle, onDelete }) {
  const { id, text, completed } = todo;

  return (
    <div
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: 8,
        textDecoration: completed ? 'line-through' : 'none',
        opacity: completed ? 0.6 : 1
      }}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={e => onToggle(id, e.target.checked)}
      />
      <span style={{ flexGrow: 1, marginLeft: 8 }}>{text}</span>
      <button onClick={() => onDelete(id)} style={{ marginLeft: 8 }}>
        Delete
      </button>
    </div>
  );
}
