import { getTodos } from 'utils/api';

export const getTodosAction = () => (dispatch, getState) => {
  const { selectedSort } = getState();

  getTodos(selectedSort)
    .then((loadedTodos) => {
      dispatch({ type: 'GET_TODOS', payload: { todos: [...loadedTodos] } });
    })
    .catch((error) => console.log(error));
};
