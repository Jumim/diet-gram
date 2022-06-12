import { Input, Label, Text } from 'components';
import './InputArea.scss';

interface InputAreaProps {
  label: string
  error?: string
  name: string
  type: string
  register: any
  defaultValue?: string | number | undefined
  placeholder?: string | undefined
}

export const InputArea = ({ label, error, ...props }: InputAreaProps) => {
  return (
    <div className='InputArea'>
      <Label>{label}</Label>
      <Input
        {...props}
      />
      <Text className='error'>{error}</Text>
    </div>
  );
}
