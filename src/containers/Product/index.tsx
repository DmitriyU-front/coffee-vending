import React, {FC} from "react";
import './index.css'

interface IProduct {
    children: React.ReactNode
}

const Product: FC<IProduct> = ({children}) => {
    return (
        <div className="product-container">
            {children}
        </div>
    )
}
export default Product