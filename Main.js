import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import BoksHakkında from './BoksHakkında.js';
import Sparring from './Sparring.js';
import Analiz from './Analiz.js';
import Kariyer from './Kariyer.js';
import Antrenman from './Antrenman.js';

class Main extends React.Component {
  render() {
    return (
      <HashRouter>

      <div className="main">
        <h1 className="üst-fotolar"></h1>

        <ul className="header">
          <a href=".boxing" id="boxing"><span className="boxing">Boxing-TR</span></a>
          <li><NavLink exact to="/">Boks Hakkında</NavLink></li>
          <li><NavLink to="/Sparring">Sparring Buluşması</NavLink></li>
          <li><NavLink to="/Analiz">Şampiyonların Teknik Analizi</NavLink></li>
          <li><NavLink to="/Kariyer">Boksta Kariyer</NavLink>></li>
          <li><NavLink to="/Antrenman">Baştan Ayağa Antrenman</NavLink></li>

        </ul>
        
        <div className="content">
         <Route exact path = "/" component = {
           BoksHakkında}/>
           <Route path = "/Sparring" component = {
           Sparring}/>
           <Route path = "/Analiz" component = {
           Analiz}/>
           <Route path = "/Kariyer" component = {
           Kariyer}/> 
           <Route path = "/Antrenman" component = {Antrenman}/>
        </div>

      </div>
      </HashRouter>
    );
  }
}

export default Main;
