// import { completeTodo, addTodo, deleteTodo, editTodo } from 'utils/api';

const initialState = {
  isLoading: false,
  todos: [],
  search: '',
  selectedSort: '_sort=id&_order=desc',
};

export const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_TODOS':
      console.log('get');
      return { ...state, todos: payload.todos };

    case 'ADD_TODO':
      console.log('add');
      return { ...state, todos: [payload, ...state.todos] };

    case 'COMPLETE_TODO':
      console.log('complete');
      return { ...state, todos: [...payload.todos] };

    case 'EDIT_TODO':
      console.log('edit');
      return { ...state, todos: [...payload.todos] };

    case 'DELETE_TODO':
      console.log('delete');
      return { ...state, todos: [...payload.todos] };

    default:
      return state;
  }
};
