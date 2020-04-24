import React,{useEffect} from 'react';

import './App.css';


import {
  BrowserRouter as Router,

} from "react-router-dom";
import Routes  from './Routes'

import Cookies from 'js-cookie'

function App() {

 
  return (
    <div>

      
      <Router>
        <Routes/>
      </Router>
  

     

    </div>
      
  );
}

export default App;
