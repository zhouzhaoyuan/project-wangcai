import React from 'react';
import {HashRouter, Routes, Route, } from 'react-router-dom';
import './index.scss';
import Money from './views/Money';
import Tags from 'views/Tags';
import Statistics from './views/Statistics';
import NoPage from './views/Nopage';
import Layout from './views/Layout';

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

