import {Outlet} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`
const Layout = () => {
  return (
    <Wrapper>
      <Main>
        <Outlet/>
      </Main>
    </Wrapper>
  );
};
export default Layout