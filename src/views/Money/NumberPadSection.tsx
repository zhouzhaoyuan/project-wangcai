import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
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
    //border: 1px solid red; //直接使用浮动的话会造成高度坍塌      要使用清除浮动
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
const NumberPadSection:React.FC = () => {
  const [output,_setOutput] = useState('0')
  const setOutput = (output:string) => {
    if(output.length > 16){
      output = output.slice(0,16)

    }else if(output.length === 0 ) {
      output = '0'
    }
    _setOutput(output)
  }
  const onclickButtonWrapper = (e:React.MouseEvent) => {
    //console.log(e);
    const text = (e.target as HTMLButtonElement).textContent;
    //console.log(text);
    if(text === null ){return}
    switch (text){
      case '0' :
      case '1' :
      case '2' :
      case '3' :
      case '4' :
      case '5' :
      case '6' :
      case '7' :
      case '8' :
      case '9' :
      case '10' :
        //console.log(text);
        if(output === '0'){
          setOutput(text)
        }else {
          setOutput(output + text)
        }
        break
      case 'OK':
        console.log('OK');
        break
      case '删除':
        //console.log('删除');
        if(output.length === 1){
          setOutput('0')
        }else{
          setOutput(output.slice(0,output.length-1))
      }
        break
      case '清空':
        //console.log('清空');
        setOutput('0')
        break
      case '.':
        //console.log('点');
        if(output.indexOf('.')>=0){
          return;
        }else {
          setOutput(output+'.')
        }
        break
    }
  }
  return(
    <Wrapper>
      <div className="output">
        {output}
      </div>
      <div className="pad clearfix" onClick={onclickButtonWrapper}>
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
    </Wrapper>
  )
}
export default NumberPadSection