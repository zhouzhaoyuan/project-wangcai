import React from 'react';
import {HashRouter, Routes, Route, Outlet, Link} from 'react-router-dom';
import styled from 'styled-components';
import './index.scss'

const Wrapper = styled.div`
  border: 1px solid red;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
const Nav = styled.div`
  border: 1px solid green;
  >ul{
    display: flex;
    >li{
        width: 33.3333%;
        text-align: center;
        padding: 16px;
       }
     }
  
`

const Main = styled.div`
  border: 1px solid blue;
  flex-grow: 1;
  overflow: auto;
`

const Layout = () => {
  return (
      <Wrapper>
        <Main>
          <Outlet/>
        </Main>

      <Nav>
        <ul>
          <li>
            <Link to="/money">记账页</Link>
          </li>
          <li>
            <Link to="/tags">标签页</Link>
          </li>
          <li>
            <Link to="/statistics">统计页</Link>
          </li>
        </ul>
      </Nav>

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

