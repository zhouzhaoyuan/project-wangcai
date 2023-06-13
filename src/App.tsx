import React from 'react';
import {HashRouter, Routes, Route, Outlet, Link} from 'react-router-dom';
import styled from 'styled-components';
import './index.scss'
import Money from './views/Money';
import Tags from 'views/Tags';
import Statistics from './views/Statistics';
import NoPage from './views/Nopage';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Money/>}/>
          <Route path="tags" element={<Tags/>}/>
          <Route path="money" element={<Money/>}/>
          <Route path="statistics" element={<Statistics/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Route>
      </Routes>
    </HashRouter>
  );
}

const Layout = () => {
  return (
      <Wrapper>
        <Main>
          <Outlet/>
        </Main>
      </Wrapper>
  );
};

export default App;

