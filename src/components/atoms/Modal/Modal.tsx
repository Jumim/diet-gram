import './Modal.scss';

interface ModalType {
  children: React.ReactNode | React.ReactNode[]
}

export const Modal = ({children}: ModalType) => {
  return (
    <div className='Modal'>
      <div className='ModalArea'>
        {children}
      </div>
    </div>
  );
}
