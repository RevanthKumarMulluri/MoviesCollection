import axios from 'axios';

const omdbAxios = axios.create({
    baseURL:  'http://www.omdbapi.com/',
    params: {
        apikey: 'b8d6d204'
      },
  });


  export {
      omdbAxios
  };