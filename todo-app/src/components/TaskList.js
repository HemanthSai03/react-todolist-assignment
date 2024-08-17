// src/components/TaskList.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions';
import TaskItem from './TaskItem';
import '../styles.css';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'ALL') return true;
    if (filter === 'COMPLETED') return task.completed;
    if (filter === 'INCOMPLETE') return !task.completed;
    return true;
  });

  return (
    <div className="task-list-container">
      <div className="filter-dropdown">
        <label htmlFor="task-filter">Filter Tasks:</label>
        <select
          id="task-filter"
          value={filter}
          onChange={(e) => dispatch(setFilter(e.target.value))}
        >
          <option value="ALL">All Tasks</option>
          <option value="COMPLETED">Completed Tasks</option>
          <option value="INCOMPLETE">Incomplete Tasks</option>
        </select>
      </div>
      <ul className="task-list">
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
