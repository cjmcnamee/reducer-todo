import React, { useState, useReducer } from 'react';

// reducers
import { initialState, newReducer } from '../reducers/newReducer';

const NewComponent = () => {
  const [newTodo, setNewTodo] = useState();

  const [state, dispatch] = useReducer(newReducer, initialState);

  const handleChanges = event => {
    setNewTodo(event.target.value);
  };

  return (
    <div>
      {!state.completed ? (
        <p>
          {state.item}{" "}
          <button
            className="todo-edit"
            onClick={() => dispatch({ type: "TOGGLE_DONE" })}
          >
          Edit Todo
          </button>
        </p>
      ) : (
        <div>
          <input
            className="todo-input"
            type="text"
            name="newTodo"
            value={newTodo}
            onchange={handleChanges}
          />
          <button
            onClick={() =>
              dispatch({ type: "UPDATE_ITEM", payload: newTodo })
            }
          >
            Update Todo
          </button>
        </div>
      )}
    </div>
  );
};

export default NewComponent;
