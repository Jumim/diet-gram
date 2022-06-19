import React from 'react';
import './Header.scss';

interface HeaderType {
  left?: React.ReactNode | React.ReactNode[]
  right?: React.ReactNode | React.ReactNode[]
  center: React.ReactNode | React.ReactNode[]
}

export const Header = ({ left, right, center }: HeaderType) => {
  return (
    <header>
      <div className='HeaderLeft'>
        {left}
      </div>
      <div className='HeaderCenter'>
        {center}
      </div>
      <div className='HeaderRight'>
        {right}
      </div>
    </header>
  );
}
