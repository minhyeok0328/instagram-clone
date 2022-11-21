import { ActionType } from '../action-types';
import { Action } from '../actions';

const resize = 0;

const reducer = (state: number = resize, action: Action) => {
  switch (action.type) {
    case ActionType.Resize:
      return chksizing(action.payload);
    default:
      return state;
  }
};

function chksizing(state: number) {
  console.log(state);
  if (state < window.innerWidth) {
    return window.innerHeight;
  }
  if (state > window.innerWidth) {
    return window.innerWidth - 128 - 450;
  }
}

export default reducer;
