import { Dispatch } from 'react';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const Resize = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.Resize,
      payload: amount,
    });
  };
};
