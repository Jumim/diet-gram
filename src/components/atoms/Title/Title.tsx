import './Title.scss';

interface TitleType {
  children: React.ReactNode
}

export const Title= ({children}: TitleType) => {
  return (
    <h3 className='title'>{children}</h3>
  );
}
