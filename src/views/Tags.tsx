import Page from '../components/Page';
import React, {useState} from 'react';
import {useTags} from 'useTags';

const Tags = () => {
const {tags,setTags} = useTags()
  return (
    <Page>
      <ol>
        {tags.map(tag =>
          <li key={tag}>{tag}</li>
        )}
      </ol>
    </Page>
  );
};
export default Tags;