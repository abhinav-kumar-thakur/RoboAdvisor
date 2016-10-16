import fetch from 'isomorphic-fetch';

let httpGet = (url) => {
  return fetch(url)
    .then(response => {

      debugger;
      if (response.status >= 200 && response.status < 300) {
        return response;
      }
      else {
        let error = new Error(response.statusText());
        error.response = response;
        throw error;
      }
    })
    .then(response => response.json());
};

export default httpGet;