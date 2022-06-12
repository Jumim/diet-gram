import { Link as RouterLink } from 'react-router-dom';
import './Link.scss';

interface LinkProps {
  to: string
  children: React.ReactNode | React.ReactNode[]
}

export const Link = ({to, children}: LinkProps) => {
  return (
    <RouterLink to={to}>
      <span>{children}</span>
    </RouterLink>
  )
}
