import React, { Component } from 'react';
import { connect } from 'react-redux'; // Importing connect from react-redux

import TaskItem from './TaskItem';

class TodoList extends Component {
  render() {
    const { tasks, filter } = this.props; // Destructuring tasks and filter from props
    let filteredTasks;

    // Filtering tasks based on the filter value
    if (filter === "all") {
      filteredTasks = tasks;
    } else if (filter === "active") {
      filteredTasks = tasks.filter((task) => !task.completed);
    } else {
      filteredTasks = tasks.filter((task) => task.completed);
    }

    return (
      <div className="mt-4">
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    );
  }
}

// Mapping state to props
const mapStateToProps = (state) => ({
  tasks: state.todo.tasks,
  filter: state.todo.filter
});

// Connecting TodoList component to Redux store
export default connect(mapStateToProps)(TodoList);
