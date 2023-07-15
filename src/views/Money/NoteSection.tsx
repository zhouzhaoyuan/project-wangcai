import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from 'components/Input';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 14px 16px;
  font-size: 14px;
`;
type Props = {
  value: string,
  onChange: (selected: string) => void
}
const NoteSection: React.FC<Props> = (props) => {
  //受控组件是传 defaultvalue 和 onBlur
  //非受控组件是传 value 和 onChange

  const note = props.value;
  //const refInput = useRef<HTMLInputElement>(null)
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };
  // console.log(note);
  return (
    <Wrapper>
      <Input label="备注"
             value={note}
             onChange={onChange}
             placeholder="新增标签"
      ></Input>
    </Wrapper>
  );
};
export default NoteSection;