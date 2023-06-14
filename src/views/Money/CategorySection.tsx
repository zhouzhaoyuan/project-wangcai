import styled from 'styled-components';

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
export default CategorySection