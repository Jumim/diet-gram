import './Loading.scss';

export const Loading = () => {
  return (
    <div className='Loading'>
      <img src={`${process.env.PUBLIC_URL}/image/Loading.gif`} />
    </div>
  )
}
