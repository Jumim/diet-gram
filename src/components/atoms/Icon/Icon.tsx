import './Icon.scss';

interface IconType {
  type: string
  text: string
}

export const Icon = ({type, text}: IconType) => {
  return (
    <div className={`Icon Icon_${type}`}>
      {text}
    </div>
  );
}
