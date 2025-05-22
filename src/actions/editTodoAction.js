import { editTodo } from 'utils/api';

export const editTodoAction = (id, text) => (dispatch, getState) => {
  const { todos } = getState();
  editTodo(id, text)
    .then((updatedTodo) => todos.map((todo) => (todo.id === id ? updatedTodo : todo)))
    .then((result) => {
      dispatch({ type: 'EDIT_TODO', payload: { todos: result } });
    })
    .catch((error) => console.log(error));
};
