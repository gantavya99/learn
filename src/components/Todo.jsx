import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, editTodo } from '../store/todoSlice';

const Todo = () => {
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();
  const [editedText, setEditedText] = useState(""); // State to hold edited text
  const [editModeId, setEditModeId] = useState(null); // State to hold the id of todo in edit mode

  const handleEdit = (id, text) => {
    // Dispatch the editTodo action with the todo id and the new text
    dispatch(editTodo({ id: id, text: editedText }));
    // Clear the edited text and exit edit mode
    setEditedText("");
    setEditModeId(null);
  };

  const toggleEditMode = (id, text) => {
    if (editModeId === id) {
      // If this todo is already in edit mode, save the changes
      handleEdit(id, text);
    } else {
      // Enter edit mode for this todo
      setEditedText(text);
      setEditModeId(id);
    }
  };

  return (
    <div className="mt-4">
      <ul style={{ listStyleType: "disc" }}>
        {todos && todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" className="ml-2 mr-1" />
            {editModeId === todo.id ? (
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                style={{ display: "inline-block", marginRight: "10px" }}
              />
            ) : (
              <span>{todo.text}</span>
            )}
            <div>
              <button
                onClick={() => toggleEditMode(todo.id, todo.text)}
                className="border border-gray-300 m-2 p-1 rounded-md"
              >
                {editModeId === todo.id ? "Save" : "Edit"}
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="border border-gray-300 m-2 p-1 rounded-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
