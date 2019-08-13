export const initialState = {
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
};

export const newReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_DONE':
      return {
        ...state,
        completed: !state.completed
      };
    case 'UPDATE_ITEM':
      return {
        ...state,
        item: action.payload,
        completed: !state.completed
      }
    default:
      return state;
  }
}
