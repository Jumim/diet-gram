import './Text.scss';

interface TextType {
  children: React.ReactNode
}

export const Text= ({children}: TextType) => {
  return (
    <span>{children}</span>
  );
}
