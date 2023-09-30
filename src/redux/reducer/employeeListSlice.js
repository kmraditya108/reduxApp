import {createSlice} from '@reduxjs/toolkit';

export const employeeSlice = createSlice({
    name: 'employees',
    initialState:[
        {id:1, name:'Aditya', position:'SE'},
        {id:2, name:'Vivek', position:'SE'},
        {id:3, name:'Aadvik', position:'ASE'},
    ],
    reducers:{
        addEmployee: (state, action) => {
            const employee = {
                id: action.payload.id,
                name: action.payload.name,
                position: action.payload.position
            }
            state.push(employee);
        },
        deleteEmployee: (state, action) => {
            return state.filter(emp => emp.id !== action.payload.id)
        }
    },
});

export const { addEmployee, deleteEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;