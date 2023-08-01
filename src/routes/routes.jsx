import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from '../pages/websites/login/login';
import Signup from '../pages/websites/signup/signup';
import Home from '../pages/websites/home';
import AdminDashboard from '../pages/admin/adminDashboard';
import '../styles/App.css';
import '../styles/responsive.css'
import Donation from '../pages/donor/donation';
import Success from '../pages/donor/success';
import Donor from '../pages/donor/donor';
// import Login from './pages/websites/login/login';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="donation" element={<Donation />} />
        <Route path="success" element={<Success />} />
        <Route path="donor" element={<Donor />} />
        


    </Routes>
  )
}

export default AppRoutes