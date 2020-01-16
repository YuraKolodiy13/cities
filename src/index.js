import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import store from './store'
import {Provider} from "react-redux";
import {BrowserRouter} from  'react-router-dom'
import Layout from "./containers/layout/layout";

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <Layout/>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));