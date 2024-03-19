import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    todos: [{ id: 1, text: "Hello World"}]
}
export const todoSlice = createSlice({ 
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state, action) {
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            if(action.payload)
            state.todos.push(todo);
            else
            alert("Task cannot be blank!")
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter((item) => item.id !== action.payload); 
        },
        editTodo(state, action) {
            const { id, text } = action.payload;
            const todoIndex = state.todos.findIndex(todo => todo.id === id);
            
            if (todoIndex !== -1) {
                state.todos[todoIndex].text = text;
            } else {
                console.error(`Todo with id ${id} not found`);
            }
        }
    }
});
export const { addTodo, removeTodo,editTodo } = todoSlice.actions;
export default todoSlice.reducer;



