import React, {FC} from 'react';
import {useTags} from 'hooks/useTags';
import { useParams,} from 'react-router-dom';
import Page from 'components/Page';
import Icon from 'components/Icon';
import {Button} from 'components/Button';
import styled from 'styled-components';
import {Input} from 'components/Input';
import {Center} from '../components/Center';
import {Space} from '../components/Space';


const InputWrapper = styled.div`
  background-color: #fff;
  padding: 0 16px;
  margin-top: 16px;
`;

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background-color: #fff;
`;

type Params = {
  id: string;
}
const Tag: FC = (props) => {
  const {findTag,updateTag,deleteTag} = useTags();
  let {id: idString} = useParams<Params>();
  const tag = findTag(parseInt(idString ?? ''));
  const tagContent = (tag:{id:number,name:string}) => (<div>
    <InputWrapper>
      <Input label="标签名" type="text" placeholder="标签名"
             value={tag.name}
             onChange={(e) => {
               updateTag(tag.id, {name: e.target.value});
             }}
      />
    </InputWrapper>
    <Space/>
    <Space/>
    <Space/>
    <Center>
      <Button onClick={() => {
        deleteTag(tag.id);
      }}>删除标签</Button>
    </Center>
  </div>);


  const onclickBack = () => {
    window.history.back()
    console.log('back');
  }

  return (
      <Page>
        <Topbar>
          <Icon name="left" onClick={onclickBack}/>
          <span>编辑标签</span>
          <Icon/>
        </Topbar>
        {tag ? tagContent(tag) : <Center>tag不存在</Center>}
      </Page>
    );

};
export {Tag};