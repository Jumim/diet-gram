import { Link as RouterLink } from 'react-router-dom';
import './Link.scss';

interface LinkProps {
  to: string
  children: React.ReactNode | React.ReactNode[]
  type?: 'line' | 'none'
}

export const Link = ({
  to,
  children,
  type = 'line'
}: LinkProps) => {
  return (
    <RouterLink to={to}>
      <span className={type}>{children}</span>
    </RouterLink>
  )
}
