import axios from 'axios';

export const apiRoot = axios.create({

  baseURL: 'http://192.168.68.133:8080/', 

  headers: {
    'Content-Type': 'application/json',
  },

});





