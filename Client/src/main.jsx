import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import App from './App.jsx';
//import axios from 'axios'

//axios.defaults.baseURL = 'http://localhost:3001'
//axios.defaults.baseURL = 'https://pruebadeploy-production-abaa.up.railway.app'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
