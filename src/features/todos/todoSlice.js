import { createSlice } from '@reduxjs/toolkit';
import TodoData from '../../data/TodoData';

const initialState = {
	todos: TodoData,
};

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		remove: (state, action) => {
			const id = action.payload;
			state.todos = state.todos.filter((todo) => todo.id !== id);
		},
	},
});

export const { remove } = todoSlice.actions;
export default todoSlice.reducer;
