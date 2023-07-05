import styled from 'styled-components';
import React, {FC} from 'react';
import {useTags} from 'useTags';
import {createId} from 'lib/createid';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  flex-grow: 1;
  background: #FFF;
  padding: 12px 16px;

  > ol {
    margin: 0 -12px;

    > li {
      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;

      &.selected {
        background-color: #f60;
      }

    }
  }

  > button {
    background: none;
    border: none;
    border-bottom: 1px solid #333;
    color: #666;
    padding: 2px 4px;
    margin-top: 8px;
  }
`;
type Props = {
  value: number[],
  onChange: (selected:number[]) => void
}
const TagsSection: FC<Props> = (props) => {
  const {tags,setTags} = useTags()
  const selectedTagIds = props.value;
  const onAddTag = () => {
    const tagName = window.prompt('你需要新增的标签为：');
    if (tagName !== null) {
      setTags([...tags, {id:createId(),name:tagName}]);
    }
  };
  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      props.onChange(selectedTagIds.filter(t => t !== tagId));
      // 如果 tag 已被选中，就复制所有没有被选中的 tag ，作为新的 selectedTag
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };
  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag.id} onClick={() => {onToggleTag(tag.id);}}
              className={selectedTagIds.indexOf(tag.id) >= 0 ? 'selected' : ''}>
            {tag.name}
          </li>
        )}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};
export default TagsSection;