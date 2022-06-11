import './Label.scss';

interface LabelType {
  children: React.ReactNode
}

export const Label = ({children}: LabelType) => {
  return (
    <label>{children}</label>
  );
}
