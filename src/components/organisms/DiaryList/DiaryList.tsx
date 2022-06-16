import { Feed, Icon, IconList, Text, Button } from 'components';
import './DiaryList.scss';

interface DiaryListType {
  diary: any
  navi: any
  deleteDiaryItem: (sort: string) => void
}

export const DiaryList = ({
  diary = {},
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
              <Button btnType='positive' type='button' text={`${data.sortText} 입력하기`} onClick={() => navi(`/write/${data.sort}`)} />
            </Feed>
            :
            <Feed className='DiaryFeed' key={'DiaryFeed' + i}>
              <Icon type='Dinner' text={data.sortText} />
              <IconList data={data.food} />
              <div className='ButtonArea'>
                <Button btnType='positive' type='button' text='수정' onClick={() => navi(`/edit/${data.sort}`)} />
                <Button btnType='negative' type='button' text='삭제' onClick={() => deleteDiaryItem(data.sort)} />
              </div>
            </Feed>
        )
      }
    </div>
  );
}
