import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import DonorLandingPage from './pages/donor/DonorLandingPage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import App from "./App"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
reportWebVitals();
