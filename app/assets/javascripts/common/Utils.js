import fetch from 'isomorphic-fetch';

let Utils = {

  httpGet: (url) => {
    return fetch(url)
      .then(response => {

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
  },

  formatPrice: (price) => {
    price = parseFloat(price).toFixed(2).split('.');
    return price.join('.');
  },

  formatDate: (dt) => {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      date = new Date(dt);

    return date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();
  }
};


export default Utils;