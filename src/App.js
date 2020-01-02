import React, { useState } from 'react';

import Routes from './routes' 

import logo from './assets/logo2.png'

import './App.css';

function App() {

  return (
    <div className="container">
      <nav>
        <img className="imgLogo" src={logo}></img>
        <ul>
          <li>Ranking</li>
          <li>Quem Somos</li>
          <li>O que fazemos</li>
          <li className="especial">Entrar/Cadastrar</li>
        </ul>
      </nav>

      <div className="content">
        <Routes/>
      </div>
    </div>
  );
}

export default App;
