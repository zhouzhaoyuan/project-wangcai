import Page from '../components/Page';
import React from 'react';
import styled from 'styled-components';
import TagsSection from './Money/TagsSection';
import NoteSection from './Money/NoteSection';
import CategorySection from './Money/CategorySection';
import NumberPadSection from './Money/NumberPadSection';


const MyLayout = styled(Page)`
  display: flex;
  flex-direction: column;
`
const Money = () => {
  return (
    <MyLayout>
      <TagsSection />
      <NoteSection />
      <CategorySection />
      <NumberPadSection />
    </MyLayout>
  )
};
export default Money