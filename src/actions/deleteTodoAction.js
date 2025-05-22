import { deleteTodo } from 'utils/api';

export const deleteTodoAction = (id) => (dispatch, getState) => {
  const { todos } = getState();

  deleteTodo(id)
    .then(() => todos.filter((todo) => todo.id !== id))
    .then((result) => {
      dispatch({ type: 'DELETE_TODO', payload: { todos: result } });
    })
    .catch((error) => console.log(error));
};
