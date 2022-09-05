import React, {useContext, useState} from 'react';
import './App.css';
import Drink from "./components/Drink";
import Product from "./containers/Product";
import Wrapper from "./containers/Wrapper";
import Container from "./containers/Background";
import Logo from "./components/Logo";
import Modal from "./components/Modal";
import useModal from "./hooks/useModal";
import OrderModal from "./components/OrderModal";
import {drinksContext, store} from './store/context';

// const drinks = [
//     {
//         id: 1,
//         title: "Эспрессо",
//         imgUrl: "/img/espresso.png",
//         description: "Крепкий кофейный напиток, 30мл",
//         sizes: [
//             {size: "Обычный", price: 600},
//             {size: "Большой>", price: 1000}
//         ],
//
//         roast: [
//             "Слабая", "Средняя", "Сильная"
//         ],
//         sweets: [
//             {sweet: "Сахар", price: 50},
//             {sweet: "Корица", price: 100},
//             {sweet: "Сироп", price: 150},
//         ],
//         serving: [
//             "В свою кружку", "В бумажный стаканчик"
//         ]
//     },
//     {
//         id: 2,
//         title: "Американо",
//         imgUrl: "/img/americano.png",
//         description: "Шот эспрессо с добавлением горячей воды, 60мл"
//     },
//     {
//         id: 3,
//         title: "Капучино",
//         imgUrl: "/img/cappuccino.png",
//         description: "Шот эспрессо со взбитым молоком, 150мл"
//     },
//     {
//         id: 4,
//         title: "Латте",
//         imgUrl: "/img/latte.png",
//         description: "Шот эспрессо с двумя порциями молока, 250мл"
//     },
//     {
//         id: 5,
//         title: "Мокка",
//         imgUrl: "/img/mocha.png",
//         description: "Шот эспрессо с молоком и шоколадом, 200мл"
//     },
//     {
//         id: 6,
//         title: "Макиато",
//         imgUrl: "/img/macchiato.png",
//         description: "Двойной эспрессо с молоком и шоколадом, 250мл"
//     },
// ]

function App() {
    const { isShown, toggle } = useModal();
    const storeContext = useContext(drinksContext)
    const [pickedDrink, setPickedDrink] = useState([])

    const pickDrink = () => {
        setPickedDrink(drink => [...pickedDrink, ])
    }

    return (
        <drinksContext.Provider value={store}>
            <React.Fragment>
                 <Container>
                     <Wrapper>
                        <Logo/>
                        <Product>
                            {storeContext.map(obj => (
                                <Drink
                                    key={obj.id}
                                    title={obj.title}
                                    imgUrl={obj.imgUrl}
                                    description={obj.description}
                                    onClick={toggle}/>)
                            )}
                        </Product>
                     </Wrapper>
                </Container>
                {/*<Modal isShown={isShown} hide={toggle} modalContent={*/}
                {/*    <OrderModal*/}
                {/*                key={obj.id}*/}
                {/*                title={obj.title}*/}
                {/*                imgUrl={obj.imgUrl}*/}
                {/*                sizes={obj.sizes}*/}
                {/*                roast={obj.roast}*/}
                {/*                sweets={obj.sweets}*/}
                {/*                serving={obj.serving}/>*/}
                {/*    } />*/}
            </React.Fragment>
        </drinksContext.Provider>)
}

export default App;
