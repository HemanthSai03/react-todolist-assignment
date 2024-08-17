import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions';
import TaskItem from './TaskItem'; // Import TaskItem

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
    <div>
      <div>
        <button onClick={() => dispatch(setFilter('ALL'))}>All Tasks</button>
        <button onClick={() => dispatch(setFilter('COMPLETED'))}>Completed Tasks</button>
        <button onClick={() => dispatch(setFilter('INCOMPLETE'))}>Incomplete Tasks</button>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
