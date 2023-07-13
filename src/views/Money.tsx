import Page from '../components/Page';
import React, {useState} from 'react';
import styled from 'styled-components';
import TagsSection from './Money/TagsSection';
import NoteSection from './Money/NoteSection';
import CategorySection from './Money/CategorySection';
import NumberPadSection from './Money/NumberPadSection';


const MyLayout = styled(Page)`
  display: flex;
  flex-direction: column;
`;

type Category = '-' | '+'
const Money = () => {

  const [selected, setSelected] = useState({
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: 0
  });

  const onChange = (obj:Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
  }

  return (

    <MyLayout>
      {/*{selected.note}*/}

      <TagsSection value={selected.tagIds}
                   onChange={(tagIds) => onChange({tagIds} )}
      />
      <NoteSection value={selected.note}
                   onChange={(note) => {onChange({note})}}
      />
      <CategorySection value={selected.category}
                       onChange={(category) => {
                         onChange({category})
                       }}
      />
      <NumberPadSection value={selected.amount}
                        onChange={(amount) => {onChange({amount})}}
                        onOk={() => {}}
      />
    </MyLayout>
  );
};
export default Money;