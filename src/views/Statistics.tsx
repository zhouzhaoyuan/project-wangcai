import Page from '../components/Page';
import React, {useState} from 'react';
import CategorySection from './Money/CategorySection';
import styled from 'styled-components';
import {useRecords} from '../hooks/useRrcords';
import {useTags} from '../hooks/useTags';
import day from 'dayjs';

const CategoryWrapper = styled.div`
  background-color: #fff;
`
const Statistics = () => {
  const [category,setCategory] = useState<'-'|'+'>('-')
  const {records} = useRecords()
  const {getName} = useTags()
  return (
    <Page>
      <CategoryWrapper>
        <CategorySection value={category}
                         onChange={value => setCategory(value)}
        />
      </CategoryWrapper>
      <div>
        {
          records.map(r => {
            return <div>
              {r.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
              <hr/>
              {r.amount}
              <hr/>
              {day(r.createdAt).format('YYYY年MM月DD日')}
            </div>
          })
        }
      </div>
    </Page>
  );

};
export default Statistics