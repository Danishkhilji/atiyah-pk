import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Api from './api'
import { ENDPOINTS } from './endpoints';


export function GetActiveCampaigns() {
    console.log("GetActiveCampaigns")
    return Api.get(ENDPOINTS.GET_ACTIVE_CAMPAIGNS )
      .then(response => {
        if (response?.data.success === true) {
          return response;
        } 
      })
      .catch(error => {
          toast.error(error?.response.data.message);
          return;
      });
  }
  