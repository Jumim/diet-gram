import { Button } from 'components';
import './CloseButton.scss';

interface CloseButtonProps {
  onClick: () => void
}

export const CloseButton = ({
  onClick
}: CloseButtonProps) => {
  return (
    <Button btnType='default' type='button' onClick={onClick}>
      <div className='CloseButton'>
        <span className='CloseBar'></span>
        <span className='CloseBar'></span>
      </div>
    </Button>
  )
}
