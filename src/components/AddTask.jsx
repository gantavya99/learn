import {React,useState} from "react";
import { addTodo } from "../store/todoSlice";
import { useDispatch, useSelector } from "react-redux";

const AddTask = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const handleAdd = (e) =>{
    e.preventDefault();
    dispatch(addTodo(input));
    setInput('');
  }
 
  return (
    <div className="mt-10">
      <form onSubmit={handleAdd}>
      <input
        className="border border-gray-300 rounded-lg p-1"
        placeholder="Add a task..."
        onChange={(e)=>setInput(e.target.value)}
        value={input}
      />
      <button onClick={handleAdd} className="bg-blue-300 px-4 py-1 mx-4 rounded-md">Add</button>
      </form>
      
    </div>
  );
};
export default AddTask;
