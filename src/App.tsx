import React from 'react';
import './App.css';
import Body from './components/body/Body';
import Header from './components/header/Header';
import SelectedPost from './components/selectedPost/SelectedPost';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './components/authentication/signIn/SignIn';
import Paginatig from './components/pagination/Pagination';
import { useSelect } from '@mui/base';

let App = () => {

  return (<>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/*' element={<Body />} />
        <Route path='/SelectedPost/:postId' element={<SelectedPost />} />
        <Route path='/SignIn' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  </>);
}

export default App;
