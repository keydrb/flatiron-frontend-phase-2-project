import React, { useState } from 'react';
import axios from 'axios';
import './App.css'

const AddTask = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Post new task to json-server
    axios.post('http://localhost:3001/tasks', { title })
      .then(response => {
        console.log('Success:', response.data);
        // Update state with the new task
        onTaskAdded(response.data);
        // Clear the form
        setTitle('');
      })
      .catch(error => console.error('Error adding task:', error));
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <br />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
