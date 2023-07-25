import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from "./axiosInstance"
import { ENDPOINTS } from './endpoints';

// Create new Campagin
export function createCampagin(payload) {
  return axiosInstance.post(ENDPOINTS.CREATE_CAMPAIGN, payload)
    .then(response => {
      if (response?.data.success === true) {
        toast.success('createCampagin created successfully!');
        return response;
      } else {
        toast.error('Failed to create campagin!');
        return;
      }
    })
    .catch(error => {
        toast.error(error?.response.data.message);
        return;
    });
}