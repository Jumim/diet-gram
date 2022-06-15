import React from 'react';
import { RiUserSmileFill } from 'react-icons/ri';
import { Link } from 'components';
import './Header.scss';

interface HeaderType {
  children: React.ReactNode | React.ReactNode[]
}

export const Header = ({ children }: HeaderType) => {
  return (
    <header>
      <div className='HeaderLeft'>
        <Link to='/' type='none'>
          <img src='image/dietgram_logo.png'></img>
        </Link>
      </div>
      <div className='HeaderCenter'>
        {children}
      </div>
      <div className='HeaderRight'>
        <RiUserSmileFill />
      </div>
    </header>
  );
}
