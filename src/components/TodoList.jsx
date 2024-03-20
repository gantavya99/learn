import {useDispatch,useSelector} from 'react-redux';
import TaskItem from './TaskItem';
const TodoList = () => {
  const dispatch = useDispatch();
  
  const tasks = useSelector((state) => {
    if (state.todo.filter === "all") {
      return state.todo.tasks;
    } else if (state.todo.filter === "active") {
      return state.todo.tasks.filter((task) => !task.completed);
    } else {
      return state.todo.tasks.filter((task) => task.completed);
    }
  });

  return (
    <div className="mt-4">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TodoList;