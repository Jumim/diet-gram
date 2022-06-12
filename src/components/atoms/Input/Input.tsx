import './Input.scss';

interface InputType {
  name: string
  type: string
  register?: any
  defaultValue?: string | number | undefined
  placeholder?: string | undefined
}

export const Input = ({ register, name, ...props }: InputType) => {
  return (
    <input
      {...register(name)}
      {...props}
    />
  );
}
