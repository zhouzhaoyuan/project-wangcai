import React, {FC} from 'react';
import {useTags} from 'useTags';
import {useParams} from 'react-router-dom';
import Page from 'components/Page';
import Icon from 'components/Icon';
import {Button} from 'components/Button';
import styled from 'styled-components';
import {Input} from 'components/Input';



type Params = {
  id:string
}

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background-color: #fff;
`


const Tag:FC = (props) => {
  const {tags} = useTags();
  let {id} = useParams<Params>();
  const tag = tags.filter(tag => tag.id === parseInt(id ?? ''))[0];
  // @ts-ignore
  // @ts-ignore
  return(
    <Page>
      <Topbar>
        <Icon name="left" />
        <span>编辑标签</span>
        <Icon />
      </Topbar>
      <div>
      <Input label="备注">

      </Input>
      </div>
      <Button>删除标签</Button>
    </Page>
  )
}
export {Tag}