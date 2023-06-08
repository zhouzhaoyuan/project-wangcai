import React from 'react';
import {HashRouter, Routes, Route, Outlet, Link} from 'react-router-dom';
import styled from 'styled-components';
import './index.scss'
import Nav from './components/Nav';

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

        <Nav/>

      </Wrapper>
  );
};

const Money = () => {
  return <h1>记账页</h1>;
};

const Statistics = () => {
  return <h1>统计页</h1>;
};

const NoPage = () => {
  return <h1>你的路径是什么玩意！</h1>;
};

const Tags = () => {
  return <h1>标签页</h1>;
};


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

export default App;

