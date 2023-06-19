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
const CategorySection:FC = () => {
  const categoryMap ={'-':'支出','+':'收入'}
  const [category,setCategory] = useState('-')
  const [categoryList] = useState<('-'|'+')[]>(['-', '+'])

  return(
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li className={category === c ? 'selected' : ''}
              onClick={() => {setCategory(c)}}
          >
            {categoryMap[c]}
          </li>
        )}


      </ul>
    </Wrapper>
  )
}
export default CategorySection