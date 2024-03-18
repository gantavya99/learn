import "./App.css";
import AddTask from "./components/AddTask";
import FilterButtons from "./components/FilterButtons";
import Todo from "./components/Todo";
function App() {
  return <div className="flex flex-col justify-center items-center">
  <h1 className="text-4xl">
    TodoMatic
  </h1>
  <h2 className="text-3xl">
    What needs to be done?
  </h2>
  <AddTask />
  <FilterButtons />
  <h2 className="text-3xl">
    3 Tasks remaining
  </h2>
  <Todo />
  </div>;
}

export default App;
//
// Create a Todo app using React.js. Refer to the given image in the attachment.
// You can use your own creativity for the look and feel.
// Must have the functionality to Create, Edit, and Delete Tasks and filter them by Active/Completed/All.
// Guideline:

// Must have used one functional component with Hooks and one class component with Life cycle methods.
// Must have used Redux for global state management.
// Bonus points for organized folder structure.
// Bonus points for persisting the data on reload.
// Bonus points for using Next.js.
// Bonus points for mobile responsiveness.