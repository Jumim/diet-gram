import { Feed, Icon, IconList, Text, Button } from 'components';
import './DiaryList.scss';
import { DiaryDataType, SortType } from 'types';

interface DiaryListType {
  diary: DiaryDataType
  navi: any
  deleteDiaryItem: (sort: SortType) => void
}

export const DiaryList = ({
  diary,
  navi,
  deleteDiaryItem
}: DiaryListType) => {
  return (
    <div className='DiaryList rightContents'>
      {
        Object.values(diary).map((data: any, i: number) =>
          Object.keys(data).length <= 2 ?
            <Feed className='DiaryFeed' key={'DiaryFeed' + i}>
              <Text>아직 작성된 {data.sortText}이 없습니다. {data.sortText} 메뉴를 입력해주세요! :D</Text>
              <Button btnType='positive' type='button' onClick={() => navi(`/write/${data.sort}`)}>{`${data.sortText} 입력하기`}</Button>
            </Feed>
            :
            <Feed className='DiaryFeed' key={'DiaryFeed' + i}>
              <Icon type='Dinner' text={data.sortText} />
              <IconList data={data.food} />
              <div className='ButtonArea'>
                <Button btnType='positive' type='button' onClick={() => navi(`/edit/${data.sort}`)}>수정</Button>
                <Button btnType='negative' type='button' onClick={() => deleteDiaryItem(data.sort)}>삭제</Button>
              </div>
            </Feed>
        )
      }
    </div>
  );
}
