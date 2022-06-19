import { Input, Label, Text } from 'components';
import './InputArea.scss';

interface InputAreaProps {
  label: string
  name: string
  type: string
  register: any
  defaultValue?: string | number | undefined
  placeholder?: string | undefined
  error?: string
  readOnly?: boolean
}

export const InputArea = ({ label, error, ...props }: InputAreaProps) => {
  return (
    <div className='InputArea'>
      <Label>{label}</Label>
      <Input
        {...props}
      />
      <Text type='error'>{error}</Text>
    </div>
  );
}
