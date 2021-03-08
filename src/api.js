const axios = require('axios')

const api = axios.create({
    baseURL: `${process.env.API_URL}`,
});

api.defaults.headers.common['Authorization'] = `Bearer ${process.env.API_TOKEN}`;

module.exports = api;
