import React, {FC} from "react";
import './index.css'

interface IContainer {
    children: React.ReactNode
}

const Container: FC<IContainer> = ({children}) => {
    return (
        <div className='background' style={{ backgroundImage: `url('img/coffee-shop.png')` }}>
            {children}
        </div>
    )
}
export default Container