import './Text.scss';

interface TextType {
  children: React.ReactNode
  className: string
}

export const Text= ({
  children,
  className = 'default'
}: TextType) => {
  return (
    <span className={className}>{children}</span>
  );
}
