import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mapbox-gl/dist/mapbox-gl.css';

import './index.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import App from './App';

import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import tourReducer from './features/tourDetails'
import userReducer from './features/userDetails'

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: {
    tourData: tourReducer,
    userData: userReducer
  }
})

root.render(
  <Provider store={store}>
    <App />
  </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
