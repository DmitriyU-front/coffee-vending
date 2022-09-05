import React, {FC} from 'react'
import './index.css'

export interface IProps {
    title: string,
    sizes: ISizes[],
    roast: string[],
    sweets: ISweets[],
    imgUrl: string,
    serving: string[],
    onConfirm?: (e: React.MouseEvent<HTMLElement>) => void,
    onCancel?: (e: React.MouseEvent<HTMLElement>) => void,
}

export interface ISizes {
    size: string,
    price: number
}

export interface ISweets {
    sweet: string,
    price: number
}

const OrderModal: FC<IProps> = ({
                                    title,
                                    sizes,
                                    roast,
                                    sweets,
                                    onConfirm,
                                    imgUrl,
                                    onCancel
                                }): JSX.Element => {
            return (
                <React.Fragment>
                <div className="card">
                        <div className="photo">
                            <img className="order-img" src={imgUrl} alt={'espresso'}/>
                        </div>
                        <div className="options">
                            <h2>{title}</h2>
                            <div className="option">
                            <h4>Выберите размер:</h4>
                                <ul className='option'>
                                {
                                    sizes.map(el =>
                                    <li >{el.size}</li>)
                                }
                                </ul>
                            </div>
                            <div className="option">
                                <h4>Выберите обжарку:</h4>
                                <ul className='option'>
                                    {
                                        roast.map(el =>
                                        <li >{el}</li>)
                                    }
                                </ul>
                            </div>
                            <div className="option">
                                <h4>Что-нибудь еще?</h4>
                                <ul className='option'>
                                    {
                                        sweets.map(el =>
                                        <li>{el.sweet}</li>)
                                    }
                                </ul>
                            </div>
                            <div className="option">
                                <h4>Выберите сервировку:</h4>
                                <ul className='option'>
                                    {roast.map(el =>
                                    <li>{el}</li>)}
                                </ul>
                            </div>
                            <div className="button-block">
                                <button className='confirm-button'>Заказать</button>
                                <button className='cancel-button'>Отмена</button>
                            </div>
                        </div>
                </div>
            </React.Fragment>
)}

export default OrderModal