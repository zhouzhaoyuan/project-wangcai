import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
require('icons/money.svg')
require('icons/tags.svg')
require('icons/statistic.svg')
// import x from 'icons/tags.svg'   会被 treeshrink 删掉
 // console.log(x);


const NavWrapper = styled.div`
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  line-height: 24px;
  >ul{
    display: flex;
    >li{
        width: 33.3333%;
        text-align: center;
        padding: 16px;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;
        .icon{
          width: 24px;
          height: 24px;
          padding: 4px 0;
        }
       }
     }
`

const Nav =() => {
  return(
  <NavWrapper>
    <ul>
      <li>
        <svg className="icon" >
          <use xlinkHref="#tags" />
        </svg>
        <Link to="/tags">标签</Link>
      </li>
      <li>
        <svg className="icon" >
          <use xlinkHref="#money" />
        </svg>
        <Link to="/money">记账页</Link>
      </li>
      <li>
        <svg className="icon" >
          <use xlinkHref="#statistic" />
        </svg>
        <Link to="/statistics">统计页</Link>
      </li>
    </ul>
  </NavWrapper>
  )
}
export default Nav;