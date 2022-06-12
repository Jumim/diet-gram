import './Input.scss';

interface InputType {
  name: string
  type: string
  onChange: () => void
  defaultValue?: string | number | undefined
  placeholder?: string | undefined
}

export const Input = ({...props}: InputType) => {
  return (
    <input {...props}/>
  );
}
