import React, { FC } from 'react';
import './index.css';

interface IWrapper {
  children: React.ReactNode;
}

const Wrapper: FC<IWrapper> = ({ children }) => {
  return <div className='wrapper'>{children}</div>;
};
export default Wrapper;
