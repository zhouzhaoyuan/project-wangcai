import Page from '../components/Page';
import React from 'react';
import styled from 'styled-components';

const TagsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  flex-grow: 1;
  background: #FFF;
  padding: 12px 16px;
  > ol{
    margin: 0 -12px;
    > li{
      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
    }
  }
  > button{
    background: none;
    border: none;
    border-bottom: 1px solid #333;
    color: #666;
    padding: 2px 4px ;
    margin-top: 8px ;
  }
  
`
const NoteSection = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  >label{
    display: flex;
    align-items: center;
    >span{
      margin-right: 16px;
      white-space: nowrap;
      
    }
    >input{
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
  
`
const CategorySection = styled.section`
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
const NumberPadSection = styled.section`
  > .output{
    background: white;
    line-height: 72px;
    font-size: 36px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                inset 0 5px 5px -5px rgba(0,0,0,0.25);
    
  }
  > .pad{
    //border: 1px solid red; //直接使用浮动的话会造成高度坍塌  要使用清除浮动
    > button{
      font-size: 18px;
      float: left;
      height: 64px;
      width: 25%;
      border: none;
      &.OK{
        float: right;
        height: 128px;
      }
      &.zero{
        width: 50%;
      }
      &:nth-child(1){
        background:#F2F2F2;
      }
      &:nth-child(2),
      &:nth-child(5){
        background:#E0E0E0;
      }
      
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background:#D3D3D3;
      }
      
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10)
      {
        background:#C1C1C1;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13)
      {
        background:#B8B8B8;
      }
      &:nth-child(14){
        background:#9A9A9A;
      }
      &:nth-child(12){
        background:#8B8B8B;
      }
    }
  }
       
`
const MyLayout = styled(Page)`
  display: flex;
  flex-direction: column;
`
const Money = () => {
  return (
    <MyLayout>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </TagsSection>
      <NoteSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder="在这里添加备注"/>
        </label>
      </NoteSection>
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div className="output">
          100
        </div>
        <div className="pad clearfix" >
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="OK">OK</button>
          <button className="zero">0</button>
          <button className="dot">.</button>
        </div>
      </NumberPadSection>
    </MyLayout>
  )
};
export default Money