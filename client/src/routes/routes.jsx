import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from '../pages/websites/login/login';
import Signup from '../pages/websites/signup/signup';
import Home from '../pages/websites/home';
import AdminDashboard from '../pages/admin/adminDashboard';
import '../styles/App.css';
import '../styles/responsive.css'
import Donation from '../pages/donor/donation';
import Success from '../pages/donor/success';
import CampaignPage from "../pages/donor/CampaignPage"
import DonorList from '../pages/admin/donorList';
import ClientList from "../pages/admin/clientList"
import DonorLandingPage from '../pages/donor/DonorLandingPage';
import ViewAll from '../pages/websites/ViewAll';
// import Test from '../pages/receiver/testFile';
// import RecieverProfile from '../pages/reciver/RecieverProfile';
// import UploadCampaign from '../pages/reciver/UploadCampaign'
import ReciverDashboard from '../pages/receiver/receiverDashboard';
import RecieverProfile from '../pages/receiver/RecieverProfile';
import UploadCampaign from '../pages/receiver/UploadCampaign';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="admin" element={<AdminDashboard />} />
      <Route path="admin/donor-list" element={<DonorList />} />
      <Route path="admin/client-list" element={<ClientList />} />
      <Route path="campaign" element={<CampaignPage />} />
      <Route path="upload-campaign" element={<UploadCampaign />} />
      <Route path="receiverDashboard" element={<ReciverDashboard />} />
      <Route path="donor" element={<DonorLandingPage />} />
      <Route path="donation" element={<Donation />} />
      <Route path="success" element={<Success />} />
      <Route path="detail" element={<ViewAll />} />
      <Route path="campaign" element={<CampaignPage />} />
      <Route path="reciver" element={<RecieverProfile />} />
    </Routes>
  )
}
export default AppRoutes;