import { combineReducers } from 'redux';
import todosReducer from './todos.reducer';

const todoReducerRoot = combineReducers({
    todos: todosReducer,
});

export default todoReducerRoot;