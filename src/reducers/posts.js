import { INCREMENT_LIKE } from '../actions/index';

function posts(state = [], action) {
  const i = action.index;
  switch(action.type) {
  case INCREMENT_LIKE:
    return [
      ...state.slice(0, i),
      {...state[i], likes: state[i].likes + 1},
      ...state.slice(i + 1)
    ];
  default:
    return state;
  }
}

export default posts;
