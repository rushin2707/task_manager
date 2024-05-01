import React from 'react';

function Task({ task, onToggleComplete, onDelete }) {
  return (
    <div className={`task ${task.isComplete ? 'completed' : ''}`}>
      {task.name}
      <button onClick={() => onToggleComplete(task.id)}>Complete</button>
      <button onClick={() => onDelete(task.id)}>X</button>
    </div>
  );
}

export default Task;

