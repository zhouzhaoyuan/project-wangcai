import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

// import x from 'icons/tags.svg'   会被 treeshrink 删掉
 // console.log(x);


const NavWrapper = styled.div`
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  line-height: 24px;
  >ul {
    display: flex;

    > li {
      width: 33.3333%;
      text-align: center;

      > a {
        padding: 16px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .icon {
          width: 24px;
          height: 24px;
          padding: 4px 0;
        }
        &.active{
          color: skyblue;
          .icon{
            fill: skyblue;
          }
        }
        
      }
    }
  }
`

const Nav =() => {

  return(
  <NavWrapper>
    <ul>
      <li>
        <NavLink to="/tags" >
          <Icon name={"tags"}></Icon>
          标签页
        </NavLink>
      </li>
      <li>
        <NavLink to="/money" >
          <Icon name={"money"}></Icon>
          记账页
        </NavLink>
      </li>
      <li>
        <NavLink to="/statistics">
          <Icon name={"statistic"}></Icon>
          统计页
        </NavLink>
      </li>
    </ul>
  </NavWrapper>
  )
}
export default Nav;