import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from '../pages/websites/login/login';
import Signup from '../pages/websites/signup/signup';
import Home from '../pages/websites/home';
import AdminDashboard from '../pages/admin/adminDashboard';
import '../styles/App.css';
import '../styles/responsive.css'
import CampaignPage from "../pages/donor/CampaignPage"
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="admin" element={<AdminDashboard />} />
      <Route path="campaign" element={<CampaignPage />} />

    </Routes>
  )
}

export default AppRoutes