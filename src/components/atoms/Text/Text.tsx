import './Text.scss';

interface TextType {
  children: React.ReactNode
  type?: 'default' | 'error'
  size?: 'small' | 'regular' | 'large'
}

export const Text= ({
  children,
  type = 'default',
  size = 'small'
}: TextType) => {
  return (
    <span className={[type, size].join(' ')}>{children}</span>
  );
}
