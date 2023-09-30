import {createSlice} from '@reduxjs/toolkit';
import { TODOS_STATUS } from '../../constant/TodosStatus';

export const todoSlice = createSlice({
    name: 'todos',
    initialState:[
        {id:1, title:'todo1', description:"test description for TODO-1", status:TODOS_STATUS.TODO},
        {id:2, title:'todo12', description:"test description for TODO-21", status:TODOS_STATUS.TODO},
    ],
    reducers: {
		addTodo: (state, action) => {
			const todo = {
				id: new Date(),
				title: action.payload.title,
                description: action.payload.description,
				status:TODOS_STATUS.TODO
			};
			state.push(todo);
		},

	},
});


export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;