import React, { FC, useContext } from 'react';
import './index.css';
import { drinksContext } from '../../store/context';

export interface IDrinkOptions {
  options: IProps;
}

export interface IProps {
  id: number;
  title: string;
  sizes: ISizes[];
  roast: string[];
  sweets: ISweets[];
  imgUrl: string;
  serving: string[];
  onConfirm?: (e: React.MouseEvent<HTMLElement>) => void;
  onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface ISizes {
  size: string;
  price: number;
}

export interface ISweets {
  sweet: string;
  price: number;
}

const OrderModal: FC<IDrinkOptions> = ({
  options: { id, title, sizes, roast, sweets, imgUrl, serving },
}): JSX.Element => {
  return (
    <div className='card'>
      <div className='photo'>
        <img className='order-img' src={imgUrl} alt={'espresso'} />
      </div>
      <div className='options'>
        <h2>{title}</h2>
        <div className='option'>
          <h4>Выберите размер:</h4>
          <ul className='option'>
            {sizes.map((el, index) => (
              <li key={index}>{el.size}</li>
            ))}
          </ul>
        </div>
        <div className='option'>
          <h4>Выберите обжарку:</h4>
          <ul className='option'>
            {roast.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
        </div>
        <div className='option'>
          <h4>Что-нибудь еще?</h4>
          <ul className='option'>
            {sweets.map((el, index) => (
              <li key={index}>{el.sweet}</li>
            ))}
          </ul>
        </div>
        <div className='option'>
          <h4>Выберите сервировку:</h4>
          <ul className='option'>
            {roast.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
        </div>
        <div className='button-block'>
          <button className='confirm-button'>Заказать</button>
          <button className='cancel-button'>Отмена</button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
