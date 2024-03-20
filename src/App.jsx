
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  setFilter,
} from "./store/todoSlice";
import TodoList from "./components/TodoList";


const App = () => {
  const dispatch = useDispatch();
  const [text, setText] = React.useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") 
    alert("Task cannot be blank");
    dispatch(addTask(text));
    setText("");
  };

  return (
    <div className="w-1/2 rounded-md  mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Todo App</h1>
      
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Enter task"
          className="border border-gray-300 px-4 py-2 w-64"
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Task
        </button>
      </form>
      <div className="mt-4">
        <button onClick={() => dispatch(setFilter("all"))} className="mr-2 px-4 border border-gray-500 rounded-md">
          All
        </button>
        <button onClick={() => dispatch(setFilter("active"))} className="mr-2 px-4 border border-gray-500 rounded-md">
          Active
        </button>
        <button onClick={() => dispatch(setFilter("completed"))} className="px-4 border border-gray-500 rounded-md mr-2">
          Completed
        </button>
      </div>
      <TodoList />
    </div>
  );
};

export default App;
