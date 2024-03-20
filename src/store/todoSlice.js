// redux/todoSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    tasks: [],
    filter: 'all',
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: nanoid(),
        text: action.payload,
        completed: false,
      });
    },
    editTask: (state, action) => {
      const { id, text } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.text = text;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, editTask, deleteTask, toggleTask, setFilter } = todoSlice.actions;

export default todoSlice.reducer;
