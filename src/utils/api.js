const baseUrl = 'http://localhost:3000/todos';

export const getTodos = () => (dispatch, getState) => {
  const { selectedSort } = getState();
  fetch(`${baseUrl}?${selectedSort}`)
    .then((response) => response.json())
    .then((loadedTodos) => {
      dispatch({ type: 'GET_TODOS', payload: { todos: [...loadedTodos] } });
    })
    .catch((error) => console.log(error));
};

// export const getTodoById = (id) => {
//   return fetch(`${baseUrl}/${id}`)
//     .then((response) => response.json())
//     .catch((error) => console.log(error));
// };

export const completeTodo = (id, completed) => (dispatch, getState) => {
  const { todos } = getState();
  fetch(`${baseUrl}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      completed: !completed,
    }),
  })
    .then((response) => response.json())
    .then((updatedTodo) => todos.map((todo) => (todo.id === id ? updatedTodo : todo)))
    .then((result) => {
      dispatch({ type: 'COMPLETE_TODO', payload: { todos: result } });
    })
    .catch((error) => console.log(error));
};

export const addTodo = (text) => (dispatch) => {
  fetch(`${baseUrl}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      title: text,
      completed: false,
    }),
  })
    .then((response) => response.json())
    .then((newTodo) => {
      dispatch({ type: 'ADD_TODO', payload: newTodo });
    })
    .catch((error) => console.log(error));
};

export const deleteTodo = (id) => (dispatch, getState) => {
  const { todos } = getState();

  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  })
    .then(() => todos.filter((todo) => todo.id !== id))
    .then((result) => {
      dispatch({ type: 'DELETE_TODO', payload: { todos: result } });
    })

    .catch((error) => console.log(error));
};

export const editTodo = (id, text) => (dispatch, getState) => {
  const { todos } = getState();

  fetch(`${baseUrl}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      title: text,
    }),
  })
    .then((response) => response.json())
    .then((updatedTodo) => todos.map((todo) => (todo.id === id ? updatedTodo : todo)))
    .then((result) => {
      dispatch({ type: 'EDIT_TODO', payload: { todos: result } });
    })
    .catch((error) => console.log(error));
};
