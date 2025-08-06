import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter , Routes , Route } from 'react-router-dom';

import './index.css';
import HomePage from './components/home/homePage';
import Header from './components/header';
import Footer from './components/footer';
import RegisterationForm from './components/RegisterationForm';
import Navbar from './components/navbar';
import AboutUs from './components/AboutUs/aboutUs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Header/>
  <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/volunteer' element={<RegisterationForm/>}/>
    </Routes>
  <Footer/>
  </BrowserRouter>

);
