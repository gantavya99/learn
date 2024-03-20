import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTask, deleteTask, editTask } from "../store/todoSlice";
/* eslint-disable react/prop-types */
const TaskItem = ({ task }) => {
  const [edit, setEdit] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };
  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };
  const handleEdit = () => {
    if (edit && editedText.trim() !== "") {
      dispatch(editTask({ id: task.id, text: editedText }));
    }
    setEdit(!edit);
    setEditedText(task.text);
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
        {edit ? (
          <input
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className={
              task.completed
                ? "line-through text-gray-400 border border-gray-400"
                : "border border-gray-400"
            }
          />
        ) : (
          <span className={task.completed ? "line-through text-gray-400" : ""}>
            {task.text}
          </span>
        )}
      </div>
      <div>
        <button
          onClick={handleEdit}
          className="text-blue-500 font-semibold mx-4"
        >
          {edit ? "Save" : "Edit"}
        </button>
        <button onClick={handleDelete} className="text-red-500 font-semibold">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
