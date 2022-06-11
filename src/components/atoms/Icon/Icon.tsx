import './Icon.scss';

interface IconType {
  type: 'default' | 'breakfast' | 'lunch' | 'dinner' | 'snack'
  text: string
}

export const Icon = ({
  type = 'default',
  text
}: IconType) => {
  return (
    <div className={`Icon Icon_${type}`}>
      {text}
    </div>
  );
}
