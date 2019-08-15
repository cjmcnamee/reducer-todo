import React, { useState, useReducer } from 'react';

// reducers
import { initialState, todoListReducer } from '../reducers/todoListReducer';

const TodoList = () => {
  const [newItemText, setNewItemText] = useState();

  const [state, dispatch] = useReducer(todoListReducer, initialState);
  console.log(state);

  const handleChanges = e => {
    setNewItemText(e.target.value);
  };

  return (
    <div>
      <h1>
        {state.todos.map(item => (
          <>
            <div key={item.id} className={ item.completed === true ? "todo-list-item-true" : null }>
              {item.item}
            </div>
            <button
              onClick={() => dispatch({ type: 'COMPLETE_ITEM', payload: item.id })}
            >Complete Item</button>
          </>
        ))}
      </h1>

      <br />

      <input
        className="item-input"
        type="text"
        name="newItemText"
        value={newItemText}
        onChange={handleChanges}
      />
      <button
        onClick={() => dispatch({ type: 'ADD_ITEM', payload: newItemText })}
      >Add Item</button>

      <br />
      <br />

      <button
        onClick={() => dispatch({ type: 'CLEAR_ITEMS' })}
      >Clear Items</button>
    </div>
  );
};

export default TodoList;
