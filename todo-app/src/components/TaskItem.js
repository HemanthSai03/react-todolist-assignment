// src/components/TaskItem.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTask, deleteTask } from '../redux/actions';
import '../styles.css';

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleUpdateTask = () => {
    dispatch(updateTask({ ...task, title, description }));
    setIsEditing(false);
  };

  return (
    <li className="task-item">
      {isEditing ? (
        <>
          <div className="task-details">
            <label className="task-label">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className="task-label">Description:</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="edit-delete-buttons">
            <button className="save-button" onClick={handleUpdateTask}>Save</button>
            <button className="cancel-button" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </>
      ) : (
        <div className="task-row">
          <div className="task-details">
            <h2 className="task-title">{task.title}</h2>
            <p className="task-description">{task.description}</p>
          </div>
          <div className="edit-delete-buttons">
            <button className="edit-button" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="delete-button" onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
