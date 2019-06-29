const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.spacexdata.com/v3'
});

module.exports = api;
