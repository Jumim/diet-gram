import React from 'react';
import './Button.scss';

interface ButtonType {
  btnType: 'btn1' | 'btn2' | 'btn3' | 'btn4'
  type: 'button' | 'submit' | 'reset' | undefined
  text: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button= ({btnType, type, text, onClick}: ButtonType) => {
  return (
    <button className={['Button', `Button_${btnType}`].join(' ')} type={type} onClick={onClick}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  btnType: 'btn1',
  type: 'button',
  text: '',
  onClick: ()=>{}
}
