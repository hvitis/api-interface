import axios from 'axios';

export default (title, category) =>
  new Promise((resolve, reject) => {
    let BASE_URL = `https://api.publicapis.org/entries?`;

    if (title) {
      BASE_URL += `title=${title}&`;
    }
    if (category) {
      BASE_URL += `category=${category}&`;
    }

    function checkStatus(response, resolve, reject) {
      const { status, data } = response;
      if (status >= 200 && status < 300) {
        return resolve(data);
      }

      return reject(data);
    }

    const contentType = 'application/json; charset=UTF-8';

    axios(BASE_URL, {
      method: 'GET',
      headers: {
        'Content-Type': contentType,
      },
    })
      .then((response) => checkStatus(response, resolve, reject))
      .catch((error) => {
        checkStatus(error, resolve, reject);
      })
      .catch(reject);
  });
