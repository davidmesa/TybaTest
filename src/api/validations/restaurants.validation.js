const Joi = require('joi');

module.exports = {

  // GET /v1/restaurants/:searchTerm
  restaurantsSearch: {
    params: {
      searchTerm: Joi.string().regex(/^(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)$/).required(),
    },
  },
};
