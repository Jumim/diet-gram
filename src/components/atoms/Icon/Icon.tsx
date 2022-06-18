import './Icon.scss';

interface IconType {
  type: 'Default' | 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack' | string
  text: string
}

export const Icon = ({
  type = 'default',
  text
}: IconType) => {
  return (
    <div className={`Icon Icon${type}`}>
      {text}
    </div>
  );
}
