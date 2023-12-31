import styled from 'styled-components';
import React, {FC, useState} from 'react';

const Wrapper = styled.section`
  font-size: 24px;
  >ul{
    display: flex;
    background: #c4c4c4;
    >li{
      width: 50%;
      text-align: center;
      padding: 18px 0;
      position: relative;
      &.selected::after{
        content: '';
        display: block;
        height: 4px;
        background: #333;
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 100%;
      }
    }
  }
`
type Props = {
  //类型说明
  value:'-' | '+',
  onChange:(selcted:'-' | '+') => void
}
const CategorySection:FC<Props> = (props) => {
  const categoryMap ={'-':'支出','+':'收入'}
  const [categoryList] = useState<('-'|'+')[]>(['-', '+'])
  const category = props.value
  return(
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li className={category === c ? 'selected' : ''}
              onClick={() => {props.onChange(c)}}
          >
            {categoryMap[c]}
          </li>
        )}


      </ul>
    </Wrapper>
  )
}
export default CategorySection