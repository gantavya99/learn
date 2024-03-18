import React from "react";

const Todo = () => {
  return (
    <div className="mt-4">
      <ul style={{ listStyleType: "disc" }}>
        <li>
          <input type="checkbox" className="ml-2 mr-1" />
          Eat
          <div>
            <button className="border border-gray-300 m-2 p-1 rounded-md">
              Edit Eat
            </button>
            <button className="border border-gray-300 m-2 p-1 rounded-md">
              Delete Eat
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Todo;
