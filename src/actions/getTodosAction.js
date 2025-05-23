import { getTodos } from 'utils/api';

export const getTodosAction = () => (dispatch, getState) => {
  const { selectedSort } = getState();

  getTodos(selectedSort)
    .then((loadedTodos) => {
      dispatch({ type: 'UPDATE_LOADING', payload: true });
      dispatch({ type: 'GET_TODOS', payload: { todos: [...loadedTodos] } });
    })
    .then(() => {
      dispatch({ type: 'UPDATE_LOADING', payload: false });
    })
    .catch((error) => console.log(error));
};
