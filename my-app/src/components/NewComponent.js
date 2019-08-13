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
        <>
          {state.todo.map(item => (
            <div>
              <span>{item.item}</span>
              <button
                className="todo-edit"
                onClick={() => dispatch({ type: "TOGGLE_EDIT" })}
              >
              Edit Todo
              </button>
            </div>
          ))}{" "}
        </>
      ) : (
        <div>
          <input
            className="todo-input"
            type="text"
            name="newTodo"
            value={newTodo}
            onChange={handleChanges}
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
      <button> Clear Todo </button>
    </div>
  );
};

export default NewComponent;
