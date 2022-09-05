import React, {FC, useContext} from "react";
import './index.css'
import OrderModal from "../OrderModal";
import Modal from "../Modal";
import useModal from "../../hooks/useModal";
import {drinksContext} from "../../store/context";


interface IProps {
    title: string,
    imgUrl: string,
    description: string,
    onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const Drink: FC<IProps> = ({title, imgUrl, description, onClick}): JSX.Element => {
    const { isShown, toggle } = useModal();

    return (
        <>
        <div className="product" onClick={onClick}>
            <div className="product-img__container">
                <img className="product-img" src={imgUrl} alt={'espresso'}/>
            </div>
            <div className="product-title">{title}</div>
            <div className="product-description">
                <p>{description}</p>
            </div>
        </div>
    <Modal isShown={isShown} hide={toggle} modalContent={
        <OrderModal
            key={id}
            title={title}
            imgUrl={imgUrl}
            sizes={sizes}
            roast={roast}
            sweets={sweets}
            serving={serving}/>
    } />
        </>
    )
}

export default Drink