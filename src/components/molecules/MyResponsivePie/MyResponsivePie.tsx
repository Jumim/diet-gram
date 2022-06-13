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
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.6}
        activeOuterRadiusOffset={8}
        arcLinkLabelsDiagonalLength={12}
        arcLinkLabelsStraightLength={12}
        colors={{ scheme: 'pastel2' }}
        legends={[]}
      />
    </div>
  )
}
