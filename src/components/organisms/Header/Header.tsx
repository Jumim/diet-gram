import React from 'react';
import './Header.scss';

interface HeaderType {
  children: React.ReactNode | React.ReactNode[]
}

export const Header = ({children}: HeaderType) => {
  return (
    <header>
      <div className='HeaderLeft'>
        로고
      </div>
      <div className='HeaderCenter'>
        {children}
      </div>
      <div className='HeaderRight'>
        마이페이지
      </div>
    </header>
  );
}
