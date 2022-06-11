import './Input.scss';

interface InputType {
  name: string
  type: string
  defaultValue?: string | number
  placeholder?: string
  register?: any
}

export const Input = ({name, ...props}: InputType) => {
  return (
    <input {...props} />
  );
}
