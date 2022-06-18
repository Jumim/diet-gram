import React from 'react';
import './Button.scss';

interface ButtonProps {
  btnType: 'positive' | 'negative' | 'default'
  type: 'button' | 'submit' | 'reset'
  children: string | React.ReactNode | React.ReactNode[]
  onClick?: () => void
}

export const Button= ({
  btnType = 'default',
  type = 'button',
  children,
  onClick
}: ButtonProps) => {
  return (
    <button className={['Button', `Button_${btnType}`].join(' ')} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
