import React from 'react';
import './Button.scss';

interface ButtonProps {
  btnType: 'positive' | 'negative' | 'default'
  type: 'button' | 'submit' | 'reset'
  text: string
  onClick?: () => void
}

export const Button= ({
  btnType = 'default',
  type = 'button',
  text,
  onClick
}: ButtonProps) => {
  return (
    <button className={['Button', `Button_${btnType}`].join(' ')} type={type} onClick={onClick}>
      {text}
    </button>
  );
}
