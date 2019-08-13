import React, { useState, useReducer } from 'react';

// reducers
import { initialState, newReducer } from '../reducers/newReducer';

const NewComponent = () => {
  const [newTodo, setNewTodo] = useState('');

  const [state, dispatch] = useReducer(initialState, newReducer);

  const handleChanges = event => {
    setNewTodo(event.target.value);
  };

  return (
    <div>
      {!state.completed ? (
        <p>
          {state.item}{" "}
          create a todo! </p>
      ) : (

      )}
    </div>
  )
}
