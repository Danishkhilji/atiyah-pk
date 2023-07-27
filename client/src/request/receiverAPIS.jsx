import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Api from './api'
import { ENDPOINTS } from './endpoints';

// Create new Campagin
export function CreateCampagin(payload) {
  console.log(payload,"payload")
  return Api.post(ENDPOINTS.CREATE_CAMPAIGN, payload)
    .then(response => {
      console.log(response)
      if (response?.data.success === true) {
        toast.success('Campagin created successfully!');
        return response;
      } else {
        toast.error('Failed to create campagin!');
        return;
      }
    })
    .catch(error => {
      console.log(error)
        toast.error(error?.response.data.message);
        return;
    });
}
