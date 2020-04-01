import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navigationbar/nav-main';
import Intro from './components/intro/introduction';
import Cards from './components/cards/cards';
import Brands from './components/brands/brands';
import Stats from './components/stats/main';
import Desc from './components/descrip/descrip';
import Offices from './components/offices/office';
import Footer from './components/footer/footer';

function App() {
  return (
    <div>
    <Navbar/>
    <Intro/>
    <Cards/>
    <Brands/>
    <Stats/>
    <Desc/>
    <Offices/>
    <Footer/>
    </div>
    
  );
}

export default App;
