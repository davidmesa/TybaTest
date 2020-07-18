/* eslint-disable camelcase */
const { gMapsKey } = require('../../config/vars');

const axios = require('axios');

exports.search = async (searchTerm) => {
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=1500&' +
    'type=restaurant&keyword=cruise&key=${gMapsKey}&location=${searchTerm}`;
  const response = await axios.get(url);
  const { results } = response.data;
  return results;
};
