import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const MainContainer = ({authenticated}: {authenticated: boolean}) => {
  const navi = useNavigate();

  useEffect(() => {
    if(!authenticated) {
      navi('/login');
    }
  }, [authenticated]);

  return (
    <>
    </>
  )
}
