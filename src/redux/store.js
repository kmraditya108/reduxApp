/**
 * The configure store function does all the hard work for us. 
 * It creates the store which holds our state, combines our reducers, and has some nice built in middleware that we’ll use later.
 * 
 * The configureStore function gives us back a store, which we can export (Line no : 9)
 */
import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './reducer/todoSlice';
import employeeReducer from './reducer/employeeListSlice'

export default configureStore({
    reducer:{
        todos: todoReducer,
        employees: employeeReducer,
    }
})