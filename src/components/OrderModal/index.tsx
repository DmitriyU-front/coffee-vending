import React, { FC, useReducer } from 'react';
import './index.css';
import {
  ActionTypes,
  IDrinkOptions,
  ISizes,
  ISweet,
  ROAST,
  ServingType,
} from '../../types';
import { initialOptions, reducer } from '../../store/reducer';

const OrderModal: FC<IDrinkOptions> = ({
  options: { title, sizes, roast, sweets, imgUrl, serving },
}): JSX.Element => {
  const [options, dispatch] = useReducer(reducer, initialOptions);

  function handleOptionClick(
    el: ISizes | ISweet | ServingType | string,
    type: string,
  ) {
    switch (type) {
      case 'PICK_SIZE':
        dispatch({ type: ActionTypes.PICK_SIZE, payload: el as ISizes });
        break;
      case 'PICK_ROAST':
        dispatch({ type: ActionTypes.PICK_ROAST, payload: el as ROAST });
        break;
      case 'PICK_SWEETS':
        dispatch({ type: ActionTypes.PICK_SWEET, payload: el as ISweet });
        break;
      case 'PICK_SERVING':
        dispatch({
          type: ActionTypes.PICK_SERVING,
          payload: el as ServingType,
        });
        break;
    }
  }

  const totalPrice =
    options.size.price +
    options.sweet.reduce((sum, current) => sum + current.price, 0);
  // }

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
              <li
                className={options.size.size === el.size ? 'active' : ''}
                key={index}
                onClick={() => handleOptionClick(el, 'PICK_SIZE')}
              >
                {el.size}
              </li>
            ))}
          </ul>
        </div>
        <div className='option'>
          <h4>Выберите обжарку:</h4>
          <ul className='option'>
            {roast.map((el, index) => (
              <li
                className={options.roast === el ? 'active' : ''}
                key={index}
                onClick={() => handleOptionClick(el, 'PICK_ROAST')}
              >
                {el}
              </li>
            ))}
          </ul>
        </div>
        <div className='option'>
          <h4>Что-нибудь еще?</h4>
          <ul className='option'>
            {sweets.map((el, index) => (
              <li
                className={
                  options.sweet.find((item) => item.sweet === el.sweet)
                    ? 'active'
                    : ''
                }
                key={index}
                onClick={() => handleOptionClick(el, 'PICK_SWEETS')}
              >
                {el.sweet}
              </li>
            ))}
          </ul>
        </div>
        <div className='option'>
          <h4>Выберите сервировку:</h4>
          <ul className='option'>
            {serving.map((el, index) => (
              <li
                className={options.serving === el ? 'active' : ''}
                key={index}
                onClick={() => handleOptionClick(el, 'PICK_SERVING')}
              >
                {el}
              </li>
            ))}
          </ul>
        </div>
        <div className='order-total'>Итого: {totalPrice} KZT</div>
        <div className='button-block'>
          <button className='confirm-button'>Заказать</button>
          <button className='cancel-button'>Отмена</button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
