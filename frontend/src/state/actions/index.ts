import { ActionType } from '../action-types/index';
interface Resize {
  type: ActionType.Resize;
  payload: number;
}

export type Action = Resize;
