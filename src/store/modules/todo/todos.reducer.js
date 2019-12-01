import { TODO_ADD,TODO_COMPLETED,TODO_REMOVE,TODO_UNCOMPLETED,TODO_COUNTER,} from './todos.const';

import { list } from '../../../utils/mock-data';

const initialState = {
    counter: 1,
    todos: list,
};

/**
 * @param {any} action
 * @param {string} action.type
 * @param {any} action.payload
 */
const todosReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case TODO_ADD:
            return {
                ...prevState,
                // une a los todos actuales el nuevo todo y retorna la nueva lista
                //todos: state.todos.concat([action.payload]),
            };
        case TODO_COMPLETED:
            return {
                ...prevState,
                // une a los todos actuales el nuevo todo y retorna la nueva lista
                //todos: state.todos.concat([action.payload]),
            };
        case TODO_REMOVE:
            return {
                ...prevState,
                // une a los todos actuales el nuevo todo y retorna la nueva lista
                //todos: state.todos.concat([action.payload]),
            };
        case TODO_UNCOMPLETED:
            return {
                ...prevState,
                // une a los todos actuales el nuevo todo y retorna la nueva lista
                //todos: state.todos.concat([action.payload]),
            };
        case TODO_COUNTER:
            return {
                ...prevState,
                // une a los todos actuales el nuevo todo y retorna la nueva lista
                //todos: state.todos.concat([action.payload]),
            };
        default:
            return prevState;
    }
};

export default todosReducer;