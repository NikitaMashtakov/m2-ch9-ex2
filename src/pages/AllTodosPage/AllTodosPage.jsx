import { TodoList } from 'components/TodoList/TodoList';
import { NewTodoInput } from 'components/NewTodoInput/NewTodoInput';
import { Toolbar } from 'components/Toolbar/Toolbar';
import { useState, useEffect } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { Selector } from 'components/Selector/Selector';
import { OPTIONS } from 'constants/sortingOptions';
import useDebouncedValue from 'hooks/useDebouncedValue';
import { useDispatch, useSelector } from 'react-redux';
import { getTodosAction } from 'actions/getTodosAction';

const AllTodoPage = () => {
  // const [todos, setTodos] = useState([]);
  // const [search, setSearch] = useState('');
  // const [selectedSort, setSelectedSort] = useState('_sort=id&_order=desc');
  // const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const selectedSort = useSelector((state) => state.selectedSort);
  // const debouncedSearch = useDebouncedValue(search, 250);

  useEffect(() => {
    dispatch(getTodosAction(selectedSort));
  }, [dispatch, selectedSort]);

  const selectorHandler = (value) => {
    dispatch({ type: 'SET_SORT', payload: value });
  };

  // const dispatch = (action) => {
  //   todoReducer(todos, action).then((newTodos) => setTodos(newTodos));
  // };

  return (
    <>
      <Toolbar>
        <SearchBar />
        <Selector
          label={'Сортировка'}
          selectorId={'sortingSelector'}
          options={OPTIONS}
          onSetSelected={selectorHandler}
        />
      </Toolbar>

      <NewTodoInput placeholder="Новая задача..." buttonName="Добавить" />

      <TodoList />
    </>
  );
};

export default AllTodoPage;
