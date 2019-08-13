export const initialState = {

  todo: [
    {
      item: 'Take out the trash',
      completed: false,
      id: 1
    },
    {
      item: 'Do the dishes',
      completed: false,
      id: 2
    },
    {
      item: 'Walk the dog',
      completed: false,
      id: 3
    },
  ]
};

export const newReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_EDIT':
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
