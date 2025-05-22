import { useState } from 'react';
import styles from './NewTodoInput.module.css';
import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { addTodoAction } from 'actions/addTodoAction';

export const NewTodoInput = ({ buttonName, placeholder }) => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();
  const onButtonClick = () => {
    dispatch(addTodoAction(text));
    setText('');
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        value={text}
        placeholder={placeholder}
        onChange={({ target }) => setText(target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && text) {
            onButtonClick();
          }
        }}
      />
      <Button
        onClick={() => {
          if (text) {
            onButtonClick();
          }
        }}
        style={{ border: '1px solid #ccc' }}
      >
        {buttonName}
      </Button>
    </div>
  );
};
NewTodoInput.propTypes = {
  buttonName: PropTypes.string,
  placeholder: PropTypes.string,
  inputHandler: PropTypes.func,
};
