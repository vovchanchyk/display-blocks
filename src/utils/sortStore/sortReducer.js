/* eslint-disable no-unused-vars */
const initialState = { inc: true, key: '' };

function sortReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { inc: true, key: action.key };
    case 'decrement':
      return { inc: false, key: action.key };
    default:
      throw new Error();
  }
}

export default sortReducer;
