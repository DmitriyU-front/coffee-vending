import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import './index.css'

export interface IModalProps {
    isShown: boolean;
    hide: () => void;
    modalContent: JSX.Element[];
}

const Modal: FC<IModalProps> = ({isShown, hide, modalContent}) => {
    const modal = (
        <React.Fragment>
            <div className="modal-backdrop" onClick={hide}></div>
            <div className="modal-wrapper">
                <div className="modal">
                    <div className="modal-content">{modalContent}</div>
                </div>
            </div>
        </React.Fragment>
    );

    return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

export default Modal