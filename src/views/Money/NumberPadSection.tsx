import styled from 'styled-components';

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
export default NumberPadSection