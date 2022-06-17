import React from 'react';
import { RiUserSmileFill } from 'react-icons/ri';
import { Link, Button } from 'components';
import './Header.scss';

interface HeaderType {
  children: React.ReactNode | React.ReactNode[]
  handleLogout: () => void
}

export const Header = ({ children, handleLogout }: HeaderType) => {
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
        <Button btnType='default' type='button' text={<RiUserSmileFill />} onClick={handleLogout} />
      </div>
    </header>
  );
}
