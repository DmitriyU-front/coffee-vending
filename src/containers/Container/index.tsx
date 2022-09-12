import React, { FC, useContext, useState } from 'react';
import './index.css';
import Logo from '../../components/Logo';
import Product from '../Product';
import Drink from '../../components/Drink';
import Wrapper from '../Wrapper';
import useModal from '../../hooks/useModal';
import { drinksContext } from '../../store/context';
import { IDrink } from '../../types';
import Modal from '../../components/Modal';
import OrderModal from '../../components/OrderModal';

interface IContainer {
  children?: React.ReactNode | IDrink;
}

const Container: FC<IContainer> = ({ children }): JSX.Element => {
  const { isShown, toggle } = useModal();
  const storeContext = useContext(drinksContext);
  const [drink, setDrink] = useState<undefined | IDrink>();

  const selectDrink = (id: number) => {
    const selectedDrink = storeContext.find((item) => item.id === id);
    selectedDrink && setDrink(selectedDrink);
    toggle();
  };
  return (
    <div
      className='background'
      style={{ backgroundImage: `url('img/coffee-shop.jpg')` }}
    >
      <Wrapper>
        <Logo />
        <Product>
          {storeContext.map((obj) => (
            <Drink
              id={obj.id}
              key={obj.id}
              title={obj.title}
              imgUrl={obj.imgUrl}
              description={obj.description}
              handleClick={selectDrink}
            />
          ))}
        </Product>
      </Wrapper>
      {drink && (
        <Modal
          isShown={isShown}
          hide={toggle}
          modalContent={<OrderModal options={drink} />}
        />
      )}
    </div>
  );
};
export default Container;
