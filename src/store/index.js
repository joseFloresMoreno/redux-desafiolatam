import { createStore, combineReducers, applyMiddleware } from 'redux';
import todoReducer from './modules/todo';
import logger from 'redux-logger';

const rootReducer = combineReducers({
    todoModule: todoReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;