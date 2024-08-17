// src/App.js

import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  return (
    <div>
      <h1>To-Do List</h1>
      <TaskInput />
      <br></br>
      <TaskList />
    </div>
  );
}

export default App;
