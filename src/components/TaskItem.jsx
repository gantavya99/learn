import React from "react";
import {useDispatch,useSelector} from 'react-redux';
import { toggleTask,deleteTask } from "../store/todoSlice";
/* eslint-disable react/prop-types */
const TaskItem = ({ task }) => {
    const dispatch = useDispatch();
    const handleToggle = () => {
      dispatch(toggleTask(task.id));
    };
    const handleDelete = () => {
      dispatch(deleteTask(task.id));
    };
  
    return (
      <div className="flex justify-between items-center py-2 px-4 border-b border-gray-200">
        <div>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleToggle}
            className="mr-2"
          />
          <span className={task.completed ? "line-through text-gray-400" : ""}>
            {task.text}
          </span>
        </div>
        <button onClick={handleDelete} className="text-red-500 font-semibold">
          Delete
        </button>
      </div>
    );
  };

  export default TaskItem