import React from 'react';
import './App.css';
import Container from './containers/Container';
import { DrinksContextProvider, store } from './store/context';

function App() {
  return (
    <DrinksContextProvider value={store}>
      <Container />
    </DrinksContextProvider>
  );
}

export default App;
