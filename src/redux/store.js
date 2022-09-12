import { legacy_createStore as createStore } from 'redux';

const initialState = {
    todo: [],
    todoALL: [],
    todoActive: [],
    todoCompleted: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
            ...state,
            todo: [...state.todo, action.str],
        };
        case 'REMOVE_TODO': return {
            ...state,
            todo: state.todo.filter((item, index) => index !== action.index),
        };
        case 'CHECK_TODO':
            let completedItems = [];
            state.todo.forEach((item, index) => {
                if (action.index === index) {
                    item[1] === true ? item[1] = false : item[1] = true;
                }
                completedItems.push(item);
            });
            return {
          ...state,
            todo: completedItems
        };


        case 'CLEAR_COMPLETED':
            return {
                ...state,
                todo: state.todo.filter(item => item[1] === action.check)
            }

        // case "SHOW_ALL":
        //     return {
        //         ...state,
        //         todo: state.todoALL
        //     }
        //
        // case "SHOW_ACTIVE":
        //     return {
        //         ...state,
        //         todo: state.todoActive
        //     }
        // case "SHOW_COMPLETED":
        //     return {
        //         ...state,
        //         todo: state.todoCompleted
        //     }
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;