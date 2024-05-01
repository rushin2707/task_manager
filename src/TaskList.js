import React, { useState } from 'react';
import Task from './Task';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');

  const onToggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? {...task, isComplete: !task.isComplete} : task
    ));
  };
  
  const onDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const addTask = () => {
    if (newTaskName.trim() !== '') {
      const newTask = {
        id: tasks.length + 1,
        name: newTaskName,
        isComplete: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskName(''); 
    }
  };

  const handleInputChange = (event) => {
    setNewTaskName(event.target.value);
  };

  const incompleteCount = tasks.filter(task => !task.isComplete).length;

  return (
    <div>
      <h1>Pending tasks ({incompleteCount})</h1>
      {tasks.map(task => (
        <Task key={task.id} task={task} onToggleComplete={onToggleComplete} onDelete={onDelete} />
      ))}
      <input
        type="text"
        value={newTaskName}
        onChange={handleInputChange}
        placeholder="Enter new task"
      />
      <button onClick={addTask}>Add a new task</button>
    </div>
  );
}

export default TaskList;
