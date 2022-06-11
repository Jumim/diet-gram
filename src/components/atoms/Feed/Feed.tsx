import './Feed.scss';

interface FeedType {
  className: string
  children: React.ReactNode | React.ReactNode[]
}

export const Feed = ({className, children}: FeedType) => {
  return (
    <div className={['Feed', className].join(' ')}>
      {children}
    </div>
  )
}
