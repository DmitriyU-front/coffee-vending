import React, { FC } from 'react';
import './index.css';

interface IProps {
  id: number;
  title: string;
  imgUrl: string;
  description: string;
  handleClick: (id: number) => void;
}

const Drink: FC<IProps> = ({
  id,
  title,
  imgUrl,
  description,
  handleClick,
}): JSX.Element => {
  return (
    <div
      className='product'
      onClick={() => {
        handleClick(id);
      }}
    >
      <div className='product-img__container'>
        <img className='product-img' src={imgUrl} alt={'espresso'} />
      </div>
      <div className='product-title'>{title}</div>
      <div className='product-description'>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Drink;
