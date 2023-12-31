import Page from '../components/Page';
import React, {useState} from 'react';
import styled from 'styled-components';
import TagsSection from './Money/TagsSection';
import NoteSection from './Money/NoteSection';
import CategorySection from './Money/CategorySection';
import NumberPadSection from './Money/NumberPadSection';
import {Simulate} from 'react-dom/test-utils';
import submit = Simulate.submit;
import {useRecords} from '../hooks/useRrcords';

const MyLayout = styled(Page)`
  display: flex;
  flex-direction: column;
`;

type Category = '-' | '+'
const defaultFormatData = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0
};
const Money = () => {
  const [selected, setSelected] = useState(defaultFormatData);

  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };
  const {records, addRecord} = useRecords();
  const submit = () => {
    if (addRecord(selected)) {
      alert('保存成功');
      setSelected(defaultFormatData);
      console.log(1);
    }
  };

  return (

    <MyLayout>
      {JSON.stringify(selected)}

      <hr/>
      <TagsSection value={selected.tagIds}
                   onChange={(tagIds) => onChange({tagIds})}
      />
      <NoteSection value={selected.note}
                   onChange={(note) => {onChange({note});}}
      />
      <CategorySection value={selected.category}
                       onChange={(category) => {
                         onChange({category});
                       }}
      />
      <NumberPadSection value={selected.amount}
                        onChange={(amount) => {onChange({amount});}}
                        onOk={submit}
      />
    </MyLayout>
  );
};
export default Money;