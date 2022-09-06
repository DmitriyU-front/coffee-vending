import React, { useContext, useState } from 'react';
import './App.css';
import Drink from './components/Drink';
import Product from './containers/Product';
import Wrapper from './containers/Wrapper';
import Container from './containers/Background';
import Logo from './components/Logo';
import Modal from './components/Modal';
import useModal from './hooks/useModal';
import OrderModal from './components/OrderModal';
import { drinksContext, DrinksContextProvider, store } from './store/context';
import { IDrink } from './types/interfaces';

function App() {
  const { isShown, toggle } = useModal();
  const storeContext = useContext(drinksContext);
  const [drink, setDrink] = useState<undefined | IDrink>();

  const selectDrink = (id: number) => {
    const selectedDrink = storeContext.find((item) => item.id === id);
    selectedDrink && setDrink(selectedDrink);
    toggle();
  };

  return (
    <DrinksContextProvider value={store}>
      <Container>
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
      </Container>
      {drink && (
        <Modal
          isShown={isShown}
          hide={toggle}
          modalContent={<OrderModal options={drink} />}
        />
      )}
    </DrinksContextProvider>
  );
}

export default App;
