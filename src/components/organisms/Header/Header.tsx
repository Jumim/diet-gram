import React from 'react';
import './Header.scss';
import {Title} from 'components';

interface HeaderType {
  left?: React.ReactNode | React.ReactNode[]
  right?: React.ReactNode | React.ReactNode[]
  text: string
}

export const Header: React.FC<HeaderType> = ({left, right, text}) => {
  return (
    <header>
      <div className='h_left'>
        {left}
      </div>
      <div className='h_center'>
        <Title>{text}</Title>
      </div>
      <div className='h_right'>
        {right}
      </div>
    </header>
  );
}
