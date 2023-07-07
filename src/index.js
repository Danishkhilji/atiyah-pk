import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DonorLandingPage from './pages/donor/DonorLandingPage';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <DonorLandingPage />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
