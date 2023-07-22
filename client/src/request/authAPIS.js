import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { ENDPOINTS } from './endpoints';

// Create new user
export function SignIn(payload) {
  return axios.post(ENDPOINTS.SIGIN, payload)
    .then(response => {
      if (response?.data.success === true) {
        toast.success('New user created successfully!');
        return response;
      } else {
        toast.error('Failed to create account!');
        return;
      }
    })
    .catch(error => {
      console.log(error,"error")
        toast.error(error?.response.data.message);
        return;
    });
}



export function Login(payload) {
  console.log(payload)
  return axios.post(ENDPOINTS.LOGIN, payload)
    .then(response => {
      if (response?.data.success === true) {
        toast.success('Login successful!');
        return response;
      } else {
        toast.error('Login failed. Please check your credentials.');
        return;
      }
    })
    .catch(error => {
      console.log(error, "error");
      toast.error(error?.response.data.message);
    });
}
