import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

ReactDOM.render(
  <BrowserRouter>
      <Routes/>
      </BrowserRouter>,
  document.getElementById('root')
);


