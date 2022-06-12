import './Form.scss';

interface FormProps {
  onSubmit: () => void
  children: React.ReactNode | React.ReactNode[]
}

export const Form = ({ onSubmit, children }: FormProps) => {
  return (
    <form className='Form' onSubmit={onSubmit}>
      {children}
    </form>
  )
}
