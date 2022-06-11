import './Input.scss';

interface InputType {
  name: string
  register: any
  type?: string
  defaultValue?: string | number
  placeholder?: string
  className?: string | undefined
}

export const Input = ({name, register, ...props}: InputType) => {
  return (
    <input {...register(name)} {...props} />
  );
}
