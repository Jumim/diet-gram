import {Button, Title} from 'components';
import './Modal.scss';

interface ModalType {
  top?: React.ReactNode | React.ReactNode[]
  bottom?: React.ReactNode | React.ReactNode[]
}

export const Modal = ({top, bottom}: ModalType) => {
  return (
    <div className='Modal'>
      <div className='ModalArea'>
        <div className='ModalAreaTitle'>
          {top}
        </div>
        <div className='ModalAreaContent'>
          {bottom}
        </div>
      </div>
    </div>
  );
}
