import axios from 'axios';

export const get = ({ url, params }) => new Promise((resolve, reject) => {
  const data = new URLSearchParams(params).toString();
  axios.get(`${process.env.REACT_APP_BASE_API}/${url}?${data}`)
    .then((response) => resolve(response))
    .catch((error) => {
      if (error.response.status === 401) {
        window.location = '/';
      }
      reject(error);
    });
});

export const post = ({ url, body }) => new Promise((resolve, reject) => {
  axios.post(`${process.env.REACT_APP_BASE_API}/${url}`, body)
    .then((response) => resolve(response))
    .catch((error) => {
      if (error.response.status === 401) {
        window.location = '/';
      }
      reject(error);
    });
});
