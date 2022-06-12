import { Label } from 'components';
import './SelectArea.scss';

interface SelectAreaType {
  label: string
  item: any
  name: string
  register: any
  defaultValue?: string
}

export const SelectArea = ({ label, item, register, name, defaultValue }: SelectAreaType) => {
  return (
    <div className='selectArea'>
      <Label>{label}</Label>
      <select {...register(name)} defaultValue={defaultValue}>
        {
          item.map((data: any, i: number) =>
            <option key={'select_' + i} value={data.value}>{data.name}</option>
          )
        }
      </select>
    </div>
  );
}
