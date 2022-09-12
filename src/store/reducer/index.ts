import { ActionTypes, IAction, IOptions, ROAST } from '../../types';

export const initialOptions: IOptions = {
  size: { size: '', price: 0 },
  roast: ROAST.NORMAL,
  sweet: [{ sweet: 'Без добавок', price: 0 }],
  serving: 'В бумажный стаканчик',
  price: 0,
};

export function reducer(state: IOptions, action: IAction) {
  switch (action.type) {
    case ActionTypes.PICK_SIZE:
      return {
        ...state,
        size: action.payload,
      };
    case ActionTypes.PICK_ROAST:
      return {
        ...state,
        roast: action.payload,
      };
    case ActionTypes.PICK_SWEET:
      return {
        ...state,
        sweet: [...state.sweet, action.payload],
      };
    case ActionTypes.PICK_SERVING:
      return {
        ...state,
        serving: action.payload,
      };
    case ActionTypes.RESET:
      return initialOptions;
    default:
      return state;
  }
}
