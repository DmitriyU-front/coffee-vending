import { createContext } from 'react';
import { IDrinksContext } from '../../types/interfaces';

export const store: IDrinksContext[] = [
  {
    id: 1,
    title: 'Эспрессо',
    imgUrl: '/img/espresso.png',
    description: 'Крепкий кофейный напиток, 30мл',
    sizes: [
      { size: 'Обычный 30мл', price: 600 },
      { size: 'Большой 50мл', price: 1000 },
    ],

    roast: ['Слабая', 'Средняя', 'Сильная'],
    sweets: [
      { sweet: 'Без добавок', price: 0 },
      { sweet: 'Сахар', price: 50 },
      { sweet: 'Корица', price: 100 },
      { sweet: 'Сироп', price: 150 },
    ],
    serving: ['В свою кружку', 'В бумажный стаканчик'],
  },
  {
    id: 2,
    title: 'Американо',
    imgUrl: '/img/americano.png',
    description: 'Шот эспрессо с добавлением горячей воды, 60мл',
    sizes: [
      { size: 'Обычный 60мл', price: 600 },
      { size: 'Большой 100мл', price: 1000 },
    ],

    roast: ['Слабая', 'Средняя', 'Сильная'],
    sweets: [
      { sweet: 'Без добавок', price: 0 },
      { sweet: 'Сахар', price: 50 },
      { sweet: 'Корица', price: 100 },
      { sweet: 'Сироп', price: 150 },
    ],
    serving: ['В свою кружку', 'В бумажный стаканчик'],
  },
  {
    id: 3,
    title: 'Капучино',
    imgUrl: '/img/cappuccino.png',
    description: 'Шот эспрессо со взбитым молоком, 150мл',
    sizes: [
      { size: 'Обычный 150 мл', price: 600 },
      { size: 'Большой 250мл', price: 1000 },
    ],

    roast: ['Слабая', 'Средняя', 'Сильная'],
    sweets: [
      { sweet: 'Без добавок', price: 0 },
      { sweet: 'Сахар', price: 50 },
      { sweet: 'Корица', price: 100 },
      { sweet: 'Сироп', price: 150 },
    ],
    serving: ['В свою кружку', 'В бумажный стаканчик'],
  },
  {
    id: 4,
    title: 'Латте',
    imgUrl: '/img/latte.png',
    description: 'Шот эспрессо с двумя порциями молока, 250мл',
    sizes: [
      { size: 'Обычный 250мл', price: 600 },
      { size: 'Большой 350мл', price: 1000 },
    ],

    roast: ['Слабая', 'Средняя', 'Сильная'],
    sweets: [
      { sweet: 'Без добавок', price: 0 },
      { sweet: 'Сахар', price: 50 },
      { sweet: 'Корица', price: 100 },
      { sweet: 'Сироп', price: 150 },
    ],
    serving: ['В свою кружку', 'В бумажный стаканчик'],
  },
  {
    id: 5,
    title: 'Мокка',
    imgUrl: '/img/mocha.png',
    description: 'Шот эспрессо с молоком и шоколадом, 200мл',
    sizes: [
      { size: 'Обычный 200мл', price: 600 },
      { size: 'Большой 300мл', price: 1000 },
    ],

    roast: ['Слабая', 'Средняя', 'Сильная'],
    sweets: [
      { sweet: 'Без добавок', price: 0 },
      { sweet: 'Сахар', price: 50 },
      { sweet: 'Корица', price: 100 },
      { sweet: 'Сироп', price: 150 },
    ],
    serving: ['В свою кружку', 'В бумажный стаканчик'],
  },
  {
    id: 6,
    title: 'Макиато',
    imgUrl: '/img/macchiato.png',
    description: 'Двойной эспрессо с молоком и шоколадом, 250мл',
    sizes: [
      { size: 'Обычный 250мл', price: 600 },
      { size: 'Большой 350мл', price: 1000 },
    ],

    roast: ['Слабая', 'Средняя', 'Сильная'],
    sweets: [
      { sweet: 'Без добавок', price: 0 },
      { sweet: 'Сахар', price: 50 },
      { sweet: 'Корица', price: 100 },
      { sweet: 'Сироп', price: 150 },
    ],
    serving: ['В свою кружку', 'В бумажный стаканчик'],
  },
];

export const drinksContext = createContext<IDrinksContext[]>(store);
export const DrinksContextProvider = drinksContext.Provider;
