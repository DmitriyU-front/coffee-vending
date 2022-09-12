import React from 'react';

export type IDrinksContext = IDrink;

export interface IDrink {
  id: number;
  title: string;
  imgUrl: string;
  description: string;
  sizes: ISizes[];
  roast: string[];
  sweets: ISweet[];
  serving: string[];
}

export interface IDrinkOptions {
  options: IProps;
}

export interface IProps extends IDrink {
  onConfirm?: (e: React.MouseEvent<HTMLElement>) => void;
  onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface ISizes {
  size: string;
  price: number;
}

export enum ROAST {
  WEAK = 'Слабая',
  NORMAL = 'Средняя',
  STRONG = 'Сильная',
}

export interface ISweet {
  sweet: string;
  price: number;
}
export type ServingType = 'В свою кружку' | 'В бумажный стаканчик';

export interface IOptions {
  size: ISizes;
  roast: ROAST;
  sweet: ISweet[];
  serving: ServingType;
  price: number;
}

export enum ActionTypes {
  PICK_SIZE = 'PICK_SIZE',
  PICK_ROAST = 'PICK_ROAST',
  PICK_SWEET = 'PICK_SWEET',
  PICK_SERVING = 'PICK_SERVING',
  RESET = 'RESET',
}

interface ISizeAction {
  type: ActionTypes.PICK_SIZE;
  payload: ISizes;
}
interface IRoastAction {
  type: ActionTypes.PICK_ROAST;
  payload: ROAST.WEAK | ROAST.NORMAL | ROAST.STRONG;
}
interface ISweetsAction {
  type: ActionTypes.PICK_SWEET;
  payload: ISweet;
}
interface IServingAction {
  type: ActionTypes.PICK_SERVING;
  payload: ServingType;
}
interface IReset {
  type: ActionTypes.RESET;
}
export type IAction =
  | ISizeAction
  | IRoastAction
  | ISweetsAction
  | IServingAction
  | IReset;
