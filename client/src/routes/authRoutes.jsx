import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userRole = useSelector((state) => state.user.role);
  const navigate = useNavigate()

  if (!isAuthenticated) {
    return navigate("/login");
  }

  if (isAuthenticated) {
    if (userRole === 'donor') {
      navigate("/d-landing");
    } else if (userRole === 'admin') {
      navigate("/admin");
    } else if (userRole === 'receiver') {
      navigate("/receiver");
    }
  }
  return <Outlet />;
};

export { PrivateRoute };


const PublicRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate()

  if (!isAuthenticated) {
    return navigate("/");
  }
  // console.log(isAuthenticated.role)
  return <Outlet />;
};

export { PublicRoute };