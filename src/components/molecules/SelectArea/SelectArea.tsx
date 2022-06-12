import { Label } from 'components';
import './SelectArea.scss';

interface SelectAreaType {
  label: string
  item: any
  name: string
  defaultValue?: string
}

export const SelectArea = ({ label, item, name, defaultValue }: SelectAreaType) => {
  return (
    <div className='selectArea'>
      <Label>{label}</Label>
      <select defaultValue={defaultValue}>
        {
          item.map((data: any, i: number) =>
            <option key={'select_' + i} value={data.value}>{data.name}</option>
          )
        }
      </select>
    </div>
  );
}
