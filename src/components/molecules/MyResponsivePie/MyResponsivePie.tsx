import { ResponsivePie } from '@nivo/pie';
import './MyResponsivePie.scss';

interface MyResponsivePieType {
  data: {
    id: string
    label: string
    value: number
  }[]
}

export const MyResponsivePie = ({ data }: MyResponsivePieType) => {
  return (
    <div className='nutrientsGraph'>
      <ResponsivePie
        data={data}
        margin={{ top: 0, right: 65, bottom: -50, left: 65 }}
        innerRadius={0.6}
        activeOuterRadiusOffset={8}
        arcLinkLabelsDiagonalLength={6}
        arcLinkLabelsStraightLength={6}
        colors={{ scheme: 'pastel2' }}
        legends={[]}
      />
    </div>
  )
}
